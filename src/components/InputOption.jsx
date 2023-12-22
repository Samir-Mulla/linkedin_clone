import React from "react";

/**
 * Renders an input option component with an icon, title, and color.
 *
 * {Object} props - The props for the component.
 * {ReactComponent} props.Icon - The icon component to render.
 * {string} props.title - The title to display.
 * {string} props.color - The icon color.
 */
function InputOption({ Icon, title, color }) {
  return (
    <div className="flex flex-col items-center hover:bg-gray-100 p-1 rounded">
      <Icon
        className="sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
        style={{ color: color }}
      />
      <h6 className="text-sm md:text-md lg:text-md xl:text-md">{title}</h6>
    </div>
  );
}

export default InputOption;
