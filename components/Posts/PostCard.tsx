import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { Post, Category } from "interfaces";
import { getPreviewSentences } from "utils";

interface PostCardProps {
  post: Post;
  category: Category;
  isInCategory: boolean;
}

const PostCard = ({ post, isInCategory, category }: PostCardProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (isInCategory) {
      setText(getPreviewSentences(post));
    }
  }, [post.text]);

  const router = useRouter();

  const onClickHandler = () => {
    Router.push(`${router.asPath}/posts/${post.id}`);
  };

  const categoryItem = category[0];

  return (
    <div
      className="flex flex-col mb-2 cursor-pointer"
      onClick={() => onClickHandler()}
    >
      <div className="p-4">
        <div className="flex justify-start items-center">
          {isInCategory ? (
            ""
          ) : (
            <div className="flex justify-center items-center">
              <img
                className="w-8 mr-2"
                src={`${process.env.API_URL}` + categoryItem.image.url}
                alt={categoryItem.image.name}
              />
              <span className="text-base font-semibold">
                {categoryItem.title}
              </span>
            </div>
          )}
          {isInCategory ? (
            <>
              <img className="w-8 mr-2" src={"/images/user.png"} alt="user" />
              <span className="text-base text-gray-800 font-semibold mr-3">
                Харко Валерий
              </span>
            </>
          ) : (
            <>
              <img
                className="w-5"
                src={"/images/line-icon.png"}
                alt="line-icon"
              />
              <span className="text-base text-gray-700 mr-3">
                Харко Валерий
              </span>
            </>
          )}
          <span>| 2 часа</span>
        </div>
        <div className="mt-4">
          <span className="text-2xl font-semibold text-justify">
            {post.title}
          </span>
        </div>
        <div className="mt-3 text-base text-justify">
          <span>{isInCategory ? text : post.text}</span>
        </div>
      </div>
      <div>
        <img
          className="w-full"
          src={`${process.env.API_URL}` + post.image.url}
          alt={post.image.name}
        />
      </div>
      <div className="flex justify-between p-4">
        <div className="flex">
          <button className="flex justify-start items-center mr-6">
            <img
              className="w-8 mr-1"
              src={"/images/comments-icon.png"}
              alt="comments-icon"
            />
            <span className="text-base">237</span>
          </button>
          <button className="flex justify-start items-center mr-6">
            <img
              className="w-8 mr-2"
              src={"/images/repost-icon.png"}
              alt="repost-icon"
            />
            <span className="text-base">237</span>
          </button>
          <button className="flex justify-start items-center mr-6">
            <img
              className="w-6 mr-2"
              src={"/images/bookmark-icon.png"}
              alt="bookmark-icon"
            />
          </button>
          <button>
            <img
              className="w-8 mr-1"
              src={"/images/download-icon.png"}
              alt="download-icon"
            />
          </button>
        </div>
        <div className="flex justify-center items-center mr-2">
          <button className="mr-2">
            <img
              className="w-6"
              src={"/images/arrow-down-icon.png"}
              alt="arrow-down-icon"
            />
          </button>
          <span className="text-base">250</span>
          <button className="ml-2">
            <img
              className="w-6"
              src={"/images/arrow-up-icon.png"}
              alt="arrow-up-icon.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
