"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <header
      className="bg-cover bg-no-repeat mt-[85px]"
      style={{ backgroundImage: "url('images/about-cover.png')" }}>
      <div className="py-20 bg-gradient-to-r from-black/50 px-4 xs:px-5 sm:px-6">
        <div className="container text-white">
          <h1 className="font-bold md:text-2xl lg:text-3xl text-white font-nunito">About Us</h1>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
