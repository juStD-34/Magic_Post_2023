import {React, useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Users/Home/components/Navbar";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const {setLogin} = require('./Auth');
  const {setPostOffice, setWorkerID} = require('./Info');
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus("SUCCESS");
        switch(response.data[0].role){
          case 0:
            setLogin("central/employee");
            setWorkerID(response.data[0].id); 
            setPostOffice(response.data[0].poWorkID);
            window.location.href = "/central/employee";
            break;
          case 1:
            setLogin("trade/employee");
            setWorkerID(response.data[0].id); 
            setPostOffice(response.data[0].poWorkID);
            window.location.href = "/trade/employee";
            break;
          case 2:
            setLogin("central/manager");
            setWorkerID(response.data[0].id); 
            setPostOffice(response.data[0].poWorkID);
            window.location.href = "/central/manager";
            break;
          case 3:
            setLogin("trade/manager");
            setWorkerID(response.data[0].id); 
            setPostOffice(response.data[0].poWorkID);
            window.location.href = "/trade/manager";
            break;
          case 4:
            setLogin("manager");
            setWorkerID(response.data[0].id); 
            setPostOffice(response.data[0].poWorkID);
            window.location.href = "/manager";
            break;
          default:
            setLogin("null");
            setWorkerID("0"); 
            setPostOffice("0");
            break;
        }
      }
    })
  }

  const colorStyle = {
    fontSize: '15px',
    textAlign: 'center',
    marginTop: '20px'
  };
  
  const textStyle = {
    red: {
      ...colorStyle,
      color: 'red'
    },
    green: {
      ...colorStyle,
      color: 'green'
    }
  };
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
                  Username
                </label>
                <input
                  className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                  type=""
                  placeholder="Enter your username"
                  onChange={(e) => {setUsername(e.target.value)}}
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
                  onChange={(e) => {setPassword(e.target.value)}}
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
              <NavLink to={"/central/employee"} onClick={login} className="w-3/4 bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
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
                <h1 style={loginStatus === "WRONG USERNAME OR PASSWORD!" ? textStyle.red : textStyle.green}>{loginStatus}</h1>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
