const googleTrends = require("google-trends-api");

googleTrends
	.relatedTopics({
		keyword: "비지블",
		hl: "ko",
		startTime: new Date("2020-01-01"),
		geo: "KR",
	})
	.then(function (results) {
		console.log(results);
	})
	.catch((e) => {
		console.log(e);
	});
