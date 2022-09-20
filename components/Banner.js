import Image from "next/image";
import { useContext, useState } from "react";
import { Search } from "react-feather";
import { GlobalContext } from "../context/ContextWrapper";
import { fetchMeta } from "../utils/fetchMeta";

const Banner = () => {
	const reset = (target) => {
		if (target === "title") setTitle(cardInfo.title);
		if (target === "description") setDescription(cardInfo.description);
	};
	const [showThumbnail, SetShowThumbnail] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { searched, setSearched, cardInfo, setCardInfo, url, setUrl } =
		useContext(GlobalContext);
	const [title, setTitle] = useState(cardInfo.title);
	const [description, setDescription] = useState(cardInfo.description);
	const doSearch = async (url) => {
		setCardInfo((prevInfo) => {
			return {
				...prevInfo,
				url: "조금만 기다려주세요",
				title: "사이트 정보를 분석 중이에요!",
				description: "함께 1등을 목표로 하겠습니다",
				thumbnail: "",
			};
		});
		setSearched(true);
		const { title, description, thumbnail } = await fetchMeta(url);
		setCardInfo((prevInfo) => {
			return {
				...prevInfo,
				searchWord: "실제 검색결과가 아닙니다.",
				url: "우리의 최종 목표에요",
				title,
				description: description || "아직 설명이 없어요!",
				thumbnail: thumbnail || "",
			};
		});
		setTitle(title);
		setDescription(description);
	};

	return (
		<article
			className={`bg-blue-600 ${
				isModalOpen ? "h-[70em]" : "h-[50em]"
			} xl:h-[46em] flex flex-col xl:flex-row items-center text-white justify-center`}
		>
			<section className="flex flex-col space-y-4 xl:space-y-4 2xl:space-y-6 items-center xl:items-start mb-4">
				{!searched ? (
					<>
						<p className="text-md xl:text-xl 2xl:text-2xl font-bold">
							이제 검색하면 우리가 1등, 검색엔진 최적화
						</p>
						<p className="text-3xl xl:text-[2.5em] 2xl:text-[3.5em] font-bold">
							오늘 쓰면, 내일은 최상단
						</p>
						<h1 className="text-sm xl:text-md 2xl:text-xl font-bold pb-4">
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
						<h1 className="text-sm xl:text-md 2xl:text-xl font-bold pb-4">
							조금만 기다려주세요
						</h1>
					</>
				) : cardInfo.title === "URL을 다시 확인해주세요" ? (
					<>
						<p className="text-md xl:text-xl 2xl:text-2xl font-bold">
							내일은 최상단에서 알려드려요
						</p>
						<p className="text-3xl xl:text-[2.5em] 2xl:text-[3.5em] font-bold">
							URL을 다시 확인해주세요!
						</p>
						<h1 className="text-sm xl:text-md 2xl:text-xl font-bold pb-4">
							URL에서 정보를 받아올 수 없어요
						</h1>
					</>
				) : (
					<>
						<p className="text-md xl:text-lg 2xl:text-xl font-bold">
							내일은 최상단에서 알려드려요
						</p>
						<p className="text-3xl xl:text-[2.2em] 2xl:text-[2.7em] font-bold">
							분석이 완료되었어요!
						</p>
						<h1 className="text-sm xl:text-md 2xl:text-lg font-bold">
							스크롤하여 결과를 확인해보세요
						</h1>
					</>
				)}

				<div className="flex justify-center items-center border rounded-full pl-6 py-1 shadow-lg bg-white w-full">
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
				{!isModalOpen && (
					<button
						className="transition bg-white shadow-lg rounded-full w-full py-2 text-center text-lg text-blue-700 font-bold hover:opacity-90 active:opacity-60"
						onClick={() => setIsModalOpen(true)}
					>
						검색결과 시뮬레이터 수정하기
					</button>
				)}
				{isModalOpen && (
					<section className="bg-white text-black xl:w-full p-4 rounded-md shadow-md w-[26em] space-y-2">
						<p className="text-center mb-4 text-blue-700 font-bold">
							구글 검색 결과 시뮬레이터
						</p>
						<p className="text-sm font-bold flex justify-between">
							<div className="flex">
								제목
								<div className="text-gray-500 font-md text-[0.8em] ml-1">
									({title.length}/37)
								</div>
							</div>
							<button
								className="bg-blue-700 text-white px-2 text-xs ml-1 rounded hover:bg-blue-600 active:bg-blue-800"
								onClick={() => reset("title")}
							>
								초기화
							</button>
						</p>
						<textarea
							value={title}
							className={`outline-0 w-full border text-sm resize-none p-2 ${() =>
								title.length > 40 ?? "border-2 border-red-500"}`}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<p className="text-sm font-bold flex  justify-between">
							<div className="flex">
								내용
								<div className="text-gray-500 font-md text-[0.8em] ml-1">
									({description.length}/157)
								</div>
							</div>
							<button
								className="bg-blue-700 text-white px-2 text-xs ml-1 rounded hover:bg-blue-600 active:bg-blue-800"
								onClick={() => reset("description")}
							>
								초기화
							</button>
						</p>
						<textarea
							value={description}
							className="h-[6em] outline-0 w-full border text-sm resize-none p-2"
							onChange={(e) => setDescription(e.target.value)}
						/>
						<div class="flex items-center">
							<input
								id="link-checkbox"
								type="checkbox"
								checked={showThumbnail}
								onChange={(e) => SetShowThumbnail(e.target.checked)}
								class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-0"
							/>
							<label
								for="link-checkbox"
								class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								썸네일 미리보기
							</label>
						</div>
						<button
							className="transition w-full text-sm bg-blue-700 font-bold py-1 rounded text-white hover:opacity-90 active:opacity-60"
							onClick={() => setIsModalOpen(false)}
						>
							닫기
						</button>
					</section>
				)}
			</section>

			<section className="bg-white rounded-md px-5 py-3 shadow-lg flex flex-col w-[26em] xl:w-[44em] xl:ml-32">
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
						<div className="xl:ml-36 text-blue-600 border-b-2 border-blue-600 cursor-pointer pb-2">
							전체
						</div>
						<div className="cursor-pointer">이미지</div>
						<div className="cursor-pointer">지도</div>
						<div className="cursor-pointer">뉴스</div>
						<div className="cursor-pointer">도서</div>
						<div className="cursor-pointer">더보기</div>
					</div>
					<div className="flex xl:ml-36 mt-3 xl:mt-4 space-y-1">
						<span>
							<p className="text-[0.4em] xl:text-[0.7em]">{cardInfo.url}</p>
							<p
								className={`${
									showThumbnail ? "w-[22em]" : "w-[26em]"
								} text-[0.8em] xl:text-[1.1em] text-blue-700 mr-6`}
							>
								{title.length <= 37 ? title : title.slice(0, 37) + "..."}
							</p>
							<p
								className={`${
									showThumbnail ? "w-[29em]" : "w-[35em]"
								} text-gray-600 text-[0.6em] xl:text-[0.8em] mr-6`}
							>
								{description.length <= 157
									? description
									: description.slice(0, 157) + "..."}
							</p>
						</span>
						{cardInfo.thumbnail && showThumbnail && (
							<div className="h-14 w-14 xl:h-20 xl:w-20">
								<img
									src={cardInfo.thumbnail}
									className="object-cover h-full w-full rounded-lg xl:rounded-xl"
									alt="site thumbnail"
								/>
							</div>
						)}
					</div>
					<div className="xl:ml-36 mt-4 xl:mt-6 space-y-2">
						<p className="bg-gray-300 rounded-sm w-1/3 h-3 xl:h-5"></p>
						<p className="bg-purple-300 rounded-sm w-1/2 lx:w-3/4 h-4 xl:h-6"></p>
						<p className="bg-gray-400 rounded-sm h-7 xl:h-8 mr-6"></p>
					</div>
					<div className="xl:ml-36 mt-4 xl:mt-6 space-y-2 mb-2">
						<p className="bg-gray-300 rounded-sm w-1/3 h-3 xl:h-5"></p>
						<p className="bg-purple-300 rounded-sm w-1/2 lx:w-3/4 h-4 xl:h-6"></p>
						<p className="bg-gray-400 rounded-sm h-7 xl:h-8 mr-6"></p>
					</div>
				</section>
			</section>
		</article>
	);
};

export default Banner;
