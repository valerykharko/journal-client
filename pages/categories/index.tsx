import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { CategoryCard } from "components";
import { Category } from "interfaces";

interface CategoriesPageProps {
  categories: Category[];
}

const CategoriesPage = ({ categories }: CategoriesPageProps) => {
  return (
    <>
      <Head>
        <title>Categories || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="categories, nextjs, IT-journal" />
        <meta name="description" content="this is Categories page on Next.js" />
      </Head>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-between w-6/12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/categories`);
  const categories = await response.json();

  return {
    props: { categories },
  };
};

export default CategoriesPage;
