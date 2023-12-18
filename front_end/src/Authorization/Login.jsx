import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Users/Home/components/Navbar";

function Login() {
  return (
    <div>
      <Navbar type={false}/>
      <div className="text-black h-full bg-landing bg-cover bg-no-repeat">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
          <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl mt-5">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Welcome Back!
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Please sign in to your account
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="relative">
                <div className="absolute right-0 mt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <label className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type=""
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="mt-8 content-center">
                <label className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a 
                    href="/home"
                    className="font-medium text-blue-500 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
              <NavLink to={"/trade/employee"} className="w-3/4 bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-300 shadow-lg cursor-pointer transition ease-in duration-300">Login</NavLink>
              </div>
              <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Don't have an account?</span>
                <a 
                  href="/home"
                  className="text-blue-500 hover:text-blue-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
