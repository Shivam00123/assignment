import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const userID = useSelector((state: any) => state.userReducer.userID);

  const navigateTo = (path: string) => {
    if (path === "/user") {
      if (userID) {
        navigate(`/user/${userID}`);
        return;
      } else {
        navigate("/");
      }
    }
    navigate(path);
  };

  return (
    <div className="absolute h-full w-1/5 bg-[#5B3DC8] rounded-3xl hidden md:flex flex-col items-center justify-center px-7">
      <div className="w-full h-16 border-b-[1px] border-white flex items-end justify-start cursor-pointer">
        <h1
          className="text-white pb-3 text-xl"
          onClick={() => navigateTo("/user")}
        >
          Profile
        </h1>
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
        <h1
          className="text-white pb-3 text-xl"
          onClick={() => navigate("/gallary")}
        >
          Gallary
        </h1>
      </div>
      <div className="w-full h-16 flex items-end justify-start  cursor-pointer">
        <h1
          className="text-white pb-3 text-xl"
          onClick={() => navigate("/todo")}
        >
          ToDo
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
