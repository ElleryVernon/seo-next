import axios from "axios";
import cheerio from "cheerio";

const getTitle = async (url) => {
	try {
		const res = await axios.get(url);
		if (res.status && res.status === 200) {
			const $ = cheerio.load(res.data);
			const title = $("title").text();
			return title;
		}
		return "URL을 다시 확인해주세요";
	} catch (e) {
		return "URL을 다시 확인해주세요";
	}
};

const getDescription = async (url) => {
	try {
		const res = await axios.get(url);
		if (res.status && res.status === 200) {
			const $ = cheerio.load(res.data);
			const description = $("meta[name='description']").attr("content");
			return description;
		}
		return "URL을 다시 확인해주세요";
	} catch (e) {
		return "URL을 다시 확인해주세요";
	}
};

export { getTitle, getDescription };
