import React from "react";
import Sidebar from "./Sidebar";
import { Search, LogIn, Box } from "react-feather";

const SearchResult = () => {
	return (
		<div className="flex">
			<Sidebar />
			<section className="flex flex-col w-full z-0">
				<span className="flex px-8 py-3 justify-between border-b border-gray-200">
					<div className="flex items-center border bg-gray-100 px-2 py-1 rounded-md">
						<Search width={16} color={"gray"} />
						<input type="text" className="outline-0 ml-2 bg-gray-100" />
					</div>
					<div className="space-x-4 text-xs flex">
						<button className="bg-blue-700 text-white py-2 px-3 rounded-md mr-2 hover:opacity-90 active:opacity-60">
							구독시작
						</button>
						<button className="border-r"></button>
						<button className="flex items-center space-x-1 text-gray-400 ml-2">
							<LogIn width={14} />
							<p>로그인</p>
						</button>
						<button className="flex items-center space-x-1 text-gray-400 ml-2">
							<Box width={14} />
							<p>회원가입</p>
						</button>
					</div>
				</span>
				<div className="grid grid-cols-2 h-full">
					<div className="bg-gray-50 w-full h-full">
						<h2 className="text-lg font-semibold text-gray-800 py-4 px-8">
							검색결과
						</h2>
						<section className="space-y-2">
							<div className="bg-white mx-8 rounded-sm px-3 py-2 shadow border border-gray-200 text-xs">
								<p>순위</p>
							</div>
							<div className="bg-white mx-8 rounded p-5 shadow border border-gray-200 flex justify-between items-center">
								<p className="text-sm">1</p>
								<p className="border py-1 px-2 text-xs rounded-full text-orange-400 border-orange-400 bg-orange-50 font-semibold">
									60
								</p>
							</div>
							<div className="bg-white mx-8 rounded p-5 shadow border border-gray-200 flex justify-between items-center">
								<p className="text-sm">2</p>
								<p className="border py-1 px-2 text-xs rounded-full text-emerald-400 border-emerald-400 bg-emerald-50 font-semibold">
									85
								</p>
							</div>
							<div className="bg-white mx-8 rounded p-5 shadow border border-gray-200 flex justify-between items-center">
								<p className="text-sm">3</p>
								<p className="border py-1 px-2 text-xs rounded-full text-red-400 border-red-400 bg-red-50 font-semibold">
									15
								</p>
							</div>
						</section>
					</div>
					<div className="p-4 font-semibold text-gray-800 overflow-scroll">
						<p>순위 변동</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SearchResult;
