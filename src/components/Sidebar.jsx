import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCompare } from "react-icons/md";

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
  return (
    <div className="bg-gray-200 w-1/6 p-4 h-screen">
      {SidebarData.map((item, index) => (
        <div className="py-2 flex items-center cursor-pointer" key={index}>
          <div className="text-2xl">{item.icon}</div>
          <div className="pl-4">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
