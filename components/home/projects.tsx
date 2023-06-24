"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

interface ProjectTabProps {
  isActive: boolean;
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
  heading: string;
}

const ProjectTab: React.FC<ProjectTabProps> = ({
  isActive,
  title,
  description,
  imageSrc,
  onClick,
  heading,
}) => {
  return (
    <div
      className={`${
        isActive ? "bg-white my-12" : "bg-[#161C49] mb-4"
      } lg:p-10 p-6 rounded-[8px] font-poppins cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex gap-5 items-center justify-between relative">
        <div>
          <h6 className="text-[#E47B0E] text-[13.5px] mb-2">
            {isActive ? heading : title}
          </h6>
          <p
            className={`text-white text-[19.5px] font[600] ${
              isActive ? "hidden" : ""
            }`}
          >
            {heading}
          </p>
          <p
            className={`text-[#61657E] text-xs lg:w-[45%] ${
              isActive ? "" : "hidden"
            }`}
          >
            {description}
          </p>
          {isActive && (
            <Image
              src={imageSrc}
              className="absolute lg:top-[-70px] top-[-50px] right-[15%]"
              width={0}
              height={0}
              style={{ width: "37%", height: "auto" }}
              alt="logos"
            />
          )}
        </div>
        <div>
          <Icon
            icon="ph:arrow-right-bold"
            className="text-[#E47B0E] h-[37px] w-[37px] rounded-full p-2 flex items-center self-center bg-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

const HomeProjects = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div
      style={{
        backgroundImage: "url('bgblue.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="lg:px-32 px-10 py-16"
    >
      <div className="flex justify-between items-center font-roboto">
        <h6 className="font-[700] lg:text-[30px] text-[20px] text-white">
          Latest Projects
        </h6>
        <a
          href="#"
          className="bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 px-4 py-2 font-[400] lg:text-[13.5px] text-[10px] font-poppins flex items-center gap-2 w-fit hover:opacity-80"
        >
          View All Projects
        </a>
      </div>

      <Slide direction="down" cascade triggerOnce={true}>
        <div className="mt-10">
          <ProjectTab
            isActive={activeTab === 1}
            title="Projects V1"
            description="Accurate and detailed facility models that bring your engineering projects to life. Our expert team of modelers and designers leverages cutting-edge technology and industry best practices to deliver high-quality facility models."
            imageSrc="project1.svg"
            onClick={() => handleTabClick(1)}
            heading="Facility Models"
          />
          <ProjectTab
            isActive={activeTab === 2}
            title="Projects V2"
            description="Detailed Engineering Design for rehabilitation and upgrade of process equipment, field instruments, Fire and Gas Systems, Electrical installations, control and security building to a much modern status and also guarantee reliability of operations and security of the facility."
            imageSrc="project2.svg"
            onClick={() => handleTabClick(2)}
            heading="Delta IV Site Plant"
          />
          <ProjectTab
            isActive={activeTab === 3}
            title="Projects V3"
            description="NDPHC secured the services of WEAM AND COMPANY LIMITED, to carry out supply, repair and service of gas equipment in her CALABAR power station at Odukpani, Cross River state as part of efforts to improve and optimise its working condition."
            imageSrc="project3.svg"
            onClick={() => handleTabClick(3)}
            heading="Calabar Power Plant"
          />
          <ProjectTab
            isActive={activeTab === 4}
            title="Projects V4"
            description="Deployment of Laser scanner (2D/3D technology), back drafting of existing drawings and Generation of As-Built Documentations"
            imageSrc="project4.svg"
            onClick={() => handleTabClick(4)}
            heading="OML-26 As built"
          />
          <ProjectTab
            isActive={activeTab === 5}
            title="Projects V5"
            description="We take pride in offering our clients exceptional training experiences through a captivating gallery collection.A glimpse into our comprehensive training programs designed to empower our clients. with the knowledge and skills necessary for success."
            imageSrc="project5.svg"
            onClick={() => handleTabClick(5)}
            heading="Training"
          />
        </div>{" "}
      </Slide>
    </div>
  );
};

export default HomeProjects;
