import React from "react";
import Head from "next/head";
import { LoginBlock } from "components";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="next, javascript, nextjs, react" />
        <meta name="description" content="this is it-journal on Next.js" />
      </Head>
      <div className="flex justify-center items-center">
        <div className="w-1/3">
          <LoginBlock />
        </div>
      </div>
    </>
  );
};

export default Login;
