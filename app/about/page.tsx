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

// export const metadata: Metadata = {
//    title: " About | Weam",
//    description:
//      "Weam and Company (Nigeria) Limited is an ISO 9001:2008 certified multi-disciplinary Engineering Company incorporated in March 1985 to provide Engineering Design, Software, Training, Specialized Services to the Oil and Gas, Energy, Manufacturing and Environmental Sectors in Nigeria and the West African sub-region.",
//    keywords:
//      "nigeria construction company, engineering company in nigeria, logistics company in nigeria, engineering design company in nigeria, software training company in nigeria, procument company in nigeria",
//    robots: "index,follow",
//  };

const About = () => {
  return (
    <PageLayout>
      <HeroSection />
      <HeroSupport />
      <PolicySection />
      <ClientSection />
    </PageLayout>
  );
};

export default About;
