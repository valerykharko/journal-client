import React from "react";
import Link from "next/link";

const RegistrationBlock = () => {
  return (
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
                  />
                </div>
                <div className="flex-50">
                  <input
                    className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <span className="mt-6 text-base">Email address</span>
            <input
              className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
              type="text"
            />
            <span className="mt-6 text-base">Password</span>
            <input
              className="p-2 mt-1 h-10 border-2 border-gray-400 rounded-md focus:outline-none focus:border-2 focus:ring-1 focus:ring-purple-200 focus:border-purple-400"
              type="text"
            />
            <button className="h-10 mt-6 bg-purple-600 rounded-md">
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
  );
};

export default RegistrationBlock;
