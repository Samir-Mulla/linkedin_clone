import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

/**
 * Widgets component.
 * Renders widget content on sidebar.
 */

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <>
        <div className="flex items-baseline p-2">
        <FiberManualRecordIcon sx={{ width: 10 }} />


          <div className="ml-2 text-sm">
            <h4>{heading}</h4>
            <p className="text-xs text-gray-500">{subtitle}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full md:w-1/4 lg:w-1/4">
        <div className="bg-white border border-gray-300 p-2 rounded">
          <div className="flex items-center justify-between p-2">
            <h2 className="font-normal text-lg">Linkedin News</h2>
            <InfoIcon title="Information"/>
          </div>
          {newsArticle(
            "15 Big Ideas that will shape 2024",
            "Top news 3,175 readers"
          )}
          {newsArticle(
            "IT hiring more talent at the top ",
            "18h ago 880 readers"
          )}
          {newsArticle(
            "Breaking the glass ceiling in startups ",
            "2d ago 246 readers"
          )}
          {newsArticle(
            "Breaking the glass ceiling in startups ",
            "2d ago 246 readers"
          )}
        </div>

        <div className="mt-4">
          <p className="flex justify-around p-4">
            <a
              href="#"
              className="text-gray-500 text-xs underline hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              Accessibility
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              Help Center
            </a>
          </p>
          <p className="flex justify-around p-4">
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              Privacy & Terms
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              Ad Choices
            </a>
          </p>
          <p className="flex justify-between  p-4">
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              Advertising
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              Advertising Business Services
            </a>
          </p>
          <p className="flex justify-between p-4">
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              Get the LinkedIn app
            </a>
            <a
              href="#"
              className="text-gray-500 text-sm underline hover:text-blue-500"
            >
              More
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Widgets;
