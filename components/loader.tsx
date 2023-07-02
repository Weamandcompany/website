import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen fixed z-[9999] bg-[#fff] w-full flex justify-center items-center">
      <Image
        className="loading_state"
        src={"/images/logo.svg"}
        alt="logo"
        height={70}
        width={70}
      />
    </div>
  );
};

export default Loader;
