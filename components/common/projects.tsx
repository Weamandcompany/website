"use client";

import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import tw from "tailwind-styled-components";
import ProjectTab from "./projectTab";
import { Icon } from "@iconify/react";
import ImageCarousel from "./imageCarousel";
import {
  trainingImages,
  projectZero,
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "@/utils/constants";

const ProjectSection = ({ showHeader }: { showHeader: boolean }) => {
  const [selectedImage, setSelectedImage] = useState<
    {
      original: string;
      thumbnail: string;
    }[]
  >([]);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleCloseModal = () => {
    setSelectedImage([]);
  };

  const handleCarouselClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="bg-bgblue bg-no-repeat bg-cover lg:px-32 px-5 lg:py-16 py-12">
        {showHeader && (
          <div className="flex justify-between items-center font-roboto">
            <h6 className="font-[700] lg:text-[30px] text-[20px] text-white">Recent Projects</h6>
            <Btn href="/projects" className="">
              View All Projects
            </Btn>
          </div>
        )}

        <Slide direction="up" cascade triggerOnce={true}>
          <div className="lg:mt-10 mt-8">
            <ProjectTab
              isActive={activeTab === 1}
              description="NNPC E&P Limited in joint venture FHN Limited intends to carry-out update of hazardous area classification and As-Built documentation of facilities in OML 26."
              client="NNPC Exploration & Production Limited/First Hydrocarbon Nigeria Limited"
              imageSrc="/images/project1.svg"
              onClick={() => handleTabClick(1)}
              heading="ENGINEERING: Update of Hazardous Area Classification and AsBuilt Documentation of Facilities in OML-26"
              setSelectedImage={setSelectedImage}
              images={projectZero}
            />

            <ProjectTab
              isActive={activeTab === 2}
              description="Procurement, Installation, Configuration, and Commissioning of Gas Metering Instruments (Transmitters, Gauges, Flow Computers, Gas Chromatographs, etc.) for Gas Metering stations and Power Plants at Geregu and Calabar."
              client="Niger Delta Power Holding Company Limited"
              imageSrc="/projects/project-1/1.jpeg"
              onClick={() => handleTabClick(2)}
              heading="ENGINEERING: Niger Delta Power Holding Company Limited"
              setSelectedImage={setSelectedImage}
              images={projectOne}
            />
            <ProjectTab
              isActive={activeTab === 3}
              description="Development of FEED and Detailed Engineering Designs for Pipelines, Pressure Reduction, and Metering Systems, Construction support, Management, and As-built documentation for the Escravos Environs Power Supply Project."
              imageSrc="/images/project2.svg"
              onClick={() => handleTabClick(3)}
              heading="FEED, DED, and Follow-on for Pipeline Infrastructure for Escravos Environs Power Supply Project"
              client="Yonkys Ya-star Nigeria Limited/ Nigeria Gas Infrastructure Company Ltd"
              setSelectedImage={setSelectedImage}
              images={projectTwo}
            />
            <ProjectTab
              isActive={activeTab === 4}
              description="Provision of FEED Verification and Detailed Engineering Design for the EPC project."
              imageSrc="/images/project3.svg"
              onClick={() => handleTabClick(4)}
              heading="ENGINEERING: Detailed Engineering Design for EPC of the New Egbin Metering Station."
              client="Lateejay Nigeria Limited / Nigeria Gas Infr"
              setSelectedImage={setSelectedImage}
              images={projectThree}
            />
            <ProjectTab
              isActive={activeTab === 5}
              description="Detailed Engineering Design for rehabilitation and upgrade of process equipment, field instruments, Fire and Gas Systems, Electrical installations, control and security building to a much modern status and also guarantee reliability of operations and security of the facility."
              imageSrc="/images/project4.svg"
              onClick={() => handleTabClick(5)}
              heading="ENGINEERING: Detailed Engineering Design for Rehabilitation/Upgrade of Delta IV Metering Station, Ughelli"
              client="NGIC/Bablink Resources Nigeria Limited"
              setSelectedImage={setSelectedImage}
              images={projectFour}
            />
            <ProjectTab
              isActive={activeTab === 6}
              description="Weam provided Detailed Engineering Design and upgrade works on existing Lightning and earthing protection system using INDELEC technology for all field equipment and control room."
              imageSrc={null}
              onClick={() => handleTabClick(6)}
              heading="ENGINEERING: Design and upgrade of Lightning and Earthing System"
              client="Niger Delta Power Holding Company Limited"
              setSelectedImage={setSelectedImage}
              images={[]}
            />
            <ProjectTab
              isActive={activeTab === 7}
              description="Training of 20 Petroleum Economists and Engineers on the fundamental knowledge of Petroleum Economics and Project Analysis. The workshop was designed to enable participants to learn about Upstream Petroleum Economics, Fiscal Regimes (International and Nigerian), Project Analysis, and Project Selection."
              imageSrc={null}
              onClick={() => handleTabClick(7)}
              heading="TRAINING: 5-Day Petroleum Economics and Fiscal Regime Workshop (In Partnership with IAA Energy Resource Ltd.)"
              client="National Petroleum Development Company Ltd (an NNPC Subsidiary)"
              setSelectedImage={setSelectedImage}
              images={trainingImages}
            />

            <ProjectTab
              isActive={activeTab === 8}
              description="Training staff of the Planning Department on the use of Planning Space to improve strategic decision-making and Portfolio Management."
              imageSrc={null}
              onClick={() => handleTabClick(8)}
              heading="TRAINING: Knowledge Transfer and Capacity Development"
              client="National Petroleum Development Company Ltd"
              setSelectedImage={setSelectedImage}
              images={trainingImages}
            />

            <ProjectTab
              isActive={activeTab === 9}
              description="Deployment and Training of NNPC staff on the use of esi-manage software for Budgeting and Planning."
              imageSrc={null}
              onClick={() => handleTabClick(9)}
              heading="SOFTWARE DEPLOYMENT: Procurement and Installation of esimanage software for Corporation-wide Planning and Project Economics."
              client="Nigeria National Petroleum Corporation (NNPC)"
              setSelectedImage={setSelectedImage}
              images={[]}
            />

            <ProjectTab
              isActive={activeTab === 10}
              description="Provision of License and the Implementation of AFE NAV Solutions."
              imageSrc={null}
              onClick={() => handleTabClick(10)}
              heading="SOFTWARE DEPLOYMENT: AFE NAVIGATOR Software for AFE Processing"
              client="Nigeria National Petroleum Corporation (NNPC)"
              setSelectedImage={setSelectedImage}
              images={[]}
            />

            <ProjectTab
              isActive={activeTab === 11}
              description="Weam successfully deployed PlanningSpace Software to NPDC for performing reliable and repeatable analysis using a single data structure. The powerful data management, collaboration, and control functionality of the tool further ensured trustworthy and correct data input for planning and modeling purposes."
              imageSrc={null}
              onClick={() => handleTabClick(11)}
              heading="Project Implementation of PlanningSpace(TM) for NNPC"
              client="National Petroleum Development Company Ltd (an NNPC Subsidiary)"
              setSelectedImage={setSelectedImage}
              images={[]}
            />

            <ProjectTab
              isActive={activeTab === 12}
              description="Provision of software support and maintenance for both esi-manage and AFE NAV for NNPC's Corporate Planning and Strategy department."
              imageSrc={null}
              onClick={() => handleTabClick(12)}
              heading="SOFTWARE DEVELOPMENT: Software Support and Maintenance for esimanage, and AFE NAV"
              client="Nigeria National Petroleum Corporation (NNPC)"
              setSelectedImage={setSelectedImage}
              images={[]}
            />
          </div>
        </Slide>
      </div>

      <div className="flex flex-wrap justify-center">
        {selectedImage?.length > 0 && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleCloseModal}>
            <div
              onClick={handleCarouselClick}
              className="relative lg:w-[45%] w-[90%] lg:left-[30%] md:left-[25%] left-[5%]">
              <ImageCarousel items={selectedImage} />
            </div>
            <button className="relative flex justify-end lg:top-[-30%] w-full -top-[25%] right-8 lg:right-[20%] cursor-pointer">
              <Icon icon="ic:baseline-close" className="h-6 w-6 text-white" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const Btn = tw.a`bg-[#E47B0E] text-white rounded-[3px] lg:py-3 lg:px-8 px-4 py-2 font-[400] lg:text-[13.5px] text-[10px] font-poppins flex items-center gap-2 w-fit hover:opacity-80`;

export default ProjectSection;
