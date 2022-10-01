import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/ContextWrapper";
import { Check } from "react-feather";
const Analsys = () => {
	const { searched, setSearched, cardInfo, setCardInfo, url, setUrl } =
		useContext(GlobalContext);
	return (
		<main className="flex justify-center flex-col py-12 items-center bg-gray-50">
			<h1 className="text-center text-gray-700 font-bold text-4xl pb-8">
				구글 검색결과 영향력
			</h1>
			<div className="space-y-2 pb-10 text-center text-gray-500">
				<p>구글 검색 결과에 영향을 미치는 요소들을 간략히 확인해볼 수 있어요</p>
				<p>로그인을 하면 더 상세한 정보를 받아볼 수 있어요!</p>
			</div>
			<div className="grid grid-cols-3 grid-rows-2 grid-flow-col">
				<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow-xl text-xs space-y-2 bg-white mb-8 text-center">
					<h2 className="text-center pb-2 font-bold text-gray-700 text-base">
						페이지 타이틀
					</h2>

					<p className="font-base pb-2 text-gray-800">
						제목은 현재 {cardInfo.title.length}자에요!
					</p>
					<section className="border bg-white p-3 rounded shadow ">
						<p>{cardInfo.title}</p>
					</section>
					<section className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
						<Check
							height={14}
							width={14}
							className="border border-green-700 rounded-full mr-1"
						/>
						<p>구글 검색결과에 잘 나올거에요</p>
					</section>
				</section>
				<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow-xl text-xs space-y-2 bg-white mb-8 text-center">
					<h2 className="text-center pb-2 font-bold text-gray-700 text-base">
						페이지 설명
					</h2>

					<p className="font-base pb-2 text-gray-800">
						설명은 현재{" "}
						{cardInfo.description.includes("설명이 존재하지 않아요!")
							? 0
							: cardInfo.description.length}
						자에요!
					</p>
					<section className="border bg-white p-3 rounded shadow">
						<p>{cardInfo.description}</p>
					</section>
					<section className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
						<Check
							height={16}
							width={16}
							className="border border-green-700 rounded-full mr-1"
						/>
						<p>구글 검색결과에 잘 나올거에요</p>
					</section>
				</section>
				<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow-xl text-xs space-y-2 bg-white mb-8 text-center">
					<h2 className="text-center pb-2 font-bold text-gray-700 text-base">
						페이지 설명
					</h2>

					<p className="font-base pb-2 text-gray-800">
						설명은 현재{" "}
						{cardInfo.description.includes("설명이 존재하지 않아요!")
							? 0
							: cardInfo.description.length}
						자에요!
					</p>
					<section className="border bg-white p-3 rounded shadow">
						<p>{cardInfo.description}</p>
					</section>
					<section className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
						<Check
							height={16}
							width={16}
							className="border border-green-700 rounded-full mr-1"
						/>
						<p>구글 검색결과에 잘 나올거에요</p>
					</section>
				</section>
				<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow-xl text-xs space-y-2 bg-white mb-8 text-center">
					<h2 className="text-center pb-2 font-bold text-gray-700 text-base">
						페이지 타이틀
					</h2>

					<p className="font-base pb-2 text-gray-800">
						제목은 현재 {cardInfo.title.length}자에요!
					</p>
					<section className="border bg-white p-3 rounded shadow ">
						<p>{cardInfo.title}</p>
					</section>
					<section className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
						<Check
							height={14}
							width={14}
							className="border border-green-700 rounded-full mr-1"
						/>
						<p>구글 검색결과에 잘 나올거에요</p>
					</section>
				</section>
				<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow-xl text-xs space-y-2 bg-white mb-8 text-center">
					<h2 className="text-center pb-2 font-bold text-gray-700 text-base">
						페이지 설명
					</h2>

					<p className="font-base pb-2 text-gray-800">
						설명은 현재{" "}
						{cardInfo.description.includes("설명이 존재하지 않아요!")
							? 0
							: cardInfo.description.length}
						자에요!
					</p>
					<section className="border bg-white p-3 rounded shadow">
						<p>{cardInfo.description}</p>
					</section>
					<section className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
						<Check
							height={16}
							width={16}
							className="border border-green-700 rounded-full mr-1"
						/>
						<p>구글 검색결과에 잘 나올거에요</p>
					</section>
				</section>
				<section className="w-[24em] xl:w-[32em] border p-5 rounded-md shadow-xl text-xs space-y-2 bg-white mb-8 text-center">
					<h2 className="text-center pb-2 font-bold text-gray-700 text-base">
						페이지 설명
					</h2>

					<p className="font-base pb-2 text-gray-800">
						설명은 현재 {cardInfo.description.length}자에요!
					</p>
					<section className="border bg-white p-3 rounded shadow">
						<p>{cardInfo.description}</p>
					</section>
					<section className="border border-green-200 bg-green-100 p-3 rounded text-green-700 shadow flex items-center">
						<Check
							height={16}
							width={16}
							className="border border-green-700 rounded-full mr-1"
						/>
						<p>구글 검색결과에 잘 나올거에요</p>
					</section>
				</section>
			</div>
		</main>
	);
};

export default Analsys;
