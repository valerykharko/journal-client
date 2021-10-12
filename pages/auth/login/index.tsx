import React, { useState } from "react";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useActions } from "../../../hooks/useActions";
import { login } from "pages/api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setAuth } = useActions();

  const onAuth = async () => {
    try {
      const data = await login(email, password);
      setUser(data);
      setAuth(true);
      await Router.push("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

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
          <div className="flex flex-col mt-20">
            <div className="flex flex-col justify-center items-center mb-5">
              <img
                className="w-20"
                src={"/images/enter-icon.png"}
                alt="enter-icon"
              />
              <span className="text-3xl font-bold mt-2">
                Войдите в свой аккаунт
              </span>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-2/3 bg-white p-8 rounded-2xl">
                <div className="flex flex-col">
                  <span className="text-base">Email address</span>
                  <input
                    className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="mt-6 text-base">Password</span>
                  <input
                    className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <div className="mt-6 ">
                      <input className="ml-1 scale-125 mr-2" type="checkbox" />
                      <span>Remember me</span>
                    </div>
                    <div className="mt-6">
                      <Link href={"/auth/reset"}>
                        <a className="text-blue-700 cursor-pointer hover:text-blue-500">
                          Forgot your password?
                        </a>
                      </Link>
                    </div>
                  </div>
                  <button
                    className="h-10 mt-6 bg-purple-600 rounded-md"
                    onClick={onAuth}
                  >
                    <span className="text-base text-white">Войти</span>
                  </button>
                  <div className="flex justify-center items-center mt-4">
                    <span>Don't have an account?</span>
                    <Link href={"/auth/registration"}>
                      <a className="text-blue-700 cursor-pointer hover:text-blue-500">
                        &nbsp;Sign up
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
