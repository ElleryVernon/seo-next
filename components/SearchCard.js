import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const SearchCard = ({ result, rank }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [siteInfo, setSiteInfo] = useState({
		metadata: "",
		jsonld: "",
		inspection: "",
	});
	let link = result.link;

	if (
		result.link.startsWith(
			"http://www.google.com/url?esrc=s&q=&rct=j&sa=U&url="
		)
	) {
		link = result.link
			.split("http://www.google.com/url?esrc=s&q=&rct=j&sa=U&url=")[1]
			.split("&ved=")[0]
			.replaceAll("%3F", "?")
			.replaceAll("%3D", "=");
	}
	const objIsEmpty = (obj) => Object.keys(obj).length === 0;
	const pageInfoInspection = ({ title, description }) => {
		const bad = {};
		const weak = {};
		const good = {};

		if (title.length === 0) {
			Object.assign(bad, {
				title:
					"타이틀이 없어요. 현재 키워드를 포함하여 태그를 구성하세요",
			});
		} else if (title.length < 15) {
			Object.assign(weak, {
				title: `타이틀이 너무 짧아요. 15자 이상으로 작성해보세요. (현재 ${title.length}자)`,
			});
		} else if (title.length > 35) {
			Object.assign(weak, {
				title: `타이틀이 너무 길어요. 35자 이하로 작성해보세요. (현재 ${title.length}자)`,
			});
		} else {
			Object.assign(good, {
				title: `타이틀이 적당해요! (현재 ${title.length}자)`,
			});
		}

		if (description.length === 0) {
			Object.assign(bad, {
				description:
					"설명이 없어요. 현재 키워드를 포함하여 페이지를 130자 내외로 요약하세요.",
			});
		} else if (description.length < 50) {
			Object.assign(weak, {
				description: `설명이 너무 짧아요. 50자 이상으로 작성해보세요. (현재 ${description.length}자)`,
			});
		} else if (description.length > 130) {
			Object.assign(weak, {
				description: `설명이 너무 길어요. 130자 이하로 작성해보세요. (현재 ${description.length}자)`,
			});
		} else {
			Object.assign(good, {
				description: `설명이 적당해요! (현재 ${description.length}자)`,
			});
		}
		return { good, weak, bad };
	};

	const handleClick = async () => {
		try {
			const res = await axios.get(`/api/search?url=${link}`);
			if (!isOpen) {
				setSiteInfo((prevState) => {
					return {
						...prevState,
						...res.data,
						inspection: pageInfoInspection({
							...res.data.metadata,
							title: result.title,
						}),
					};
				});
			}
		} catch (err) {
			setSiteInfo((prevState) => {
				return {
					...prevState,
					metadata: { description: "정보를 받아올 수 없는 페이지입니다." },
				};
			});
		} finally {
			setIsOpen(!isOpen);
		}
	};
	const getInspectionResult = (key) => {
		return typeof siteInfo.inspection !== "object" ? (
			<></>
		) : !objIsEmpty(siteInfo.inspection[key]) ? (
			<div>
				<p className="text-gray-500 font-bold">{`${key}`}</p>
				{Object.keys(siteInfo.inspection[key]).map((k, idx) => (
					<p className="py-1" key={idx}>
						{`${k}: ` + siteInfo.inspection[key][k]}
					</p>
				))}
			</div>
		) : (
			<>
				<p className="text-gray-500 font-bold">{key}</p>
				<p>존재하지 않습니다.</p>
			</>
		);
	};

	return (
		<section className="items-center cursor-pointer mb-4" onClick={handleClick}>
			<h2 key={result.link} className="pt-4 text-xs">
				{rank}{" "}
				{result.title.length > 57
					? result.title.slice(0, 57) + "..."
					: result.title}
			</h2>
			{isOpen && (
				<section>
					<div className="space-y-2 border rounded">
						<Link href={result.link}>
							<a target="_blank">
								<p className="text-xs py-1 text-gray-500">
									{link.length > 57 ? link.slice(0, 57) + "..." : link}
								</p>
							</a>
						</Link>
						<p className="text-xs text-gray-500">
							설명:{" "}
							{typeof siteInfo.metadata !== "string" &&
							siteInfo.metadata.description.length > 0
								? siteInfo.metadata.description.slice(0, 157)
								: "설명이 존재하지 않습니다."}
						</p>
					</div>
					<div className="text-xs text-gray-500 mt-4 space-y-2 border rounded">
						{getInspectionResult("bad")}
						{getInspectionResult("weak")}
						{getInspectionResult("good")}
					</div>
				</section>
			)}
		</section>
	);
};

export default SearchCard;
