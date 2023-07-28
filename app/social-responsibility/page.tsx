import React from "react";
import { Metadata } from "next";
import PageLayout from "@/layouts/PageLayout";
import SocialBody from "@/components/social/social";

export const metadata: Metadata = {
  title: "Social Responsibilty | Weam",
};

const About = () => {
  return (
    <PageLayout>
      <SocialBody />
    </PageLayout>
  );
};

export default About;
