import React from "react";
import Registerlogo from "../assets/registerlinkedinlogo.svg";
import Googleiconbtn from "../assets/googleiconbtn.svg";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <img
        src={Registerlogo}
        alt="register logo"
        className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-112"
      />
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-5 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-medium">
          Make the most of your professional life
        </h1>
        <form className="flex flex-col">
          <div>
            <label htmlFor="email" className="block mt-2">
              <span className="text-red-500">*</span> Email or phone number
            </label>
            <input
              type="text"
              placeholder="Enter your E-mail here"
              className="w-full mt-2 p-3 outline-none border border-black rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mt-2">
              <span className="text-red-500">*</span> Password (6 + character )
            </label>
            <input
              type="password"
              placeholder="Enter your Password here"
              className="w-full mt-2 p-3 outline-none border border-black rounded-md"
            />
          </div>
          <span className="mt-2">
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <a href="#" className="underline">
              User Agreement,
            </a>{" "}
            <a href="#" className="underline">
              {" "}
              Privacy Policy,
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Cookie Policy.
            </a>{" "}
          </span>
          <button
            type="submit"
            className="mt-4 px-5 py-3 font-medium text-white bg-blue-500 rounded-md cursor-pointer transition-colors duration-300 ease-in-out transform hover:bg-blue-600 active:scale-95"
          >
            Agree & Join
          </button>
          <div className="flex justify-center items-center mt-3 ">
            <div className="border-b border-gray-300 w-1/3"></div>
            <span className="mx-3">or</span>
            <div className="border-b w-1/3 border-gray-300"></div>
          </div>

          <button className="mt-4 flex items-center justify-center w-full sm:w-3/4 md:w-full lg:w-full xl:w-full  p-2 font-medium cursor-pointer border border-black mx-auto rounded-lg">
 <img src={Googleiconbtn} alt="google logo" className="mr-2" />
 <span> Continue with Google</span>
</button>


          <p className="mt-4">
            Already on Linkedin?{" "}
            <a href="#" className="underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
