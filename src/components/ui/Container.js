import React from "react";

const Container = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} container mx-auto max-w-[1440px] w-full px-[2rem] 2xl:p-0`}
    >
      {children}
    </div>
  );
};

export default Container;
