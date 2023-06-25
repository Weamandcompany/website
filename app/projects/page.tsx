"use client";

import Contact from "@/components/contact";
import ProjectSection from "@/components/common/projects";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="bg-heroservice bg-no-repeat bg-cover lg:py-[5.5rem] py-14 lg:mt-[5.5rem]">
        <h6 className="lg:text-[34px] text-[25px] font-[500] font-poppins text-white lg:px-32 px-10">
          Projects
        </h6>
      </div>

      <ProjectSection />
      <Contact />
    </>
  );
};

export default Projects;
