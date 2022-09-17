export const fetchMeta = async (url) => {
	console.log(process.env);
	const res = await fetch(`api/meta?url=${url}`);
	const data = await res.json();

	return data;
};
