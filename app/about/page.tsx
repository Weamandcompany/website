import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/about/HeroSection";
import HeroSupport from "@/components/about/HeroSupport";
import PageLayout from "@/layouts/PageLayout";
import PolicySection from "@/components/about/PolicySection";
import ClientSection from "@/components/about/ClientSection";

export const metadata: Metadata = {
  title: " About | Weam",
};

const About = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7rem] md:mt-[2rem] lg:pt-0 pt-[4.5rem]  relative  lg:px-24 px-0 ">
        <HeroSection />
        <HeroSupport />
        <PolicySection />
        <ClientSection />
      </div>
    </PageLayout>
  );
};

export default About;
