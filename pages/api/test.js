import urlMetadata from "url-metadata";
import getRootDomain from "get-root-domain";

export default async function handler(req, res) {
	try {
		let { target } = req.query;
		if (typeof target === "string" && !target.startsWith("http")) {
			target = "http://" + target;
		}
		const rootDomain = getRootDomain(target);
		const { jsonld, ...metadata } = await urlMetadata(target);

		res.status(200).json({
			root: rootDomain || "",
			metadata,
			json_ld: jsonld,
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: "올바르지 않은 URL 입니다.", err });
	}
}
