import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCompare } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const SidebarData = [
  {
    title: "Product Details",
    path: "/",
    icon: <AiOutlineProduct />,
  },
  {
    title: "Product Compare",
    path: "/product-compare",
    icon: <MdOutlineCompare />,
  },
];
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="p-4">
      <ul>
        {SidebarData.map((item, index) => (
          <Link
            to={item.path}
            className={`p-4 mb-1 flex items-center cursor-pointer hover:bg-gray-300 rounded-md dark:hover:bg-gray-700
              ${
                location.pathname === item.path
                  ? "text-gray-600 dark:text-white "
                  : "text-black  dark:text-gray-400"
              }
              `}
            key={index}
          >
            <div className="text-2xl">{item.icon}</div>
            <div className="pl-3">{item.title}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
