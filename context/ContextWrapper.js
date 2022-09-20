import React, { useState } from "react";

export const GlobalContext = React.createContext({
	url: "",
	setUrl: (inputText) => {},
	searched: false,
	setSearchd: (isSearched) => {},
	cardInfo: {
		searchWord: "",
		url: "",
		title: "",
		description: "",
	},
	setCardInfo: (obj) => {},
});

export const GlobalContextProvider = (props) => {
	const [url, setUrl] = useState("");
	const [searched, setSearched] = useState(false);
	const [cardInfo, setCardInfo] = useState({
		searchWord: "SEO | 아직도 안하셨 SEO?",
		url: "mycompany.com",
		title: "이제 최상단에 이름을 올리세요",
		description:
			"검색 광고보다 전환율이 18배 높은 자연 검색 노출 전문가 \n 내일은 최상단",
		thumbnail: "",
	});
	return (
		<GlobalContext.Provider
			value={{ url, setUrl, searched, setSearched, cardInfo, setCardInfo }}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
