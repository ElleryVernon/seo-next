import React from "react";
import Header from "../../components/Header";
import { Client } from "@notionhq/client";
import Link from "next/link";

const blog = ({ articles }) => {
	return (
		<>
			<Header />
			<section className="p-16 flex space-x-4 overflow-scroll scroll-smooth hover:scroll-auto">
				{articles.map((article) => {
					const date = article.properties.date.date.start.split("-");
					return (
						<Link href={`/blog/${article.id}`}>
							<article
								key={article.id}
								className="max-w-sm rounded overflow-hidden shadow-lg border-gray-100 border min-w-[480px] cursor-pointer"
							>
								<div className="px-6 py-4">
									<h2 className="text-gray-800 font-bold text-2xl">
										{article.properties.name.title[0].plain_text}
									</h2>
									<div className="flex space-x-2">
										<p className="text-gray-500 text-sm pt-1">
											{date[0]}년 {date[1]}월 {date[2]}일,
										</p>
										<p className="text-gray-500 text-sm pt-1">
											{articles[0].properties.author.rich_text[0].plain_text}
										</p>
									</div>
								</div>
							</article>
						</Link>
					);
				})}
			</section>
		</>
	);
};

export const getStaticProps = async () => {
	const notion = new Client({ auth: process.env.NOTION_API_KEY });
	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID,
		sorts: [
			{
				property: "name",
				direction: "ascending",
			},
		],
	});
	return {
		props: { articles: response.results },
		revalidate: 1,
	};
};

export default blog;
