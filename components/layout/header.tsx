import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../tina/__generated__/types";

export const Header = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();
  const theme = useTheme();

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 text-blue-700 dark:text-blue-300 font-medium dark:border-blue-700",
    teal: "border-b-3 border-teal-200 text-teal-700 dark:text-teal-300 font-medium dark:border-teal-700",
    green:
      "border-b-3 border-green-200 text-green-700 dark:text-green-300 font-medium dark:border-green-700",
    red: "border-b-3 border-red-300 text-red-700 dark:text-green-300 font-medium dark:border-red-700",
    pink: "border-b-3 border-pink-200 text-pink-700 dark:text-pink-300 font-medium dark:border-pink-700",
    purple:
      "border-b-3 border-purple-200 text-purple-700 dark:text-purple-300 font-medium dark:border-purple-700",
    orange:
      "border-b-3 border-orange-200 text-orange-700 dark:text-orange-300 font-medium dark:border-orange-700",
    yellow:
      "border-b-3 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-medium dark:border-yellow-600",
  };

  const activeBackgroundClasses = {
    blue: "text-blue-500",
    teal: "text-teal-500",
    green: "text-green-500",
    red: "text-red-500",
    pink: "text-pink-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
  };
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="bg-[#F4F5F7] py-6 px-6 md:px-20 ">
      <div className="flex justify-between w-[95%] items-center">
          <div className="">
              <img src="./images/aktok.svg" alt="aktok"/>
          </div>
          <div className="flex justify-between items-center gap-8">
              <p className="flex items-center gap-4 ">
                  <span className="text-[#7886a2] uppercase text-sm font-light gothamPro">
                      About platform
                  </span>
              </p>
              <div className="flex items-center gap-1 py-2 group px-4 cursor-pointer relative hover:border-b-2 hover:border-[#FF9933]">
                  <span className="text-[#7886a2] uppercase text-sm font-light gothamPro">
                      Services 
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
              <p className="flex items-center gap-1">
                  <span className="text-[#7886a2] uppercase text-sm font-light gothamPro">
                      why choose us 
                  </span>
              </p>
              <div className="flex items-center gap-1 py-2 group px-4 relative hover:border-b-2 hover:border-[#FF9933]">
                  <span className="text-[#7886a2] uppercase text-sm font-light gothamPro">
                      solutions 
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
              <p className="flex items-center gap-4">
                  <span className="text-[#7886a2] uppercase text-sm font-light gothamPro">
                      Pricing 
                  </span>
              </p>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#486284] text-base gothamPro font-light">
              Register
            </span>
              <button className="bg-[#6866FF] px-6 py-2 rounded-[20px]  text-white text-sm gothamPro font-light">
                  Login
              </button>
          </div>
      </div>
    </header>
  );
};
