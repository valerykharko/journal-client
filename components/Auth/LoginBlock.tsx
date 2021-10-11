import React from "react";
import Link from "next/link";

const LoginBlock = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-col justify-center items-center mb-5">
        <img className="w-20" src={"/images/enter-icon.png"} alt="enter-icon" />
        <span className="text-3xl font-bold mt-2">Войдите в свой аккаунт</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-2/3 bg-white p-8 rounded-2xl">
          <div className="flex flex-col">
            <span className="text-base">Email address</span>
            <input
              className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
              type="text"
            />
            <span className="mt-6 text-base">Password</span>
            <input
              className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
              type="text"
            />
            <div className="flex justify-between">
              <div className="mt-6 ">
                <input className="ml-1 scale-125 mr-2" type="checkbox" />
                <span className="">Remember me</span>
              </div>
              <div className="mt-6">
                <Link href={"/auth/reset"}>
                  <a className="text-blue-700 cursor-pointer hover:text-blue-500">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>
            <button className="h-10 mt-6 bg-purple-600 rounded-md">
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
  );
};

export default LoginBlock;
