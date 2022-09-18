import Image from "next/image";
import { useState } from "react";
import { Search } from "react-feather";
import { GlobalContext } from "../context/ContextWrapper";
import { fetchMeta } from "../utils/fetchMeta";

const Banner = () => {
	const [searched, setSearched] = useState(false);
	const [url, setUrl] = useState(GlobalContext);
	const [cardInfo, setCardInfo] = useState({
		searchWord: "SEO | 아직도 안하셨 SEO?",
		url: "mycompany.com",
		title: "이제 최상단에 이름을 올리세요",
		description:
			"검색 광고보다 전환율이 18배 높은 자연 검색 노출 전문가 \n 내일은 최상단",
	});

	const doSearch = async (url) => {
		setCardInfo((prevInfo) => {
			return {
				...prevInfo,
				url: "조금만 기다려주세요",
				title: "사이트 정보를 분석 중이에요!",
				description: "함께 1등을 목표로 하겠습니다",
			};
		});

		const { title, description } = await fetchMeta(url);
		setSearched(true);
		setCardInfo((prevInfo) => {
			return {
				...prevInfo,
				searchWord: "실제 검색결과가 아닙니다.",
				url: "우리의 최종 목표에요",
				title,
				description: description || "아직 설명이 없어요!",
			};
		});
	};

	return (
		<article className=" bg-blue-600 h-[44em] xl:h-[40em] flex flex-col xl:flex-row items-center text-white justify-center">
			<section className="flex flex-col space-y-4 xl:space-y-6 2xl:space-y-8 items-center xl:items-start">
				{!searched ? (
					<>
						<p className="text-md xl:text-xl 2xl:text-2xl font-bold">
							이제 검색하면 우리가 1등, 검색엔진 최적화
						</p>
						<p className="text-3xl xl:text-[2.5em] 2xl:text-[3.5em] font-bold">
							오늘 쓰면, 내일은 최상단
						</p>
						<h1 className="text-sm xl:text-md 2xl:text-xl font-bold pb-4 xl:pb-8">
							구글 검색엔진 최적화(SEO) 전문 기업
						</h1>
					</>
				) : cardInfo.url === "조금만 기다려주세요" ? (
					<>
						<p className="text-md xl:text-xl 2xl:text-2xl font-bold">
							내일은 최상단에서 알려드려요
						</p>
						<p className="text-3xl xl:text-[2.5em] 2xl:text-[3.5em] font-bold">
							사이트를 분석중이에요  
						</p>
						<h1 className="text-sm xl:text-md 2xl:text-xl font-bold pb-4 xl:pb-8">
							조금만 기다려주세요
						</h1>
					</>
				) : (
					<>
						<p className="text-md xl:text-xl 2xl:text-2xl font-bold">
							내일은 최상단에서 알려드려요
						</p>
						<p className="text-3xl xl:text-[2.5em] 2xl:text-[3.5em] font-bold">
							분석이 완료되었어요!
						</p>
						<h1 className="text-sm xl:text-md 2xl:text-xl font-bold pb-4 xl:pb-8">
							스크롤하여 결과를 확인해보세요
						</h1>
					</>
				)}

				<div className="flex justify-evenly items-center border rounded-full pl-6 py-1 shadow-lg bg-white">
					<input
						type="text"
						className="mx-1 outline-0 text-black w-full p-4 font-bold bg-white text-sm md:text-md"
						placeholder="URL을 입력하고 버튼을 눌러 시작"
						onChange={(e) => setUrl(e.target.value)}
					/>
					<button
						className="flex items-center justify-center transition h-11 w-16 xl:w-16 bg-blue-700 mx-4 rounded-full py-4 hover:scale-105 active:scale-100 active:opacity-70 shadow-lg"
						onClick={() => doSearch(url)}
					>
						<Search />
					</button>
				</div>
			</section>
			<section className="bg-white rounded-md px-5 py-3 shadow-lg flex flex-col w-[26em] xl:w-[44em] xl:ml-32 mt-10 sm:mt-12 xl:mt-0">
				<div className="flex flex-row">
					<div className="relative h-12 w-12 xl:h-16 xl:w-24">
						<Image src="/googlelogo.png" layout="fill" objectFit="contain" />
					</div>
					<div className="flex justify-center border rounded-full my-2 ml-4 empty:xl:ml-8 px-4 shadow-md w-[18em] xl:w-[36em]">
						<input
							type="text"
							className="mx-1 outline-0 text-black w-full bg-white text-[0.5em] xl:text-[1em]"
							placeholder={cardInfo.searchWord}
							disabled
						/>
					</div>
				</div>
				<section className="text-gray-600 mt-2 xl:mt-4">
					<div className="flex space-x-4 border-b border-gray-200 text-[0.4em] xl:text-[0.8em]">
						<div className="ml-20 xl:ml-36 text-blue-600 border-b-2 border-blue-600 cursor-pointer pb-2">
							전체
						</div>
						<div className="cursor-pointer">이미지</div>
						<div className="cursor-pointer">지도</div>
						<div className="cursor-pointer">뉴스</div>
						<div className="cursor-pointer">도서</div>
						<div className="cursor-pointer">더보기</div>
					</div>
					<div className="ml-20 xl:ml-36 mt-3 xl:mt-4 space-y-1">
						<p className="text-[0.4em] xl:text-[0.7em]">{cardInfo.url}</p>
						<p className="text-[0.8em] xl:text-[1.1em] text-blue-700">
							{cardInfo.title}
						</p>
						<p className="text-gray-600 text-[0.6em] xl:text-[0.8em] mr-6">
							{cardInfo.description}
						</p>
					</div>
					<div className="ml-20 xl:ml-36 mt-4 xl:mt-6 space-y-2">
						<p className="bg-gray-300 rounded-sm w-1/3 h-3 xl:h-5"></p>
						<p className="bg-purple-300 rounded-sm w-2/3 lx:w-3/4 h-4 xl:h-6"></p>
						<p className="bg-gray-400 rounded-sm h-7 xl:h-8 mr-6"></p>
					</div>
					<div className="ml-20 xl:ml-36 mt-4 xl:mt-6 space-y-2 mb-2">
						<p className="bg-gray-300 rounded-sm w-1/3 h-3 xl:h-5"></p>
						<p className="bg-purple-300 rounded-sm w-2/3 lx:w-3/4 h-4 xl:h-6"></p>
						<p className="bg-gray-400 rounded-sm h-7 xl:h-8 mr-6"></p>
					</div>
				</section>
			</section>
		</article>
	);
};

export default Banner;
