import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChatLeft } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const ChatBox = () => {
  const [slideUp, setSlideUp] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ bottom: "-19.5rem" }}
      animate={slideUp ? { bottom: "-1.5rem" } : { bottom: "-15.5rem" }}
      className="absolute -bottom-72 right-10 w-60 h-72 md:flex flex-col items-center justify-start rounded-xl overflow-hidden hidden"
    >
      <div
        className="w-full h-16 bg-[#2C65C8] flex items-center justify-between px-5 cursor-pointer flex-shrink-0"
        onClick={() => setSlideUp(!slideUp)}
      >
        <div className="w-1/2 h-full flex items-center justify-center text-white space-x-2">
          <BsChatLeft />
          <p className="-translate-y-[10%]">Chats</p>
        </div>
        <RiArrowDropDownLine
          className="text-white text-xl"
          style={{ transform: !slideUp ? "rotate(180deg)" : "" }}
        />
      </div>
      <div className="w-full h-[18rem] bg-[red] overflow-y-scroll flex flex-col items-center"></div>
    </motion.div>
  );
};

export default ChatBox;
