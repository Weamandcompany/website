import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/about/HeroSection";
import HeroSupport from "@/components/about/HeroSupport";

export const metadata: Metadata = {
  title: " About | Weam",
};

const About = () => {
  return (
    <>
      <HeroSection />
      <HeroSupport />
    </>
  );
};

export default About;
