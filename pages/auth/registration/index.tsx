import React from "react";
import Head from "next/head";
import { RegistrationBlock } from "components";
import {GetServerSideProps} from "next";

const Registration = () => {
  return (
    <>
      <Head>
        <title>Registration || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="next, javascript, nextjs, react" />
        <meta name="description" content="this is it-journal on Next.js" />
      </Head>
      <div className="flex justify-center items-center">
        <div className="w-1/3">
          <RegistrationBlock />
        </div>
      </div>
    </>
  );
};

export default Registration;
