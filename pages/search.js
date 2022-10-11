import { useState } from "react";
import axios from "axios";
import SearchCard from "../components/SearchCard";

const Search = () => {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState([]);
	const handleClick = async () => {
		const result = await axios.get(`/api/search?keyword=${keyword}`);

		if (!result.data.results.length) {
			return setResults(["검색결과가 없습니다."]);
		}
		return setResults(result.data.results);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			handleClick();
		}
	};

	return (
		<section>
			<div>
				<input
					type="text"
					placeholder="키워드를 입력해주세요."
					onChange={(e) => setKeyword(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button
					onClick={handleClick}
					disabled={keyword.length === 0}
					className={`bg-blue-500 p-4 text-white ${
						keyword.length === 0 && "opacity-60"
					}`}
				>
					검색
				</button>
			</div>
			<div>
				{results.length && typeof results[0] === "string" ? (
					<p>검색결과가 없습니다.</p>
				) : (
					results.map((result, idx) => (
						<SearchCard result={result} rank={idx + 1} key={result.link} />
					))
				)}
			</div>
		</section>
	);
};

export default Search;
