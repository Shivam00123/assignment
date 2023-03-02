import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface FriendProps {
  friendname: string;
}

const FriendCard = ({ friendname }: FriendProps) => {
  return (
    <div className="w-full h-14 relative flex items-center justify-center">
      <div className="w-4/5 h-[1px] bg-textcolor absolute top-0 left-1/2 -translate-x-1/2"></div>
      <div className="w-[80%] h-fit space-x-2 flex items-center justify-start">
        <div className="w-10 h-10 bg-[yellow] rounded-full"></div>
        <h1 className="text-sm text-textcolor whitespace-nowrap">
          {friendname}
        </h1>
      </div>
    </div>
  );
};

interface NavbarProps {
  userDetails?: { [key: string]: any };
}

const Navbar = ({ userDetails }: NavbarProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const friends = ["Clementine Bauch", "Patricia Lebsack"];
  const navigate = useNavigate();

  const signout = () => {
    navigate("/");
  };

  return (
    <div className="w-4/5 h-[15%] border-b-1  absolute top-0 right-0 px-10 flex items-center justify-between z-50">
      <h1 className="text-2xl text-textcolor font-semibold">Profile</h1>
      <div className="w-[95%] h-[1px] bg-textcolor absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30"></div>
      <div
        className="w-1/5 h-1/2 absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center space-x-2 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={userDetails?.image}
            alt="user-profile"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-textcolor text-xl">{userDetails?.name}</h1>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, top: "-100%", pointerEvents: "none" }}
          animate={
            showDropdown
              ? { opacity: 1, top: "100%", pointerEvents: "auto" }
              : { opacity: 0, top: "-100%", pointerEvents: "none" }
          }
          className="w-full h-fit shadow-2xl border bg-white absolute top-full flex flex-col items-center justify-center p-5 rounded-2xl "
        >
          <div className="w-20 h-20 overflow-hidden rounded-full">
            <img
              src={userDetails?.image}
              alt="user-profile"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-textcolor text-base">Leanne Graham</h1>
          <h3 className="text-sm text-textcolor font-semibold opacity-80 pb-4">
            {userDetails?.email}
          </h3>
          {friends.map((friend) => (
            <FriendCard friendname={friend} />
          ))}
          <div className="w-full h-8 grid place-items-center my-2">
            <div
              onClick={signout}
              className="bg-[red] py-2 px-3 text-white font-semibold rounded-full "
            >
              Sign out
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
