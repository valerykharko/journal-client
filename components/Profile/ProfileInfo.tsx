import React from "react";
import Link from "next/link";
import Router from "next/router";
import { useActions } from "../../hooks/useActions";

interface ProfileInfoProps {
  infoActive: boolean;
  setInfoActive: Function;
}

const ProfileInfo = ({ infoActive, setInfoActive }: ProfileInfoProps) => {
  const { setUser, setAuth } = useActions();

  const logout = () => {
    Router.push("/");
    setUser(null);
    setAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setInfoActive(false);
  };

  const handleOnClick = () => {
    setInfoActive(false);
  };

  return (
    <>
      <div
        className={
          infoActive
            ? "fixed right-0 bg-white rounded-xl transform transition-all duration-300 w-1/12 -translate-x-4"
            : "fixed right-0 bg-white rounded-xl translate-x-full transition-all duration-300 w-1/12"
        }
        onClick={() => setInfoActive(false)}
      >
        <div
          className="flex flex-col justify-start items-star"
          onClick={(e) => e.stopPropagation()}
        >
          <Link href={"/profile"}>
            <div
              className="flex flex-row w-40 h-12 items-center justify-start p-2 mr-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl"
              onClick={handleOnClick}
            >
              <div className="flex items-center justify-start ml-2">
                <img
                  className="w-8"
                  src={"/images/profile/profile.png"}
                  alt="profile-icon"
                />
              </div>
              <div className="flex items-center justify-start ml-3 text-base font-semibold">
                Профиль
              </div>
            </div>
          </Link>
          <Link href={"/profile/drafts"}>
            <div
              className="flex flex-row w-40 h-12 items-center justify-start p-2 mr-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl"
              onClick={handleOnClick}
            >
              <div className="flex items-center justify-center ml-2">
                <img
                  className="w-8"
                  src={"/images/profile/essay.png"}
                  alt="essay-icon"
                />
              </div>
              <div className="flex items-center justify-start ml-3 text-base font-semibold">
                Черновики
              </div>
            </div>
          </Link>
          <Link href={"/profile/favorites"}>
            <div
              className="flex flex-row w-40 h-12 items-center justify-start p-2 mr-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl"
              onClick={handleOnClick}
            >
              <div className="flex items-center justify-center ml-2">
                <img
                  className="w-8"
                  src={"/images/profile/bookmark.png"}
                  alt="bookmark-icon"
                />
              </div>
              <div className="flex items-center justify-start ml-3 text-base font-semibold">
                Закладки
              </div>
            </div>
          </Link>
          <Link href={"/profile/settings"}>
            <div
              className="flex flex-row w-40 h-12 items-center justify-start p-2 mr-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl"
              onClick={handleOnClick}
            >
              <div className="flex items-center justify-center ml-2">
                <img
                  className="w-8"
                  src={"/images/profile/gear.png"}
                  alt="gear-icon"
                />
              </div>
              <div className="flex items-center justify-start ml-3 text-base font-semibold">
                Настройки
              </div>
            </div>
          </Link>
          <div
            className="flex flex-row w-40 h-12 items-center justify-start p-2 mr-2 cursor-pointer hover:bg-gray-200 hover:rounded-xl"
            onClick={logout}
          >
            <div className="flex items-center justify-center ml-2">
              <img
                className="w-8"
                src={"/images/profile/logout.png"}
                alt="logout-icon"
              />
            </div>
            <div className="flex items-center justify-start ml-3 text-base font-semibold">
              Выход
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
