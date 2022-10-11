import urlMetadata from "url-metadata";
import googleIt from "google-it";

export default async function handler(req, res) {
	try {
		const { keyword, url } = req.query;
		if (keyword) {
			const results = await googleIt({ query: keyword, limit: 21 });
			if (!results.length)
				return res
					.status(200)
					.json({ message: "검색결과가 없습니다.", results: [] });

			return res.status(200).json({ results });
		} else if (url) {
			const { jsonld, ...metadata } = await urlMetadata(encodeURI(url), {
				fromEmail: "tmpks3@google.com",
				userAgent:
					"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
			});
			return res.status(200).json({
				metadata,
				jsonld,
			});
		}
	} catch (err) {
		res.status(400).json({
			message: "올바르지 않은 URL 입니다.",
			err,
			results: [],
		});
	}
}
