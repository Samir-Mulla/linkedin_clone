import React from "react";
import { Avatar } from "@mui/material";

/**
 * HeaderOption component renders an icon, avatar, and title
 * for items in the header.
 *
 * Accepts props for:
 * - avatar: Avatar image
 * - Icon: Icon component
 * - title: Text for header item
 *
 * Renders a flex container with the icon, avatar, and title.
 */
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="flex flex-col items-center mr-6 text-gray-500 cursor-pointer hover:text-black mt-3 md:mt-0">
      {Icon && <Icon className="text-8xl" />}
      {avatar && (
        <Avatar
          className="text-8xl"
          sx={{ width: 25, height: 25 }}
          src={avatar}
        />
      )}
      <h3 className="text-sm font-normal">{title}</h3>
    </div>
  );
}

export default HeaderOption;
