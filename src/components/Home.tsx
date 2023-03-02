import UsersList from "@/assets/Home/UsersList";
import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-[red] grid place-items-center">
      <div className="min-w-[500px] sm:w-[40%] w-full sm:h-[80%] h-full bg-white sm:rounded-3xl flex flex-col items-center justify-between overflow-hidden shadow-2xl">
        <div className="w-full h-24 bg-[#F6F6F6] grid place-items-center flex-shrink-0 shadow-lg">
          <h1 className="text-2xl font-bold text-textcolor">
            Select an account
          </h1>
        </div>
        <div className="w-full h-full pb-6 overflow-scroll">
          <UsersList />
        </div>
      </div>
    </div>
  );
};

export default Home;
