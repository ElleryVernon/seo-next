import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/ContextWrapper";
import { Check } from "react-feather";
const Analsys = () => {
	const { searched, setSearched, cardInfo, setCardInfo, url, setUrl } =
		useContext(GlobalContext);
	return (
		<main className="flex justify-center flex-col py-8 space-y-8 items-center">
			<h1 className="text-center text-blue-700 font-bold text-xl">
				구글 검색결과(SERP) 영향력
			</h1>
			<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow text-xs space-y-2 bg-blue-100 border-blue-300">
				<h2 className="text-center pb-2 font-bold text-blue-700 text-base">
					사이트 제목 (title)
				</h2>
				<section className="bg-white p-3 rounded shadow">
					<p className="font-bold pb-2">컨텐츠 ({cardInfo.title.length}자)</p>
					<p>{cardInfo.title}</p>
				</section>
				<p className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
					<Check
						height={14}
						width={14}
						className="border border-green-700 rounded-full mr-1"
					/>
					<div>구글 검색결과에 잘 나올거에요</div>
				</p>
			</section>
			<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow text-xs space-y-2 bg-blue-100 border-blue-300">
				<h2 className="text-center pb-2 font-bold text-blue-700 text-base">
					사이트 설명 (description)
				</h2>
				<section className="bg-white p-3 rounded-lg shadow">
					<p className="font-bold pb-2">
						컨텐츠 ({cardInfo.description.length}자)
					</p>
					<p>{cardInfo.description}</p>
				</section>
				<p className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
					<Check
						height={16}
						width={16}
						className="border border-green-700 rounded-full mr-1"
					/>
					<div>구글 검색결과에 잘 나올거에요</div>
				</p>
			</section>
		</main>
	);
};

export default Analsys;
