import Image from 'next/image';
import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen fixed z-[9999] bg-[#fff] w-full flex justify-center items-center">
      <Image
        className="loading_state h-[80px] w-auto"
        src={'/images/logo.svg'}
        alt="logo"
        height={0}
        width={0}
      />
    </div>
  );
};

export default Loader;
