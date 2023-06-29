"use client";

import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import tw from "tailwind-styled-components";
import ProjectTab from "./projectTab";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ProjectSection = ({ showHeader }: { showHeader: boolean }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <div className="bg-bgblue bg-no-repeat bg-cover lg:px-32 px-5 lg:py-16 py-12">
        {showHeader && (
          <div className="flex justify-between items-center font-roboto">
            <h6 className="font-[700] lg:text-[30px] text-[20px] text-white">
              Latest Projects
            </h6>
            <Btn href="/projects" className="">
              View All Projects
            </Btn>
          </div>
        )}

        <Slide direction="up" cascade triggerOnce={true}>
          <div className="lg:mt-10 mt-8">
            <ProjectTab
              isActive={activeTab === 1}
              title="Projects V1"
              description="Accurate and detailed facility models that bring your engineering projects to life. Our expert team of modelers and designers leverages cutting-edge technology and industry best practices to deliver high-quality facility models."
              imageSrc="/images/project1.svg"
              onClick={() => handleTabClick(1)}
              heading="Facility Models"
              setSelectedImage={setSelectedImage}
            />
            <ProjectTab
              isActive={activeTab === 2}
              title="Projects V2"
              description="Detailed Engineering Design for rehabilitation and upgrade of process equipment, field instruments, Fire and Gas Systems, Electrical installations, control and security building to a much modern status and also guarantee reliability of operations and security of the facility."
              imageSrc="/images/project2.svg"
              onClick={() => handleTabClick(2)}
              heading="Delta IV Site Plant"
              setSelectedImage={setSelectedImage}
            />
            <ProjectTab
              isActive={activeTab === 3}
              title="Projects V3"
              description="NDPHC secured the services of WEAM AND COMPANY LIMITED, to carry out supply, repair and service of gas equipment in her CALABAR power station at Odukpani, Cross River state as part of efforts to improve and optimise its working condition."
              imageSrc="/images/project3.svg"
              onClick={() => handleTabClick(3)}
              heading="Calabar Power Plant"
              setSelectedImage={setSelectedImage}
            />
            <ProjectTab
              isActive={activeTab === 4}
              title="Projects V4"
              description="Deployment of Laser scanner (2D/3D technology), back drafting of existing drawings and Generation of As-Built Documentations"
              imageSrc="/images/project4.svg"
              onClick={() => handleTabClick(4)}
              heading="OML-26 As built"
              setSelectedImage={setSelectedImage}
            />
            <ProjectTab
              isActive={activeTab === 5}
              title="Projects V5"
              description="We take pride in offering our clients exceptional training experiences through a captivating gallery collection.A glimpse into our comprehensive training programs designed to empower our clients. with the knowledge and skills necessary for success."
              imageSrc="/images/project5.svg"
              onClick={() => handleTabClick(5)}
              heading="Training"
              setSelectedImage={setSelectedImage}
            />
          </div>
        </Slide>
      </div>

      <div className="flex flex-wrap justify-center">
        {selectedImage && (
          <div
            className="fixed top-0  left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={() => setSelectedImage("")}
          >
            <Image
              src={selectedImage}
              className=" lg:h-[60%] lg:w-[50%] w-[80%] absolute rounded-lg my-3"
              width={0}
              height={0}
              style={{
                objectFit: "contain",
              }}
              alt="Selected Image"
            />
            <button
              className="relative flex justify-end lg:top-[-30%] w-full -top-[15%] right-8 lg:right-[20%] cursor-pointer"
              onClick={() => setSelectedImage("")}
            >
              <Icon
                icon={"ic:baseline-close"}
                className="h-6 w-6 text-white "
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const Btn = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 px-4 py-2 font-[400] lg:text-[13.5px] text-[10px] font-poppins flex items-center gap-2 w-fit hover:opacity-80`;

export default ProjectSection;
