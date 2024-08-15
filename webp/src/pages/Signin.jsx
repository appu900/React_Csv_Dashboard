import React from "react";
import Quote from "../components/Quote";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/dashboard");
  }
  return (
    <div className="h-screen bg-[#161616] flex text-white ">
      <div className="md:w-[40%] hidden md:block bg-[#605BFF] py-10 px-14">
        <Quote />
      </div>
      <div className="md:w-[60%] w-full  md:py-20 md:px-64  p-5">
        <div>
          <p className=" text-3xl font-semibold">Sign In</p>
          <p>Sign in to Your account</p>
        </div>
        <div className="flex mt-8  gap-4">
          <button className="px-5  gap-2 text-xs bg-[#0D0D0D] rounded-md py-2 flex items-center justify-between ">
            <FcGoogle className="md:text-xl" />
            <p>Sign in With Google</p>
          </button>
          <button className=" px-5 gap-2 text-xs bg-[#0D0D0D] rounded-md py-2 flex items-center justify-between ">
            <IoLogoApple className="text-xl" />
            <p>Sign in With Apple</p>
          </button>
        </div>

        {/* ** form section */}
        <div className="w-full bg-[#0D0D0D] py-6 px-8 rounded-lg mt-8 flex flex-col gap-5">
          <div>
            <label
              for="helper-text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-[#161616]  outline-none text-white text-sm rounded-lg block w-full p-2.5  dark:bg-[#161616] dark:placeholder-gray-400 "
            ></input>
          </div>
          <div>
            <label
              for="helper-text"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-[#161616]  outline-none text-sm rounded-lg block w-full p-2.5  dark:bg-[#161616] dark:placeholder-gray-400 "
            ></input>
          </div>
          <div>
            <p className="text-[#605BFF]">Forgot Password ?</p>
          </div>
          <div>
            <button onClick={handleLogin} className="w-full rounded-lg px-4 py-2 bg-[#605BFF]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
