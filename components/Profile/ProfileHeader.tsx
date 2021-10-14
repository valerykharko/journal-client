import React from "react";
import Router from "next/router";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ProfileHeader = () => {
  const routes = [
    { index: 0, link: "profile/blogs" },
    { index: 1, link: "profile/drafts" },
    { index: 2, link: "profile/favorites" },
    { index: 3, link: "profile/notifications" },
    { index: 4, link: "profile/settings" },
  ];
  const { user } = useTypedSelector((state) => state.user);
  const date = new Date(user?.created_at).toLocaleDateString();

  const onClickHandler = (activeLink) => {
    const route = routes.find((route) => route.index === activeLink).link;
    Router.push(route);
  };

  return (
    <div className="w-6/12 mt-3">
      <div className="bg-white rounded-2xl p-4">
        <div className="flex justify-between items-start">
          <div>
            {user?.avatar ? (
              <img
                className="w-1/4 rounded-xl"
                src={`${process.env.API_URL}` + user?.avatar.url}
                alt={user?.avatar.name}
              />
            ) : (
              <img
                className="w-1/4 rounded-xl"
                src={"/images/user.png"}
                alt="user"
              />
            )}
          </div>
          <div className="flex justify-end cursor-pointer">
            <button
              className="hover:scale-90"
              onClick={() => onClickHandler(3)}
            >
              <img
                className="w-14"
                src={"/images/profile/gear.png"}
                alt="gear-icon"
              />
            </button>
          </div>
        </div>
        <div className="p-2 mt-2">
          <div className="text-3xl font-semibold">
            {user?.firstName} {user?.secondName}
          </div>
          <div className="mt-3 text-lg text-justify">
            Username: {user?.username}
          </div>
          <div className="mt-3 text-base text-justify">На проекте с {date}</div>
          <div className="mt-6">
            <button
              className="mr-6 hover:text-blue-600"
              onClick={() => onClickHandler(0)}
            >
              <span className="text-lg">Статьи</span>
            </button>
            <button
              className="mr-6 hover:text-blue-600"
              onClick={() => onClickHandler(1)}
            >
              <span className="text-lg">Черновики</span>
            </button>
            <button
              className="mr-6 hover:text-blue-600"
              onClick={() => onClickHandler(2)}
            >
              <span className="text-lg">Закладки</span>
            </button>
            <button
              className="mr-6 hover:text-blue-600"
              onClick={() => onClickHandler(3)}
            >
              <span className="text-lg">Уведомления</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
