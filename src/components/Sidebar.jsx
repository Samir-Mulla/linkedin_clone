import React from "react";
import { Avatar } from "@mui/material";
import MyProfile from "/images/my-profile.jpg";

/**
 * Sidebar component that renders user profile info,
 * stats, and recent topics.
 */
function Sidebar() {
  const recentItem = (topic) => {
    return (
      <>
        <div className="flex items-center text-gray-500 cursor-pointer hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
          <span className="mr-2">#</span>
          <p className="text-black">{topic}</p>
        </div>
      </>
    );
  };

  return (
    <div className=" w-full md:w-1/4 rounded-lg lg:w-1/4">
      <div className="flex flex-col items-center pb-2 bg-white border border-b-0 border-gray-300 rounded-t-lg">
        <img
          src="https://plus.unsplash.com/premium_photo-1675873580261-386326b785a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVza3RvcCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          alt="User Profile"
          className="object-cover w-full h-12 rounded-t-lg"
        />

        <Avatar
          className="mb-2 -mt-5"
          src={MyProfile}
          sx={{ width: 48, height: 48 }}
        />
        <h4 className="text-sm text-black">Samir Mulla</h4>
        <p className="text-xs text-gray-500">
          Front-end developer | Javascript | CSS | HTML
        </p>
      </div>

      <div className="px-6 pt-6 pb-6 mb-5 bg-white border border-gray-300 rounded-b-lg text-sm text-gray-500">
        <div className="flex justify-between text-sm">
          <p>Profile viewers </p>
          <p className=" text-blue-500 text-xs">11</p>
        </div>

        <div className="flex justify-between">
          <p>Connections</p>
          <p className=" text-blue-500 text-xs">704</p>
        </div>

        <div>
          <p>Manage your network</p>
        </div>
      </div>

      <div className="p-2 bg-white border border-gray-300 rounded-md font text-sm">
        <p className="text-xs">Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("Figma tool")}
        {recentItem("UI design")}
        {recentItem("Front-end developer")}
      </div>
    </div>
  );
}

export default Sidebar;
