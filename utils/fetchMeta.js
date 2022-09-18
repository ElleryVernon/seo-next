export const fetchMeta = async (url) => {
	const res = await fetch(`api/meta?url=${url}`);
	const data = await res.json();

	return data;
};
