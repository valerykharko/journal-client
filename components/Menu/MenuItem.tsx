import React from "react";
import Link from "next/link";
import { Category } from "interfaces";

interface MenuItemProps {
  item: Category;
  activeLink: number;
  onClickHandler: Function;
}

const MenuItem = ({ item, activeLink, onClickHandler }: MenuItemProps) => {
  return (
    <Link href={`/categories/${item.title}`}>
      <div
        className={
          activeLink === item.id
            ? "flex flex-row flex-shrink-0 p-2 mb-1 bg-white w-48 h-12 rounded-xl cursor-pointer"
            : "flex flex-row flex-shrink-0 p-2 mb-1 w-48 h-12 rounded-xl cursor-pointer hover:bg-white opacity-75"
        }
        onClick={() => onClickHandler(item.id)}
      >
        <div className="flex items-center justify-center ml-2">
          <img
            className="w-7"
            src={`${process.env.API_URL}` + item.image.url}
            alt={item.image.name}
          />
        </div>
        <div className="flex items-center justify-center ml-3 text-base">
          {item.title}
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
