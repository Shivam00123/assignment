import React from "react";

const Container = ({ children }: any) => {
  return (
    // same properties for different components
    <div className="md:w-4/5 w-full h-[85%] absolute bottom-0 right-0">
      {children}
    </div>
  );
};

export default Container;
