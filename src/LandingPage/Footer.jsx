import React from "react";
import india from "../assets/india.png";
import { FaAngleDown } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { Divider } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <div className="w-full bg-[#f8f8f8] py-8 mt-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt=""
            className="w-[150px]"
          />
          <div className="flex items-center gap-4">
            <div className="flex gap-2 border border-gray-600 p-2 items-center rounded-md">
              <img src={india} alt="" className="w-[20px]" />
              India
              <FaAngleDown />
            </div>
            <div className="flex gap-2 border border-gray-600 p-2 items-center rounded-md">
              <CiGlobe className="text-xl font-bold" />
              English
              <FaAngleDown />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 py-8">
          <ul>
            <li className="text-md font-semibold tracking-wider py-3">
              ABOUT ZOMATO
            </li>
            <ul className="text-gray-600 flex flex-col gap-1">
              <li>Who We Are</li>
              <li>Blog</li>
              <li> Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li> Contact Us</li>
            </ul>
          </ul>
          <ul>
            <li className="text-md font-semibold tracking-wider py-3">
              ABOUT ZOMATO
            </li>
            <ul className="text-gray-600 flex flex-col gap-1">
              <li>Who We Are</li>
              <li>Blog</li>
              <li> Work With Us</li>
            </ul>
          </ul>
          <ul>
            <li className="text-md font-semibold tracking-wider py-3">
              ABOUT ZOMATO
            </li>
            <ul className="text-gray-600 flex flex-col gap-1">
              <li>Who We Are</li>
              <li>Blog</li>
            </ul>
          </ul>
          <ul>
            <li className="text-md font-semibold tracking-wider py-3">
              ABOUT ZOMATO
            </li>
            <ul className="text-gray-600 flex flex-col gap-1">
              <li>Who We Are</li>
              <li>Blog</li>
              <li> Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
            </ul>
          </ul>
          <div>
            <p className="text-md font-semibold tracking-wider py-3">
              SOCIAL LINKS
            </p>
            <div className="flex gap-2">
              <div className="bg-slate-900 text-white p-2 rounded-full w-fit">
                <FaLinkedinIn size={12} />
              </div>
              <div className="bg-slate-900 text-white p-2 rounded-full w-fit">
                <FaLinkedinIn size={12} />
              </div>
              <div className="bg-slate-900 text-white p-2 rounded-full w-fit">
                <FaLinkedinIn size={12} />
              </div>
              <div className="bg-slate-900 text-white p-2 rounded-full w-fit">
                <FaLinkedinIn size={12} />
              </div>
            </div>
            <div className="py-4 flex flex-col gap-4">
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt=""
                className="w-[130px]"
              />
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt=""
                className="w-[130px]"
              />
            </div>
          </div>
        </div>

        <Divider className="" />
        <p className="pt-8 text-sm text-slate-600">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};
