import urlMetadata from "url-metadata";

export default async function handler(req, res) {
	try {
		let { target } = req.query;
		if (typeof target === "string" && !target.startsWith("http")) {
			target = "http://" + target;
		}
		const metadata = await urlMetadata(target);

		res.status(200).json({ metadata });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: "올바르지 않은 URL 입니다." });
	}
}
