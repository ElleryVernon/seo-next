import NextCors from "nextjs-cors";
import axios from "axios";
import { load } from "cheerio";
axios.defaults.withCredentials = true;

export default async function handler(req, res) {
	await NextCors(req, res, {
		methods: ["GET", "HEAD"],
		origin: "*",
		optionsSuccessStatus: 200,
	});
	let { url } = req.query;
	if (!url.startsWith("http")) {
		url = "http://" + url;
	}

	try {
		const response = await axios.get(url);
		if (response.status && response.status === 200) {
			const $ = load(response.data);
			const title = $("title").text();
			const description = $("meta[name='description']").attr("content");
			return res.status(200).json({ title, description });
		}
		throw new Error("요청 실패");
	} catch (e) {
		console.log(e);
		return res.status(404).json({
			title: "URL을 다시 확인해주세요",
			description: "URL을 다시 확인해주세요",
		});
	}
}
