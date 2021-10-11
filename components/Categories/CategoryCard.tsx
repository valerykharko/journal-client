import React from "react";
import Router from "next/router";
import Category from "@/interfaces/category";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const onClickHandler = () => {
    Router.push(`/categories/${category.title}`);
  };

  return (
    <div
      className={
        category.id === 1
          ? "flex flex-49 flex-col justify-center items-center rounded-3xl bg-white mt-3 mb-3 cursor-pointer"
          : category.id === 2
          ? "flex flex-49 flex-col justify-center items-center rounded-3xl bg-white mt-3 mb-3 cursor-pointer"
          : "flex flex-100 justify-center items-center rounded-3xl bg-white mt-3 mb-3 cursor-pointer"
      }
      onClick={() => onClickHandler()}
    >
      <div
        className={
          category.id === 1
            ? "flex flex-50 justify-center items-center"
            : category.id === 2
            ? "flex flex-50 justify-center items-center"
            : "flex-50 mr-3"
        }
      >
        <img
          className="w-full rounded-3xl"
          src={`${process.env.API_URL}` + category.big_image.url}
          alt={category.big_image.name}
        />
      </div>
      <div className="flex-50 flex-col p-2">
        <div className="text-center text-2xl">{category.title}</div>
        <div className="text-base text-justify mt-2">
          {category.description}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
