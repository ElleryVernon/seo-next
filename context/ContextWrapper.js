import React, { useState } from "react";

export const GlobalContext = React.createContext({
	url: "",
	setUrl: (inputText) => {},
});

export const GlobalContextProvider = (props) => {
	const [url, setUrl] = useState("");
	return (
		<GlobalContext.Provider value={{ url, setUrl }}>
			{props.children}
		</GlobalContext.Provider>
	);
};
