import React, { useState } from "react";
import { BsChatLeft } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

interface OnlineFriendsProps {
  image: string;
  name: string;
}

const OnLineFriends = ({ image, name }: OnlineFriendsProps) => {
  return (
    <div className="w-full h-12 flex items-center justify-start space-x-3 px-3 relative cursor-pointer">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img
          src={image}
          alt="user-profile"
          className="w-full h-full object-contain"
        />
      </div>
      <h1>{name}</h1>
      <div className="w-2 h-2 absolute bg-[green] rounded-full right-2 top-1/2 -translate-y-1/2"></div>
    </div>
  );
};

interface ChatBoxProps {
  friends: any[];
}

const ChatBox = ({ friends }: ChatBoxProps) => {
  const [slideUp, setSlideUp] = useState<boolean>(false);

  return (
    <>
      {/* button to show and hide chatbox in mobile view */}
      {!slideUp && (
        <div
          onClick={() => setSlideUp(!slideUp)}
          className="absolute w-16 h-16 bg-[#2C65C8] top-[20%] -right-5 rounded-l-xl grid place-items-center md:hidden cursor-pointer"
        >
          <RiArrowDropDownLine className="text-3xl text-white rotate-90" />
        </div>
      )}
      <div
        className={`absolute  right-10 w-60 h-72 md:flex flex-col items-center justify-start rounded-xl overflow-hidden chatbox transition-all z-50 shadow-xl  ${
          slideUp ? "slideup" : "slidedown"
        }`}
      >
        {/* enables in pc view */}
        <div
          className="w-full h-16 bg-[#2C65C8] flex items-center justify-between px-5 cursor-pointer flex-shrink-0 relative"
          onClick={() => setSlideUp(!slideUp)}
        >
          <div className="w-1/2 h-full flex items-center justify-center text-white space-x-2">
            <BsChatLeft />
            <p className="-translate-y-[10%]">Chats</p>
          </div>
          <RiArrowDropDownLine
            className="text-white text-xl hidden md:flex"
            style={{ transform: !slideUp ? "rotate(180deg)" : "" }}
          />
          <RiArrowDropDownLine
            className="text-white text-xl md:hidden"
            style={{ transform: slideUp ? "rotate(-90deg)" : "" }}
          />
        </div>
        <div className="w-full h-[18rem] overflow-y-scroll flex flex-col items-center space-y-2 bg-white py-2 pb-7">
          {friends?.map((friend) => (
            <OnLineFriends image={friend.profilepicture} name={friend.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatBox;
