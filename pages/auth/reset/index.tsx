import React from "react";
import Head from "next/head";

const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Reset-page || IT-journal</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="keywords" content="next, javascript, nextjs, react" />
        <meta
          name="description"
          content="this is reset password page on Next.js"
        />
      </Head>
      <div className="flex justify-center items-center h-80">
        <div className="w-1/3">
          <div className="flex flex-col mt-96">
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mb-5 w-2/3">
                <img
                  className="w-20"
                  src={"/images/reset-icon.png"}
                  alt="reset-icon"
                />
                <span className="text-3xl font-bold mt-2">
                  Введите Ваш email
                </span>
                <span className="text-base italic text-justify mt-3 ">
                  На указанный email прийдет письмо, в котором будет указан Ваш
                  новый пароль, сгенерированный системой
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-2/3 bg-white p-8 pt-6 rounded-2xl">
                <div className="flex flex-col">
                  <span className="text-base">Email address</span>
                  <input
                    className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
                    type="text"
                  />
                  <button className="h-10 mt-6 bg-purple-600 rounded-md">
                    <span className="text-base text-white">Отправить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
