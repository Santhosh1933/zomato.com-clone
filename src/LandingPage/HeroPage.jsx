import React from "react";
import { Navbar } from "./Navbar";
import { CiLocationOn } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { Divider } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

export const HeroPage = () => {
  const SearchComponent = () => {
    return (
      <div className="w-full">
        <div className="w-2/4 bg-white  mx-auto p-1 flex items-center gap-2 rounded-lg">
          <div className="flex items-center py-2 gap-2 border-r-2 pr-2">
            <CiLocationOn className="" fill="red" />
            <input
              type="text"
              placeholder="salem"
              className="outline-none border-none"
            />
            <FaCaretDown />
          </div>
          <div className="text-gray-600 flex items-center gap-4 w-full">
            <CiSearch size={24} />
            <input
              type="text"
              className="w-full border-none outline-none"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="hero-bg">
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center py-8">
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt=""
          className="w-[300px]"
        />
        <h1 className="text-white text-4xl py-4">
          Discover the best food & drinks in Salem
        </h1>
        <SearchComponent />
      </div>
    </div>
  );
};
