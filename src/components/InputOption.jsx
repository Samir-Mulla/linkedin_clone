import React from "react";

function InputOption({ Icon, title, color }) {
 return (
  <div className="flex flex-col items-center hover:bg-gray-100 p-1 rounded">
    <Icon className="sm:text-lg md:text-xl lg:text-2xl xl:text-2xl" style={{ color: color }} />
    <h6 className="text-sm md:text-md lg:text-md xl:text-md">{title}</h6>
  </div>
 );
}

export default InputOption;
