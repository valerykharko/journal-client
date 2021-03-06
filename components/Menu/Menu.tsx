import React, { useEffect } from "react";
import Link from "next/link";
import { MenuItem } from "components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface MenuProps {
  menuActive: boolean;
  setMenuActive: Function;
}

const Menu = ({ menuActive, setMenuActive }: MenuProps) => {
  const { activeLink } = useTypedSelector((state) => state.link);
  const { categories } = useTypedSelector((state) => state.categories);

  const { setActiveLink, fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div
        className={
          menuActive
            ? "z-20 fixed pt-4 transform transition-all duration-300 w-1/5 h-2/5 translate-x-0"
            : "z-20 fixed pt-4 transform -translate-x-full transition-all duration-300 w-1/5 h-2/5"
        }
        onClick={() => setMenuActive(false)}
      >
        <div
          className="flex flex-col items-start ml-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Link href={"/"}>
            <div
              className={
                activeLink === -1
                  ? "flex flex-row flex-shrink-0 p-2 mb-2 bg-white w-48 h-12 rounded-xl cursor-pointer"
                  : "flex flex-row flex-shrink-0 p-2 mb-2 w-48 h-12 rounded-xl cursor-pointer hover:bg-white opacity-75"
              }
              onClick={() => setActiveLink(-1)}
            >
              <div className="flex items-center justify-center ml-2">
                <img
                  className="w-8"
                  src={"/images/home-icon.png"}
                  alt="home-icon"
                />
              </div>
              <div className="flex items-center justify-center ml-3 text-lg font-semibold">
                Main page
              </div>
            </div>
          </Link>
          <Link href={"/categories"}>
            <div
              className={
                activeLink === 0
                  ? "flex flex-row flex-shrink-0 p-2 mb-5 bg-white w-48 h-12 rounded-xl cursor-pointer"
                  : "flex flex-row flex-shrink-0 p-2 mb-5 w-48 h-12 rounded-xl cursor-pointer hover:bg-white opacity-75"
              }
              onClick={() => setActiveLink(0)}
            >
              <div className="flex items-center justify-center ml-2">
                <img
                  className="w-8"
                  src={"/images/categories-icon.png"}
                  alt="categories-icon"
                />
              </div>
              <div className="flex items-center justify-center ml-3 text-lg font-semibold">
                Categories
              </div>
            </div>
          </Link>
          <div>
            {categories.map((category) => (
              <MenuItem key={category.id} item={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
