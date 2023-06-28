"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Accordion from "@/components/common/accordion";

const Row = ({ cellOne, cellTwo }: { cellOne: string; cellTwo: string }) => (
  <div className="grid grid-cols-2 text-[13px] font-normal text-left text-[#0C1239] bg-[#F4F6FF]">
    <div className="px-6 py-4">{cellOne}</div>
    <div className="px-6 py-4">{cellTwo}</div>
  </div>
);

const SoftwareServices = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[3.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/software.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="sofware banner"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Software sales, Deployment and Support.
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              We offer end-to-end software solutions. From sales to deployment and ongoing support,
              our experts ensure a seamless experience. Choose the right software with our
              personalized consultations. Our skilled professionals handle smooth deployment,
              minimizing disruptions. Count on us for dedicated support, updates, and training.
              Enhance productivity with our comprehensive services.
            </p>
          </Slide>
        </div>
        <div className="lg:w-[32%] order-1 lg:order-2">
          <Fade triggerOnce={false}>
            <ServiceSidebar />
          </Fade>
        </div>
      </div>

      <div className="lg:px-32 px-5 lg:mt-14 mt-8">
        <h6 className="max-w-md mx-auto text-[#1C1C1C] lg:text-[24px] text-[20px] text-center font-[600] lg:mb-7 mb-7">
          Softwares
        </h6>
        <Slide direction="left" cascade triggerOnce={true}>
          <Accordion defaultIndex={0} items={softwares} />
        </Slide>
      </div>
    </PageLayout>
  );
};

export default SoftwareServices;

const softwares = [
  {
    title: "Aspen Technology Software",
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div>1. Process Simulation Software (Oil, Gas, Refining and Chemicals)</div>
            <ul className="list-disc list-inside">
              <li>Aspen HYSYS®</li>
              <li>Aspen HYSYS Dynamics™</li>
              <li>Aspen HYSYS Upstream™</li>
              <li>Aspen HYSYS Petroleum Refining (formerly Aspen RefSYS™)</li>
              <li>Aspen HYSYS Reformer</li>
              <li>Aspen HYSYS Hydrocracker</li>
              <li>Aspen HYSYS CatCracker</li>
              <li>Aspen HYSYS Amines</li>
              <li>Aspen HYSYS Crude™</li>
              <li>Aspen Flare System Analyzer</li>
              <li>Aspen Plus®</li>
              <li>Aspen Plus Dynamics®</li>
              <li>Aspen Properties®</li>
              <li>Aspen Rate-Based Distillation</li>
              <li>Aspen Adsorption</li>
              <li>Aspen Distillation Synthesis</li>
              <li>Aspen Polymers</li>
              <li>Aspen Energy Analyzer</li>
              <li>Aspen Custom Modeler®</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-y-4">
            <div>
              <div>2. Model Deployment, Production Management & Execution</div>
              <ul className="list-disc list-inside">
                <li>Aspen InfoPlus.21®</li>
                <li>Aspen Model Runner™</li>
                <li>Aspen HYSYS Upstream™</li>
                <li>Aspen Online Deployment™</li>
                <li>Aspen OTS Framework</li>
                <li>Aspen Simulation Workbook™</li>
              </ul>
            </div>

            <div>
              <div>3. Economic Evaluation (ASPEN ICARUS)</div>
              <ul className="list-disc list-inside">
                <li>Aspen Decision Analyzer</li>
                <li>Aspen Process Economic Analyzer</li>
                <li>Aspen Capital Cost Estimator</li>
                <li>Aspen In-plant Cost Estimator</li>
              </ul>
            </div>
          </div>

          <div>
            <div>4. Equipment Modeling</div>
            <ul className="list-disc list-inside">
              <li>Aspen Shell & Tube Exchanger</li>
              <li>Aspen Shell & Tube Mechanical</li>
              <li>Aspen Air Cooled Exchanger</li>
              <li>Aspen Fired Heater™</li>
              <li>Aspen Plate Exchanger</li>
              <li>Aspen FRAN™</li>
              <li>Aspen HTFS Research Network™</li>
              <li>Aspen Plate Fin Exchanger</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Quorum Software Solutions",
    content: (
      <>
        <div>
          <div>Planning . Execution . Reserves</div>
          <ul className="list-disc list-inside">
            <li>Planning Space</li>
            <li>esi.manage</li>
            <li>petroVR</li>
            <li>enersight</li>
            <li>Val NAV</li>
            <li>Aucerna Execute</li>
            <li>Aucerna Reserves</li>
            <li>Aucerna Regimes</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    title: "Flaresim Software",
    content: (
      <>
        <div>
          <div>Flare System Design and Analysis</div>
          <ul className="list-disc list-inside">
            <li>Flaresim</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    title: "Sunrise Software",
    content: (
      <>
        <div>
          <div>Fluid Flow Analysis, Pipeline and Utilities</div>
          <ul className="list-disc list-inside">
            <li>PIPENET Standard Module</li>
            <li>PIPENET Spray/Sprinkler Module</li>
            <li>PIPENET Transient Module</li>
          </ul>
        </div>
      </>
    ),
  },
];
