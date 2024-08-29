import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="px-8 py-4 bg-gray-200 dark:bg-gray-800 dark:text-white fixed flex items-center justify-between ml-64 w-5/6">
      <div className="text-2xl">Home</div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 text-xl"
      >
        {theme === "light" ? <MdOutlineDarkMode /> : <CiLight />}
      </button>
    </div>
  );
};

export default Navbar;
