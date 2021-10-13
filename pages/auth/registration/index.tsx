import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useActions } from "../../../hooks/useActions";
import { registration } from "../../api/auth";
import Router from "next/router";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setAuth } = useActions();

  const onRegister = async () => {
    try {
      const data = await registration(
        username,
        firstName,
        secondName,
        email,
        password
      );
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
        <title>Registration || IT-journal</title>
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
                src={"/images/register-icon.png"}
                alt="register-icon"
              />
              <span className="text-3xl font-bold mt-2">Создать аккаунт</span>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-2/3 bg-white p-8 rounded-2xl">
                <div className="flex flex-col">
                  <span className="text-base">Username</span>
                  <input
                    className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="flex flex-col mt-6">
                    <div className="flex">
                      <div className="flex-50">
                        <span className="text-base">First name</span>
                      </div>
                      <div className="flex-50">
                        <span className="text-base">Last name</span>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-50">
                        <input
                          className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="flex-50">
                        <input
                          className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
                          type="text"
                          value={secondName}
                          onChange={(e) => setSecondName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <span className="mt-6 text-base">Email address</span>
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
                  <button
                    className="h-10 mt-6 bg-purple-600 rounded-md"
                    onClick={onRegister}
                  >
                    <span className="text-base text-white">Создать</span>
                  </button>
                  <div className="flex justify-center items-center mt-4">
                    <span>Already have an account?</span>
                    <Link href={"/auth/login"}>
                      <a className="text-blue-700 cursor-pointer hover:text-blue-500">
                        &nbsp;Sign in
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

export default Registration;
