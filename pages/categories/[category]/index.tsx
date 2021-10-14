import React from "react";
import Head from "next/head";
import { CategoryHeader, CategoryBody } from "components";
import { Category } from "interfaces";

interface CategoryPageProps {
  category: Category;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  return (
    <>
      <Head>
        <title>{category.title} || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="categories, javascript, nextjs, react" />
        <meta
          name="description"
          content="this is categories in IT-journal on Next.js"
        />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <CategoryHeader category={category} />
        <CategoryBody category={category} />
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const title = query.category;
  const category = await fetch(
    `${process.env.API_URL}/categories/${encodeURIComponent(title)}`
  ).then((response) => response.json());

  return { props: { category } };
}

export default CategoryPage;
