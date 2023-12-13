import React from "react";
import Navbar from "../Layout/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="text-black h-full bg-landing bg-cover bg-no-repeat">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
          <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl mt-5">
            <div class="text-center">
              <h2 class="mt-6 text-3xl font-bold text-gray-900">
                Welcome Back!
              </h2>
              <p class="mt-2 text-sm text-gray-600">
                Please sign in to your account
              </p>
            </div>
            <form class="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div class="relative">
                <div class="absolute right-0 mt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <label class="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type=""
                  placeholder="mail@gmail.com"
                />
              </div>
              <div class="mt-8 content-center">
                <label class="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a 
                    href="/home"
                    class="font-medium text-blue-500 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  class="w-3/4 bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Sign in
                </button>
              </div>
              <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Don't have an account?</span>
                <a 
                  href="/home"
                  class="text-blue-500 hover:text-blue-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
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
