import Head from "next/head";
import React from "react";
import { PostCard } from "components";
import { Category, Post } from "interfaces";

interface PostProps {
  post: Post;
  category: Category;
}

const Post = ({ post, category }: PostProps) => {
  return (
    <>
      <Head>
        <title>{post.title} || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="posts, javascript, nextjs, react" />
        <meta
          name="description"
          content="this is post in IT-journal on Next.js"
        />
      </Head>
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="w-6/12 mt-4 bg-white rounded-3xl">
          <PostCard post={post} category={category} isInCategory={false} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const id = query.id;
  const response = await fetch(`${process.env.API_URL}/posts/${id}`);
  const post = await response.json();

  const data = await fetch(
    `${process.env.API_URL}/categories?_where[posts].id=${post.id}`
  );
  const category = await data.json();

  return { props: { post, category } };
}

export default Post;
