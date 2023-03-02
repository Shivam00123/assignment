import React from "react";

const Container = ({ children }: any) => {
  return (
    <div className="w-4/5 h-[85%] absolute bottom-0 right-0">{children}</div>
  );
};

export default Container;
