import React from "react";
import { Avatar } from "@mui/material";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import InputOption from "./InputOption";

// { name, description, message }
const Post = () => {
  return (
    <div className="bg-white p-4 mb-2 rounded border border-gray-300">
      <div className="flex items-center mb-2">
        <Avatar />
        <div className="ml-2">
          <h2 className="font-bold"></h2>
          <p className="text-gray-500 text-sm"></p>
        </div>
      </div>

      <div className="overflow-auto">
        <p></p>
      </div>

      <div className="flex justify-between mt-4">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
