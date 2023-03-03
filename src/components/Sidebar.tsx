import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowRight } from "react-icons/md";
import { menuChange } from "@/redux/Menu/actions";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const menuData = [
  { id: "profile", path: "/user", name: "Profile" },
  { id: "posts", path: "/posts", name: "Posts" },
  { id: "gallary", path: "/gallary", name: "Gallary" },
  { id: "todo", path: "/todo", name: "Todo" },
];

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userID = useSelector((state: any) => state.userReducer.userID);
  const menuItem = useSelector((state: any) => state.menuReducer.menuState);

  const navigateTo = (path: string, menuItem: string) => {
    if (path === "/user") {
      if (userID) {
        dispatch(menuChange(menuItem));
        navigate(`/user/${userID}`);
        return;
      } else {
        navigate("/");
      }
    }
    dispatch(menuChange(menuItem));
    navigate(path);
  };

  return (
    <>
      {/* button on mobile view to open menu options */}

      <div className="absolute h-full w-1/5 bg-[#5B3DC8] rounded-3xl hidden md:flex flex-col items-center justify-center px-7 space-y-3">
        {menuData.map((menu) => (
          <div
            key={menu.id}
            onClick={() => navigateTo(`${menu.path}`, `${menu.id}`)}
            className={`w-full h-12 border-b-[1px] border-white flex items-end justify-start cursor-pointer  relative opacity-50 ${
              menuItem === `${menu.id}` ? "currentSelected" : ""
            }`}
          >
            <div className="w-7 h-4/5 bg-white absolute top-1/2 -translate-y-1/2 -right-7 rounded-l-full rounded-r-3xl grid place-items-center curveBox">
              <MdKeyboardArrowRight className="text-2xl translate-x-1" />
            </div>
            <h1 className="text-white pb-3 text-xl">{menu.name}</h1>
          </div>
        ))}
      </div>

      {/* menu bar for pc */}

      <div
        className="w-10 h-10 absolute top-9 bg-[#5B3DC8] rounded-sm grid place-items-center md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <RxCross2 className="text-white" />
        ) : (
          <GiHamburgerMenu className="text-white" />
        )}
      </div>
      {showMenu && (
        <div className="w-60 h-72 bg-[#5B3DC8] absolute top-20 z-50 rounded-lg  md:hidden flex flex-col items-center justify-center ">
          {menuData?.map((menu) => (
            <div
              key={menu.id}
              onClick={() => navigateTo(`${menu.path}`, `${menu.id}`)}
              className={`w-4/5 h-12 grid place-items-center text-lg text-white border-b-[1px] border-white cursor-pointer opacity-50 ${
                menuItem === `${menu.id}` ? "currentSelected" : ""
              }`}
            >
              <h1>{menu.name}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
