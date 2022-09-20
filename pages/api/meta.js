import NextCors from "nextjs-cors";
import axios from "axios";
import { load } from "cheerio";

const getDOM = async (url) => {
	try {
		if (!url.startsWith("http")) url = "http://" + url;
		console.log(url);
		const res = await axios.get(url);
		if (res.status !== 200) return "요청실패";
		return load(res.data);
	} catch (e) {
		console.log(e);
		return "요청실패";
	}
};

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET", "HEAD"],
		origin: "*",
		optionsSuccessStatus: 200,
	});

	const { url } = req.query;
	const $ = await getDOM(url);

	if (typeof $ === "string") {
		return res.status(400).json({
			title: "URL을 다시 확인해주세요",
			description: "정보를 받아올 수 없어요",
		});
	}

	const title = $("title").text();
	const description = $("meta[name='description']").attr("content");
	const thumbnail = $("meta[property='og:image']").attr("content");
	const h1 = $("h1");
	const h2 = $("h2");
	const h3 = $("h3");
	const h4 = $("h4");
	return res.status(200).json({ title, description, thumbnail });
}
