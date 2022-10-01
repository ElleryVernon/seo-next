import urlMetadata from "url-metadata";
import getRootDomain from "get-root-domain";
import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
	const AXIOS_OPTIONS = {
		headers: {
			"User-Agent":
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
		},
	};

	try {
		let { target } = req.query;
		if (typeof target === "string" && !target.startsWith("http")) {
			target = "http://" + target;
		}
		const rootDomain = getRootDomain(target);
		const metadata = await urlMetadata(target);

		const { data } = await axios.get(
			`https://www.google.com/search?q=site:${rootDomain}`,
			AXIOS_OPTIONS
		);

		const $ = cheerio.load(data);
		const resultCount = $("#result-stats")
			.text()
			.split("약 ")[1]
			.split("개")[0];
		res.status(200).json({
			root: rootDomain,
			root_domain_serp_count: resultCount,
			...metadata,
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: "올바르지 않은 URL 입니다.", err });
	}
}
