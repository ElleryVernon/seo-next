import { Sunrise } from "react-feather";

const Sidebar = () => {
	return (
		<aside className="h-[100vh] w-64 shadow-2xl rounded-r-[32px] flex flex-col items-center border-r border-gray-200 z-50">
			<header className="font-semibold text-lg text-blue-700 m-6 flex flex-col items-center">
				<Sunrise height={24} width={24} />
				<h1 className="mt-1">내일은 최상단</h1>
				<p className="text-gray-400 text-xs mt-1 font-normal">
					검색결과 분석센터
				</p>
			</header>
			<div className="w-full border-b-[1px] border-gray-100 mb-6"></div>
			<div className="flex flex-col space-y-2 text-sm font-semibold text-gray-400">
				<button className="transition bg-blue-50 text-blue-700 py-2 px-16 rounded-lg">
					키워드 검색
				</button>
				<button className="transition hover:bg-gray-100 hover:text-blue-700 py-2 px-16 rounded-lg">
					키워드 추적
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
