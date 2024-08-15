import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const tabs = [
  {
    name: "Dashboard",
    icon: IoHomeOutline,
    location: "/",
  },
  {
    name: "Upload",
    icon: IoSearchOutline,
    location: "upload",
  },
  {
    name: "invoice",
    icon: IoMdAdd,
  },
  {
    name: "Schedule",
    icon: RiFireLine,
  },
  {
    name: "Calender",
    icon: MdOutlineExplore,
  },
  {
    name: "Notification",
    icon: FaHashtag,
  },
  {
    name: "Settings",
    icon: CiBookmarkPlus,
  },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  function handleRouting(tab) {
    setActiveTab(tab.name);
    if (tab.location) {
      navigate(tab.location);
    }
  }
  return (
    <div className="w-[100%] bg-[#161616] h-auto flex">
      <div className="w-[15%] h-screen  sticky top-0 bottom-0 border-r border-gray-800 left-0">
        <div className="mt-10 flex flex-col gap-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleRouting(tab)}
              className={`flex cursor-pointer items-center px-4 hover:bg-[#1C1F26] py-2 ${
                activeTab === tab.name ? "bg-[#93a8db]" : ""
              }`}
            >
              <tab.icon className="text-violet-200" />
              <button className="pl-3 capitalize font-thin text-white">{tab.name}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[85%] h-auto ">
        <Outlet />
      </div>
    </div>
  );
}
