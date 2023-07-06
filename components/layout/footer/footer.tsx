import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { RawRenderer } from "./rawRenderer";
import { useTheme } from "..";
import { Icon } from "../../util/icon";

export const Footer = ({ data, icon, rawData }) => {
  const theme = useTheme();
  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    primary: "text-white opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
    },
  };

  const footerColorCss =
    data.color === "primary"
      ? footerColor.primary[theme.color]
      : footerColor.default;

  return (
    <footer className="bg-[#F4F5F7] py-6 px-6 md:px-12 ">
      <div className="flex justify-between items-end">
          <div className="">
              <a href="/"><img src="./images/aktok.svg" alt="aktok"/></a>
          </div>
          <div className="flex justify-between items-center gap-4">
              <p className="flex items-center gap-1 cursor-pointer ">
                  <span className="text-[#7886a2] uppercase text-[13px] font-light gothamPro">
                      <a href=""> About platform </a>
                  </span>
              </p>
              <div className="flex items-center gap-1 py-2 group px-4 cursor-pointer relative hover:border-b-2 hover:border-[#FF9933]">
                  <span className="text-[#7886a2] uppercase text-sm font-light gothamPro">
                      <a href="">Services </a>
                  </span>
                  <span>
                      <img src="./images/arr-down.svg" alt=""/>
                  </span>
                  <div className="absolute group-hover:block hidden  py-4 px-2 w-[200px] top-[33px] left-0 bg-white  border-t-2 border-[#FF9933] dropdown-shadow rounded-br-lg rounded-bl-lg">
                      <ul className="">
                          <li className="uppercase my-2 hover:font-semibold gothamPro text-[13px] text-[#404858] hover:text-[#FF9933] cursor-pointer"> <a href=""> Chatbot Development </a> </li>
                      </ul>
                  </div>
              </div>
              <div className="flex items-center gap-1 py-2 group px-4 relative hover:border-b-2 hover:border-[#FF9933]">
                  <span className="text-[#7886a2] uppercase text-sm font-light gothamPro">
                      <a href="">solutions </a>
                  </span>
                  <span>
                      <img src="./images/arr-down.svg" alt=""/>
                  </span>
                  <div className="absolute group-hover:block hidden  py-4 px-2 w-[200px] top-[33px] left-0 bg-white  border-t-2 border-[#FF9933] dropdown-shadow rounded-br-lg rounded-bl-lg">
                      <ul className="">
                          <li className="uppercase my-2 hover:font-semibold gothamPro text-[13px] text-[#404858] hover:text-[#FF9933] cursor-pointer"> Immigration Agency </li>
                      </ul>
                  </div>
              </div>
              <p className="flex items-center gap-4 cursor-pointer">
                  <span className="text-[#7886a2] uppercase text-[13px] font-light gothamPro">
                      Pricing 
                  </span>
              </p>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <div>
                  <p className="text-[#5E6A82] text-sm gothamPro">+1 877 408 34 03</p>
                  <p className="text-[#5E6A82] text-sm gothamPro">welcome@aktok.com</p>
                  <p className="text-[#5E6A82] text-sm gothamPro">facebook</p>

              </div>
                  <div className="bg-[white] p-4 rounded-lg flex items-center gap-4">
                      <span>
                          <img src="./images/Chatbot-new.svg" alt="chatbot"/>
                      </span>
                      <p className="text-[#5E6A82] gothamPro text-base font-light">
                          Sign up for AKTOK <br/>
                          <span className="text-[#2E363E] font-semibold">news and updates</span>
                      </p>
                      <button className="bg-[#6866FF] hover:bg-[#8C8BFB] active:bg-[#6257E4] px-6 py-2 rounded-[20px]  text-white text-sm gothamPro font-light">
                          Sign up
                      </button>
                  </div>
            </div>
          </div>
      </div>
    </footer>
  );
};
