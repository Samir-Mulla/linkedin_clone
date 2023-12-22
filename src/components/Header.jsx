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
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
            alt="logo"
          />
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

      <div className="flex items-center flex-wrap mt-3 md:mt-0">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/D4D03AQGs2dkhjJ9aJQ/profile-displayphoto-shrink_100_100/0/1693498577253?e=1706140800&v=beta&t=3MzhtYZYzk-S5QHwEmRgWut8oTg-rw-WY0vBaTMTMCc"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
