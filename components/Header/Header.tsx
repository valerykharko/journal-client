import React, { FC, useEffect, useState } from "react";
import Router from "next/router";
import { Menu } from "components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ProfileInfo from "components/Profile/ProfileInfo";

const Header: FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const [categories, setCategories] = useState([]);

  const { user, isAuth } = useTypedSelector((state) => state.user);

  const handlerOfMenu = () => {
    setMenuActive(!menuActive);
  };

  const onImageHandler = async () => {
    await Router.push("/");
  };

  const onAuthHandler = async () => {
    await Router.push("/auth/login");
  };

  const onAvatarHandler = () => {
    setInfoActive(!infoActive);
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
              className="rounded-lg text-base h-10 pr-2 pl-12 bg-search bg-16 bg-no-repeat bg-left bg-left-center focus:outline-none focus:border focus:border-2 focus:border-blue-900"
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
          {isAuth ? (
            <div
              className="flex justify-center items-center mr-4 cursor-pointer"
              onClick={onAvatarHandler}
            >
              <img
                className="mr-2 w-12 h-12 rounded-xl"
                src={`${process.env.API_URL}` + user.avatar.url}
                alt={user.avatar.name}
              />
              <img
                className="w-4"
                src={"/images/arrow-down-icon.png"}
                alt={user.avatar.name}
              />
            </div>
          ) : (
            <button
              className="flex justify-center items-center p-2 mr-4 rounded-xl hover:bg-blue-100"
              onClick={() => onAuthHandler()}
            >
              <img
                className="w-10 mr-2"
                src={"/images/programmer.png"}
                alt="programmer.png"
              />
              <span className="text-lg font-semibold">Войти</span>
            </button>
          )}
        </div>
      </div>
      <Menu
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        categories={categories}
      />
      <ProfileInfo infoActive={infoActive} setInfoActive={setInfoActive} />
    </>
  );
};

export default Header;
