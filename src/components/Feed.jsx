import React from "react";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import MonthIcon from "@mui/icons-material/CalendarMonth";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import MyProfile from "/images/my-profile.jpg";

/**
 * Feed component that renders the main feed UI.
 * Includes user avatar, post input, post options,
 * and Post components.
 */
function Feed() {
  return (
    <div className="  mt-3 md:mt-0 md:w-2/5">
      <div className="bg-white p-2 pb-5 border border-gray-300 rounded-md  mb-5">
        <div className="flex justify-around mb-2 items-center">
          <Avatar
            className="w-12 h-12"
            src={MyProfile}
          />
          <div className="border border-gray-300 rounded-lg p-2 flex-grow ml-4 hover:bg-gray-100">
            <form>
              <input
                type="text"
                placeholder="Start a post"
                className="border-none outline-none flex-grow ml-2 font-semibold bg-transparent"
              />
              <button type="submit" className="hidden"></button>
            </form>
          </div>
        </div>

        <div className="flex justify-around ">
          <InputOption Icon={ImageIcon} title="Media" color="#70B5F9" />
          <InputOption Icon={MonthIcon} title="Event" color="#c37d16" />
          <InputOption
            Icon={ArticleIcon}
            title="Write article"
            color="#e06847"
          />
        </div>
      </div>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
