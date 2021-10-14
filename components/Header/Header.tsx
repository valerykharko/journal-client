import React, { FC, useEffect, useRef, useState } from "react";
import Router from "next/router";
import { Menu, ProfileInfo, MakerPopup } from "components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setUser } from "../../store/actions/users";
import { useActions } from "../../hooks/useActions";

const Header: FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [infoActive, setInfoActive] = useState(false);
  const [makerPopupActive, setMakerPopupActive] = useState(false);

  console.log(makerPopupActive);

  const popupRef = useRef();
  const ownerPopupRef = useRef();
  const ownerMakerPopupRef = useRef();

  const { user, isAuth } = useTypedSelector((state) => state.user);
  const { setUser, setAuth } = useActions();

  const handlerOfMenu = () => {
    setMenuActive(!menuActive);
  };

  const onAvatarHandler = () => {
    setInfoActive(!infoActive);
  };

  const handleOfProfileOutSideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(popupRef.current && ownerPopupRef.current)) {
      setInfoActive(false);
    }
  };

  const onImageHandler = async () => {
    await Router.push("/");
  };

  const onAuthHandler = async () => {
    await Router.push("/auth/login");
  };

  const onMakerHandler = () => {
    setMakerPopupActive(true);
  };

  useEffect(() => {
    async function checkAuth() {
      if (localStorage.getItem("user") && localStorage.getItem("token")) {
        setUser(JSON.parse(localStorage.getItem("user")));
        setAuth(true);
      }
    }
    checkAuth();

    document.body.addEventListener("click", handleOfProfileOutSideClick);
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
              className="rounded-lg text-base h-10 pr-2 pl-12 bg-search bg-16 bg-no-repeat bg-left bg-left-center focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Поиск"
            />
          </div>
          <div className="ml-6" ref={ownerMakerPopupRef}>
            <button
              className="rounded-lg h-10 w-36 bg-white border-black text-base font-medium hover:bg-gray-50 hover:ring-1 hover:ring-white"
              onClick={onMakerHandler}
            >
              Новая запись
            </button>
          </div>
        </div>
        <div className="flex justify-items-end items-center mr-8">
          {isAuth ? (
            <div
              ref={ownerPopupRef}
              className="flex justify-center items-center mr-4 cursor-pointer hover:scale-95"
              onClick={onAvatarHandler}
            >
              {user?.avatar ? (
                <img
                  className="mr-2 w-12 h-12 rounded-xl"
                  src={`${process.env.API_URL}` + user.avatar.url}
                  alt={user.avatar.name}
                />
              ) : (
                <img
                  className="mr-2 w-12 h-12 rounded-xl"
                  src={"/images/user.png"}
                  alt="user"
                />
              )}
              <img
                className="w-4"
                src={"/images/arrow-down-icon.png"}
                alt="arrow-down-icon"
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
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <MakerPopup
        ownerMakerPopupRef={ownerMakerPopupRef}
        makerPopupActive={makerPopupActive}
        setMakerPopupActive={setMakerPopupActive}
      />
      <div ref={popupRef}>
        <ProfileInfo infoActive={infoActive} setInfoActive={setInfoActive} />
      </div>
    </>
  );
};

export default Header;
