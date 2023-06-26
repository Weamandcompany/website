"use client";

import Contact from "@/components/contact";
import ProjectSection from "@/components/common/projects";
import React from "react";
import PageLayout from "@/layouts/PageLayout";

const Projects = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[6rem]">
        <ProjectSection />
        <Contact />
      </div>
    </PageLayout>
  );
};

export default Projects;
