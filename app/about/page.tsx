import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/about/HeroSection";
import HeroSupport from "@/components/about/HeroSupport";
import PageLayout from "@/layouts/PageLayout";
import PolicySection from "@/components/about/PolicySection";
import ClientSection from "@/components/about/ClientSection";
import HomeMission from "@/components/home/mission";
import CorporateSocial from "@/components/about/CorporateSocial";

export const metadata: Metadata = {
  title: " About | Weam",
};

const About = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7rem] md:mt-[2rem] lg:pt-0 pt-[4.5rem] relative px-0">
        <HeroSection />
        <HeroSupport />
        <ClientSection />
        <PolicySection />
        <CorporateSocial />
        <section className="pt-20 pb-16">
          <HomeMission />
        </section>
      </div>
    </PageLayout>
  );
};

export default About;
