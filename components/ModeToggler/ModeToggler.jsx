"use client";
import useTheme from "@/hooks/useTheme";
import React, {  useState } from "react";
import { GoMoon } from "react-icons/go";

import { IoSunny } from "react-icons/io5";

const ModeToggler = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme, darkMode, setDarkMode] = useTheme();


  return (
    <div className="relative  mr-5 cursor-pointer transition-all ease-in-out duration-300">
      {darkMode ? (
        <IoSunny
          size={18}
          className=" hover:text-customOrange-300 "
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
      ) : (
        <GoMoon
          size={18}
          className=" hover:text-customOrange-300 "
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        />
      )}
      {isOpen && (
        <div className="bg-customWhite dark:bg-customDark border-customDark mr-5 cursor-pointer hover:text-customOrange-300 absolute right-[-20px] top-[30px] w-[130px] h-[80px] rounded shadow-[2px_5px_28px_3px_rgba(204,204,204,0.65)] px-2 py-2">
          <ul className="flex flex-col justify-center items-start gap-y-2">
            <li
             onClick={() => {
                setIsOpen((prev) => !prev);
                setDarkMode(false)
              }}
              className="dark:text-customWhite text-customDark flex flex-row gap-x-3 items-center font-[14px] dark:hover:bg-gray-800 hover:bg-gray-100 w-full px-2 rounded-[5px]"
            >
              <IoSunny size={20} />
              Light
            </li>
            <li
              onClick={() => {
                setIsOpen((prev) => !prev);
                setDarkMode(true)
              }}
              className="dark:text-customWhite text-customDark flex flex-row gap-x-3 items-center font-[14px] dark:hover:bg-gray-800 hover:bg-gray-100 w-full px-2 rounded-[5px]"
            >
              <GoMoon size={20} /> Dark
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModeToggler;
