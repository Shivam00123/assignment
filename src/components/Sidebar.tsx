import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute h-full w-1/5 bg-[#5B3DC8] rounded-3xl hidden md:flex flex-col items-center justify-center px-7">
      <div className="w-full h-16 border-b-[1px] border-white flex items-end justify-start cursor-pointer">
        <h1 className="text-white pb-3 text-xl">Profile</h1>
      </div>
      <div className="w-full h-16 border-b-[1px] border-white flex items-end justify-start  cursor-pointer">
        <h1
          className="text-white pb-3 text-xl"
          onClick={() => navigate("/posts")}
        >
          Posts
        </h1>
      </div>
      <div className="w-full h-16 border-b-[1px] border-white flex items-end justify-start  cursor-pointer">
        <h1 className="text-white pb-3 text-xl">Gallary</h1>
      </div>
      <div className="w-full h-16 flex items-end justify-start  cursor-pointer">
        <h1 className="text-white pb-3 text-xl">ToDo</h1>
      </div>
    </div>
  );
};

export default Sidebar;
