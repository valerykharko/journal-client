import React from "react";
import Category from "interfaces/category";

interface CategoryHeaderProps {
  category: Category;
}

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  return (
    <div className="w-6/12 mt-3">
      <div className="bg-white rounded-2xl p-2">
        <div className="flex justify-between items-start bg-white p-2">
          <div>
            <img
              className="w-1/4"
              src={`${process.env.API_URL}` + category.image.url}
              alt={category.image.name}
            />
          </div>
          <div className="mt-5 mr-3">
            <button className="flex justify-start items-center rounded-xl w-48 bg-indigo-400 p-2">
              <img
                className="w-6 ml-3"
                src={"/images/subscribe-icon.png"}
                alt="subscribe-icon"
              />
              <span className="mt-1 ml-4 text-base text-white font-medium">
                Подписаться
              </span>
            </button>
          </div>
        </div>
        <div className="ml-4 mr-5">
          <div className="text-4xl font-semibold">{category.title}</div>
          <div className="mt-2 text-base text-justify">
            {category.description}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-base">xx xxx статей </span>
            <span className="text-base">xxx xxx подписчика</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
