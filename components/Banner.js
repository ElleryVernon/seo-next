import Image from "next/image";
import { getTitle, getDescription } from "../utils";
import { useState } from "react";
import { Search } from "react-feather";

const Banner = () => {
	const [seached, setSerched] = useState(false);
	const [url, setUrl] = useState("");
	const [title, setTitle] = useState("이제 최상단에 이름을 올리세요");
	const [description, setDescription] = useState(
		"검색 광고보다 전환율이 18배 높은 자연 검색 노출 전문가 \n 내일은 최상단"
	);
	const doSearch = async (url) => {
		const title = await getTitle(url);
		const description = await getDescription(url);
		setTitle(title);
		setDescription(description);
	};
	return (
		<article className="bg-blue-600 h-[80vh] xl:flex items-center text-white justify-center">
			<section className="flex flex-col space-y-6">
				<p className="text-2xl font-bold">
					이제 검색하면 우리가 1등, 검색엔진 최적화
				</p>
				<h1 className="text-6xl font-bold">오늘 쓰면, 내일은 최상단</h1>
				<p className="text-xl font-bold pb-8">
					구글 검색엔진 최적화(SEO) 전문 기업
				</p>
				<div className="flex justify-evenly items-center border rounded-full pl-6 py-1 shadow-lg bg-white">
					<input
						type="text"
						className="mx-1 outline-0 text-black w-full p-4 font-bold"
						placeholder="URL을 입력하고 버튼을 눌러 시작하세요"
						onChange={(e) => setUrl(e.target.value)}
					/>
					<button
						className="flex items-center justify-center transition h-12 w-14 bg-blue-700 mx-4 rounded-full py-4 hover:scale-105 active:scale-100 active:opacity-70 shadow-lg"
						onClick={() => doSearch(url)}
					>
						<Search />
					</button>
				</div>
			</section>
			<section className="bg-white rounded-md px-5 py-3 shadow-lg flex max-w-xl ml-32">
				<div>
					<div className="flex">
						<div className="relative h-16 w-24">
							<Image src="/googlelogo.png" layout="fill" objectFit="contain" />
						</div>
						<div className="flex justify-center border rounded-full m-2 ml-8 mr-4 px-4 shadow-md w-[45vh]">
							<input
								type="text"
								className="mx-1 outline-0 text-black w-full"
								placeholder="SEO | 아직도 안하셨 SEO?"
							/>
						</div>
					</div>
					<section className="text-gray-600 mt-4">
						<div className="flex space-x-4 border-b border-gray-200">
							<div className="ml-36 text-blue-600 border-b-2 border-blue-600 cursor-pointer pb-2">
								전체
							</div>
							<div className="cursor-pointer">이미지</div>
							<div className="cursor-pointer">지도</div>
							<div className="cursor-pointer">뉴스</div>
							<div className="cursor-pointer">도서</div>
							<div className="cursor-pointer">더보기</div>
						</div>
						<div className="ml-36 mt-4 space-y-1">
							<p>mycompany.com</p>
							<p className="text-xl text-blue-700">{title}</p>
							<p className="text-gray-600 text-sm mr-6">{description}</p>
						</div>
						<div className="ml-36 mt-6 space-y-2">
							<p className="bg-gray-300 rounded-sm w-1/3 h-5"></p>
							<p className="bg-purple-300 rounded-sm w-3/4 h-6"></p>
							<p className="bg-gray-400 rounded-sm h-8 mr-6"></p>
						</div>
						<div className="ml-36 mt-6 space-y-2">
							<p className="bg-gray-300 rounded-sm w-1/3 h-5"></p>
							<p className="bg-purple-300 rounded-sm w-3/4 h-6"></p>
							<p className="bg-gray-400 rounded-sm h-8 mr-6"></p>
						</div>
						<div className="">
							<input type="text" className="outline-0 text-black w-[40vh]" />
						</div>
					</section>
				</div>
			</section>
		</article>
	);
};

export default Banner;
