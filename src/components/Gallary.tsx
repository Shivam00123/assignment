import Container from "@/assets/Container/Container";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Gallary = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-5 md:overflow-hidden">
      <div className="w-full h-full relative">
        <Sidebar />
        <Navbar title="Gallary" />
        <Container>
          <div className="w-full h-full grid place-items-center">
            <h1 className="text-5xl text-textcolor font-extrabold opacity-70">
              Coming Soon
            </h1>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Gallary;
