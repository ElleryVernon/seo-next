import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/ContextWrapper";

const Analsys = () => {
	const { searched, setSearched, cardInfo, setCardInfo, url, setUrl } =
		useContext(GlobalContext);
	return (
		<main className="flex justify-center flex-col py-8 space-y-8 items-center">
			<h1 className="text-center">구글 검색결과(SERP) 영향력</h1>
			<section className="w-[32em] border p-6 rounded-lg">
				<h2 className="text-center pb-4">사이트 제목 (title)</h2>
				<p>길이: {cardInfo.title.length}자</p>
				<p>컨텐츠: {cardInfo.title}</p>
				<p>좋아요! 길이가 적당해요. 구글 검색결과에 잘 나올거에요.</p>
			</section>
			<section className="w-[32em] border p-6 rounded-lg">
				<h2 className="text-center pb-4">사이트 설명 (description)</h2>
				<p>길이: {cardInfo.description.length}자</p>
				<p>컨텐츠: {cardInfo.description}</p>
				<p>좋아요! 길이가 적당해요. 구글 검색결과에 잘 나올거에요.</p>
			</section>
		</main>
	);
};

export default Analsys;
