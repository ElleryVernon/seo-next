import React from "react";
import Header from "../../components/Header";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const Post = ({ blocks }) => {
	return (
		<>
			<Header />
			<section className="p-16 w-3/5">
				{blocks?.map((block) => {
					if (block.rich_text.length && block.type === "paragraph") {
						return (
							<p className="text-[1.1rem] py-1" key={block.id}>
								{block.rich_text[0].plain_text}
							</p>
						);
					} else if (block.rich_text.length && block.type === "heading_1") {
						return (
							<h1
								className="font-semibold text-[2rem] pb-4 pt-6"
								key={block.id}
							>
								{block.rich_text[0].plain_text}
							</h1>
						);
					} else if (block.rich_text.length && block.type === "heading_2") {
						return (
							<h2
								className="font-semibold text-[1.6rem] pb-2 pt-4"
								key={block.id}
							>
								{block.rich_text[0].plain_text}
							</h2>
						);
					} else if (block.rich_text.length && block.type === "heading_3") {
						return (
							<h3
								className="font-semibold text-[1.4rem] pb-1 pt-2"
								key={block.id}
							>
								{block.rich_text[0].plain_text}
							</h3>
						);
					} else if (block.type === "divider") {
						return <div className="border mb-4" key={block.id}></div>;
					} else if (block.type === "numbered_list_item") {
						return (
							<ol key={block.id}>
								<li>{block.rich_text[0].plain_text}</li>
							</ol>
						);
					} else {
						return <div className="py-[2px]"> </div>;
					}
				})}
			</section>
		</>
	);
};

const Text = (block) => {};

export const getStaticPaths = async () => {
	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID,
	});
	return {
		paths: response?.results?.map((page) => ({ params: { id: page.id } })),
		fallback: true,
	};
};

export const getStaticProps = async (context) => {
	const { id } = context.params;
	const page = await notion.pages.retrieve({ page_id: id });
	const { results } = await notion.blocks.children.list({
		block_id: id,
	});

	const blocks = [];

	for (const result of results) {
		const block = await notion.blocks.retrieve({ block_id: result.id });
		blocks.push({
			id: block.id,
			type: block.type,
			color: block[`${block.type}`]?.color || "",
			rich_text: block[`${block.type}`]?.rich_text || "",
		});
	}
	const dates = page.properties.date.date.start.split("-");
	return {
		props: {
			page_info: {
				author: page.properties.author.rich_text[0].plain_text,
				name: page.properties.name.title[0].plain_text,
				date: `${dates[0]}년 ${dates[1]}월 ${dates[2]}일`,
			},
			blocks,
		},
		revalidate: 1,
	};
};

export default Post;
