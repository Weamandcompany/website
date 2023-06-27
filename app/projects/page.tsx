"use client";

import Contact from "@/components/contact";
import ProjectSection from "@/components/common/projects";
import React from "react";
import PageLayout from "@/layouts/PageLayout";
import { Icon } from "@iconify/react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { Fade, Slide } from "react-awesome-reveal";

const Projects = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[8rem] lg:pt-0 pt-[3.5rem]  relative  lg:px-24 px-0 ">
        <Fade triggerOnce={false}>
          <Image
            src="/images/projecthero.svg"
            alt="projecthero"
            width={0}
            height={0}
            style={{ width: "40%" }}
            className="mx-auto absolute top-[-7%] right-[6%] hidden lg:block"
          />
        </Fade>
        <div className="bg-[#0C1239] lg:rounded-[34px] rounded-none lg:py-[5rem] lg:px-32 py-6  px-5 lg:rounded-r-[42px]  lg:w-[75%] w-[100%] text-white">
          <Slide cascade triggerOnce={false}>
            <div className="lg:w-[75%] font-nunito">
              <Fade triggerOnce={false}>
                <Image
                  src="/images/projecthero.svg"
                  alt="projecthero"
                  width={0}
                  height={0}
                  style={{ width: "100%" }}
                  className="mx-auto lg:hidden block mb-8"
                />
              </Fade>
              <h6 className=" font-[900] lg:text-[40px] text-[25px] leading-[1.4]">
                Project Management Excellence:
              </h6>
              <p className="text-[16px] lg:my-8 my-2 leading-9">
                Weam & Company excels in expert project management. With a
                skilled team and proven methodologies, we deliver projects on
                time and within budget. Trust us for exceptional results.
              </p>
              <Button
                href="/contact"
                className="font-poppins flex items-center gap-2 w-fit hover:opacity-80 "
              >
                Contact Us <Icon icon="ph:arrow-right-bold"></Icon>
              </Button>
            </div>
          </Slide>
        </div>
      </div>
      <div className="lg:mt-[6rem] mt-8">
        <ProjectSection showHeader={false} />
        <Contact />
      </div>
    </PageLayout>
  );
};

const Button = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 py-2 px-4 font-[600] text-[14px] font-roboto flex items-center gap-2 w-fit hover:opacity-80`;
export default Projects;
