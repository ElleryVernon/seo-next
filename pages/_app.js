import Head from "next/head";
import { GlobalContextProvider } from "../context/ContextWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>내일은 최상단 | 구글 검색 최적화</title>
				<meta
					name="description"
					content="비싼 광고비, 낮은 전환율.. 검색 키워드 광고에 지치셨나요? 이제 자사 홈페이지의 자연노출을 높여야 할 때입니다."
				/>
				<meta
					name="google-site-verification"
					content="-_2VJRVe6aqCvwaYpCGTfKDFk-cJZrBNRibd_VDJbT4"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalContextProvider>
				<Component {...pageProps} />
			</GlobalContextProvider>
		</>
	);
}

export default MyApp;
