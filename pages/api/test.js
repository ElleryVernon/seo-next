import urlMetadata from "url-metadata";
import getRootDomain from "get-root-domain";
import googleIt from "google-it";

const searchByKeyword = async (url, keyword) => {
	const results = await googleIt({ query: keyword, limit: 100 });
	if (!results.length) return [0, []];
	let serpRank = 0;
	for (const result of results) {
		serpRank += 1;
		if (result.link === url) {
			return [serpRank, results.slice(0, 10)];
		}
	}
	return [0, results.slice(0, 10)];
};

export default async function handler(req, res) {
	try {
		let { target, keyword } = req.query;
		if (typeof target === "string" && !target.startsWith("http")) {
			target = "http://" + target;
		}
		const rootDomain = getRootDomain(target);
		const { jsonld, ...metadata } = await urlMetadata(target);
		if (keyword) {
			const [rank, results] = await searchByKeyword(metadata.url, keyword);
			return res.status(200).json({
				root: rootDomain || "",
				serp_rank: rank,
				top_ten_of_serf: results,
				metadata,
				json_ld: jsonld,
			});
		}
		return res.status(200).json({
			root: rootDomain || "",
			metadata,
			json_ld: jsonld,
		});
	} catch (err) {
		res.status(400).json({ message: "올바르지 않은 URL 입니다.", err });
	}
}
