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
      <HeroSection />
      <HeroSupport />
      <PolicySection />
      <ClientSection />
    </PageLayout>
  );
};

export default About;
