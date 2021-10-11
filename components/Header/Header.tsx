import React, { FC, useEffect, useState } from "react";
import Router from "next/router";
import { Menu } from "components";

const Header: FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [categories, setCategories] = useState([]);

  const handlerOfMenu = () => {
    setMenuActive(!menuActive);
  };

  const onImageHandler = () => {
    Router.push("/");
  };

  const onAuthHandler = () => {
    Router.push("/auth/login");
  };

  useEffect(() => {
    async function getCategories() {
      const categories = await fetch("http://localhost:1337/categories").then(
        (response) => response.json()
      );
      setCategories(categories);
    }
    getCategories();
  }, []);

  return (
    <>
      <div className="flex justify-between w-full bg-blue-300 h-16 sticky inset-0">
        <div className="flex flex-row justify-start items-center">
          <div className="ml-8" onClick={handlerOfMenu}>
            <img
              className="w-8 cursor-pointer"
              src={"/images/menu-icon.png"}
              alt="menu-icon"
            />
          </div>
          <div>
            <img
              className="w-12 ml-6 cursor-pointer"
              src={"/images/blog-icon.png"}
              alt="menu-icon"
              onClick={onImageHandler}
            />
          </div>
          <div className="flex justify-center items-center ml-6">
            <input
              className="rounded h-10 p-4 pl-9 bg-search bg-16 bg-no-repeat bg-left bg-left-center"
              placeholder="Поиск"
            />
          </div>
          <div className="ml-6">
            <button className="rounded-lg h-10 w-36 bg-white border-black text-base font-medium">
              Новая запись
            </button>
          </div>
        </div>
        <div className="flex justify-items-end items-center mr-8">
          <img
            className="w-8 mr-2"
            src={"/images/avatar-icon.png"}
            alt="avatar-icon"
          />
          <button onClick={() => onAuthHandler()}>Войти</button>
        </div>
      </div>
      <Menu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        categories={categories}
      />
    </>
  );
};

export default Header;
