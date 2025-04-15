"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import { Fade, Slide, } from "react-awesome-reveal";
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
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[4.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/soft-sales.jpg"}
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
              We offer end-to-end software solutions. From sales to deployment
              and ongoing support, our experts ensure a seamless experience.
              Choose the right software with our personalized consultations. Our
              skilled professionals handle smooth deployment, minimizing
              disruptions. Count on us for dedicated support, updates, and
              training. Enhance productivity with our comprehensive services.
            </p>
          </Slide>
        </div>
        <div className="lg:w-[32%] order-1 lg:order-2">
          <Fade triggerOnce={true}>
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
    title: "Aspen Technology Inc Software Solutions",
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div>
              AspenTech&apos;s product portfolio represents the broadest
              footprint of process optimization solutions in the market. The
              best-in-class products span engineering, manufacturing, and supply
              chain operations, enabling you to create and maintain sustainable
              best practices while driving operational excellence. We deliver
              Aspen Technology Software solutions as the Authorized Marketing
              Partners, which comprises a team of highly efficient Training and
              Solution Consultants to talk you through any difficulties you may
              encounter, offer cost-effective Maintenance, Updates and Support
              Program keeping our clients updated with the latest technology.{" "}
              <br />
              These solutions include:
            </div>
            <ul className="list-disc list-inside">
              <li>Process Simulation for Energy</li>
              <li>Process Simulation for Chemicals</li>
              <li>Exchanger Design & Rating</li>
              <li>Concurrent FEED</li>
              <li>Subsurface Science & Engineering</li>
              <li>Energy & Utilities Optimization</li>
              <li>Operations Support</li>
              <li>Advanced Process Control</li>
              <li>Dynamic Optimization</li>
              <li>Manufacturing Execution Systems</li>
              <li>Petroleum Supply Chain</li>
              <li>Supply Chain Management</li>
              <li>Asset Performance Management</li>
              <li>AspenTech DataWorks</li>
              <li>AEI - Workflow Management</li>
              <li>Digital Grid Management</li>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-bold">
              Planning, Economics & Reserves suite
            </div>
            <div>
              With sector-leading comprehensive solutions, you can quickly and
              intelligently make decisions at every step of asset development
              while having a clear picture of the performance and potential of
              your portfolio. These solutions are relevant for:
            </div>
            <ul className="list-disc list-inside">
              <li>Strategy & Portfolio Management</li>
              <li>Petroleum Economics</li>
              <li>Business Planning</li>
              <li>Reserves Management</li>
              <li>Asset Development</li>
              <li>Technical Forecasting</li>
              <li>Integrated Production Modelling</li>
            </ul>
          </div>

          <div>
            <div className="font-bold">Execution & Well Operations suite</div>
            <div>
              This user-friendly software suite, which integrates AFE workflows,
              field operations, and well master data management into a
              simplified project delivery ecosystem, lets you manage your
              operations with confidence. These include:
            </div>
            <ul className="list-disc list-inside">
              <li>Capital & Well Lifecycle Management</li>
              <li>Well Data Management</li>
            </ul>
          </div>

          <div>
            <div className="font-bold">
              Hydrocarbon Production Management suite
            </div>
            <div>
              With a single system to monitor and optimize hydrocarbon
              production throughout the value chain, you can meet production
              targets while reducing LOE. This includes:
            </div>
            <ul className="list-disc list-inside">
              <li>Production Operations & Optimization</li>
            </ul>
          </div>

          <div>
            <div className="font-bold">Logistics Management suite</div>
            <div>
              Using a world-class logistics solution for the Energy Industry,
              Quorum is challenging the status quo by assisting customers in
              reducing efforts and performing better. This solution unifies the
              entire logistics process, including personnel, cargo and offshore
              wind, making logistics straightforward.
            </div>
          </div>

          <div>
            <div className="font-bold">Hydrocarbon Accounting</div>
            <div>
              <ul className="list-disc list-inside">
                <li>Production</li>
                <li>Transport</li>
                <li>Sales</li>
                <li>Revenue</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="font-bold">LNG & Distribution suite</div>
            <div>
              Simplify all LNG and pipeline operations across the value chain to
              make faster decisions. A unified version of the truth that enables
              planners to make swift, fact-based decisions about their LNG
              operations. This includes:
            </div>
            <ul className="list-disc list-inside">
              <li>Import and Export Terminal Management</li>
            </ul>
          </div>

          <div>
            <div className="font-bold">Measurement Solutions</div>
            <div>
              Simplify your measurement process and improve data accuracy.
              Software in this suite are used for:
            </div>
            <ul className="list-disc list-inside">
              <li>Gas & Liquid Measurement</li>
              <li>Oilfield Chemistry</li>
              <li>Environment & Emissions Management</li>
            </ul>
          </div>

          <div>
            <div className="font-bold">Midstream suite</div>
            <div>
              Streamlines complicated midstream procedures by leveraging
              industry-leading tools for hydrocarbon scheduling, accounting,
              transportation, and trading across the value chain. This delivers
              solutions for pipeline transaction management and Energy
              marketing.
            </div>
          </div>
        </div>
      </>
    ),
  },

  {
    title: "Flaresim Software",
    content: (
      <>
        <div>
          <div>
            We offer Training and support services for Flare System Design and
            Analysis.
          </div>
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
          <div>
            We set the standard by leading the way in Fluid Flow Analysis,
            Pipeline and Utilities by performing pipe sizing and pump selection
            calculations in the steady state.
          </div>
          <ul className="list-disc list-inside">
            <li>PIPENET Standard Module</li>
            <li>PIPENET Spray/Sprinkler Module</li>
            <li>PIPENET Transient Module</li>
          </ul>
        </div>
      </>
    ),
  },

  {
    title: "SAP Solutions",
    content: (
      <>
        <div>
          <div>
          Weam and Company Limited is a member o f the SAP PartnerEdge open ecosystem providing consulting services. Currently, we provide comprehensive S/4HANA Cutover Stabilization Support Services to the Nigerian National Petroleum Company Limited (NNPCL), spanning multiple modules, including:
          </div>
          <ul className="list-disc list-inside">
            <li>Project Systems</li>
            <li>Sourcing & Procurement/Ariba</li>
            <li>Enterprise Asset Management</li>
            <li>Production Planning and Costing</li>
            <li>Finance and Accounts</li>
            <li>Joint Venture Accounting</li>
            <li>IS-Oil</li>
            <li>Business Technology Platform</li>
            <li>SuccessFactors/Concur</li>
            <li>Sales and Distribution</li>
          </ul>
          <div>
          Our expertise and experience enable us to support complex SAP implementations and stabilization projects, driving value for our clients.
          </div>
        </div>
      </>
    ),
  },
];
