import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="next, javascript, nextjs, react" />
        <meta name="description" content="this is it-journal on Next.js" />
      </Head>
      <div className="flex justify-center items-center">
        <img className="w-1/3" src={"/images/main-photo.jpg"} alt="Main photo" />
      </div>
    </div>
  );
};

export default Home;
