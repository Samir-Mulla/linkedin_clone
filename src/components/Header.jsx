import React from "react";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import {
  BusinessCenter,
  Home,
  SupervisorAccount,
  Chat,
  Notifications,
} from "@mui/icons-material";
import MyProfile from "/images/my-profile.jpg";

/**
 * Header component that renders the header section of the page.
 * Includes logo, search bar, and nav links.
 */
function Header() {
  return (
    <div
      className="
    flex justify-around items-center w-full p-1 bg-white border-b border-gray-200 flex-wrap"
    >
      <div className="flex items-center ">
        <div className="w-12 mr-2">
          <img src="/Logo.png" alt="logo" />
        </div>

        <div className="flex items-center px-2 py-2  text-gray-400 border border-gray-200 rounded">
          <SearchIcon />
          <input
            className="border-none outline-none bg-none text-black"
            type="text"
            placeholder="Search Jobs and Companies"
          />
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-center p-1 ml-6 md:mt-0">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={MyProfile} title="Me" />
      </div>
    </div>
  );
}

export default Header;
