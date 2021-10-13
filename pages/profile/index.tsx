import React from "react";
import { ProfileHeader } from "components";
import Head from "next/head";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profile || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="categories, javascript, nextjs, react" />
        <meta
          name="description"
          content="this is categories in IT-journal on Next.js"
        />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <ProfileHeader />
      </div>
    </>
  );
};

export default ProfilePage;
