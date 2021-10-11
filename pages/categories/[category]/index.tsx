import React from "react";
import Head from "next/head";
import { CategoryHeader, PostCard } from "../../../components";

const Index = ({ category }) => {
  return (
    <>
      <Head>
        <title>{category.title} || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="categories, javascript, nextjs, react" />
        <meta
          name="description"
          content="this is categories in IT-journal on Next.js"
        />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <CategoryHeader category={category} />
        <div className="w-6/12 mt-4">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex-59 bg-white rounded-2xl p-3 pl-5">
                <div className="flex">
                  <img
                    className="w-8 mr-3"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <input
                    className="text-base"
                    type="text"
                    placeholder="Новая запись"
                  />
                </div>
                <div className="flex mt-2">
                  <button className="flex justify-center items-center rounded-3xl pl-3 pr-3 mr-3 bg-gray-100 hover:bg-gray-200">
                    <img
                      className="w-8"
                      src={"/images/media-icon.png"}
                      alt="media-icon"
                    />
                    <span className="ml-2 text-gray-600">Фото и видео</span>
                  </button>
                  <button className="flex justify-center items-center rounded-3xl pl-3 pr-3 bg-gray-100 hover:bg-gray-200">
                    <img
                      className="w-6"
                      src={"/images/link-icon.png"}
                      alt="link-icon"
                    />
                    <span className="ml-1 text-gray-600">Ссылка</span>
                  </button>
                </div>
              </div>
              <div className="flex-39 bg-white rounded-2xl p-3 pl-5">
                <div>
                  <span className="text-base font-semibold">Подписчики</span>
                  <span className="ml-2 text-gray-400">xxx xxx </span>
                </div>
                <div className="flex flex-wrap mt-2">
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                  <img
                    className="w-8 mr-5 mb-2"
                    src={"/images/user.png"}
                    alt="user"
                  />
                </div>
                <div className="mt-1 text-blue-500 cursor-pointer hover:text-red-500">
                  Показать всех
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex">
                <button className="flex justify-center items-center bg-white p-1 pl-3 pr-3 mr-1 rounded-2xl cursor-pointer">
                  <span className="text-base mr-2">Популярное</span>
                  <img
                    className="w-3"
                    src={"/images/arrow-down-icon.png"}
                    alt="arrow-down-icon"
                  />
                </button>
                <button className="p-1 pl-3 pr-3 rounded-2xl hover:bg-white">
                  <span className="text-base">Свежее</span>
                </button>
              </div>
              <div className="flex">
                <button className="mr-4 p-1 pl-3 pr-3 rounded-2xl hover:bg-white">
                  <span className="text-base">#react</span>
                </button>
                <button className="mr-4 p-1 pl-3 pr-3 rounded-2xl hover:bg-white">
                  <span className="text-base">#redux</span>
                </button>
                <button className="flex justify-center items-center p-1 pl-3 pr-3 rounded-2xl hover:bg-white">
                  <span className="text-base mr-2">Еще</span>
                  <img
                    className="w-3"
                    src={"/images/arrow-down-icon.png"}
                    alt="arrow-down-icon"
                  />
                </button>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-3xl">
              {category.posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  isInCategory
                  category={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const title = query.category;
  const response = await fetch(
    `${process.env.API_URL}/categories/${encodeURIComponent(title)}`
  );
  const category = await response.json();

  return { props: { category } };
}

export default Index;
