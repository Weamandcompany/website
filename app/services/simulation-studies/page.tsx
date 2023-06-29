"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import Accordion from "@/components/common/accordion";
import { simulationStudiesAccordions } from "@/utils/constants";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const SimulationStudiesService = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[4.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/simulation1.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="projectImage"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Simulation Studies{" "}
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              At Weam and Company Limited, we specialize in harnessing the power of simulation
              studies to revolutionize the field of engineering. Through cutting-edge software and
              advanced modeling techniques, we offer comprehensive solutions that enable businesses
              to gain critical insights, optimize designs, and make informed decisions. Our team of
              skilled engineers combines technical expertise with innovative thinking to simulate
              real-world scenarios and accurately predict the behavior and performance of complex
              systems. Whether it&apos;s structural analysis, fluid dynamics, or electromagnetic
              simulations, our simulation studies empower clients to mitigate risks, enhance
              efficiency, and drive sustainable growth. Step into the future of engineering with us
              and unlock the potential of simulation studies to solve tomorrow&apos;s challenges
              today.
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
        <h6 className="text-[#1C1C1C] text-[24px] font-[600] mb-4">Our Service Process </h6>
        <div className="grid lg:grid-cols-2 gap-12 ">
          <Slide direction="left" cascade triggerOnce={true}>
            <Accordion items={simulationStudiesAccordions} />
          </Slide>
          <Zoom triggerOnce={true}>
            <Image
              src={"/images/simulation2.svg"}
              className="lg:block relative hidden rounded-lg mb-5"
              width={0}
              height={0}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="projectImage"
            />
          </Zoom>
        </div>
      </div>

      <div className="lg:px-32 px-5 lg:mt-14 mt-20">
        <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] text-center font-[600] lg:mb-7 mb-5">
          Engineering and Simulation studies done for our Clients
        </h6>
        <Accordion defaultIndex={0} items={simulations} />
      </div>
    </PageLayout>
  );
};

const simulations = [
  {
    title: "SPDC",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title:
          "As-Built Documentation Campaign Project for Ubie, Diebu, Kolo Creek and Nun River Flow Stations",
        description:
          "Site mark-up drawing and As-built drawing compilation for Ubie, Diebu, Kolo Creek and Nun River Flow Stations",
      },
      {
        title: "Oguta Flow station Debottlenecking Studies",
        description:
          "Performed process checks on flare system and debottlenecks facility to reduce system backpressure on surge vessel. Recommended and sized new process lines, valves, vessels, flare barrel to handle the gas from the separator. Redesigned of instrumentation and control system to incorporate new system",
      },
      {
        title: "Kolocreek Debottlenecking Project",
        description:
          "Debottlenecked facility to reduce system backpressure on surge vessel. Installation of new flare barrel to receive gases from separators.",
      },
      {
        title: "Soku Gas Plant Process Studies",
        description:
          "Process reviews of LNG plant covering facilities and energy management. Process and optimization studies via capacity envelope generation and sensitivity analyses on possible process/design modification.",
      },
      {
        title: "Santa Barbara Process Engineering Studies",
        description:
          "Determined maximum throughput of the facilities. Identified design and process constraints of the facilities, and rated the ability of the relief systems to curtail over-pressure.",
      },
      {
        title: "Belema Process Engineering Studies",
        description:
          "Determined maximum throughput of the facilities. Identified design and process constraints of the facilities, and rated the ability of the relief systems to curtail over-pressure.",
      },
      {
        title: "Soku Flow station Process Engineering Studies",
        description:
          "Determined maximum throughput of the facilities. Identified design and process constraints of the facilities, and rated the ability of the relief systems to curtail over-pressure",
      },
      {
        title: "Simulation Studies on the Nembe Creek Trunk Line",
        description:
          "Optimized the crude oil handling capacity of the pipeline network across Nembe axis.",
      },
    ],
  },

  {
    title: "CHEVRON",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "System wide study on the Agbami FPSO Seawater system",
        description:
          "Built model for the Agbami FPSO Seawater system to identify and analyze system problems in order to propose solutions to the problems.",
      },
      {
        title: "Malu and West Isan Water Injection Pump Rating Study",
        description:
          "Carried out pump rating studies to determine the duty and capacity of the water re-injection pump. Carried out sensitivity analysis to determine the best pipe size and flow rate for re-injection process.",
      },
    ],
  },

  {
    title: "CHEVRON/TITAN ENERGY",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Funiwa Export Pipeline Sizing Studies",
        description:
          "Carried out optimal pipeline sizing for fluid export from Funiwa to Escravos for different flow scenarios. Determined the maximum liquid capacity of the proposed pipeline sizes.",
      },
      {
        title: "North Apoi/Funiwa Revamp Project (Conceptual and Front End Engineering Design)",
        description:
          "Carried out capacity check on existing North Apoi and Funiwa processing facilities. Performed sizing of new recommended vessel, Air coolers Compressors, Slug catchers, pumps etc. Carried out optimal pipeline sizing and flow scenario for routing of three phase fluid from North Apoi to Funiwa without production loss.",
      },
    ],
  },

  {
    title: "Ministry of Petroleum Resources",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Gas Supply Pipeline to PHCN Delta IV",
        description: (
          <>
            <ul>
              <li>Conceptual Studies</li>
              <li>Environmental Impact Assessment (EIA) Studies</li>
              <li>Front End Engineering Design (FEED)</li>
              <li>Detailed Engineering Design</li>
              <li>Flow Assurance Modelling</li>
              <li>Contracting /Project Management Services for Engineering</li>
              <li>Procurement & Constuction (EPC) Phase</li>
              <li>Capacity Building on Advanced Project Management & Pipeline Management</li>
            </ul>
          </>
        ),
      },
      {
        title:
          "Project Management Consultancy Service on Calabar-Umuahia-Ajaokuta Gas Pipeline (Detailed Engineering Design)",
        description:
          "Project Monitoring Services and Review of Detailed Engineering Design Deliverables",
      },
    ],
  },

  {
    title: "NAOC/SUDELETTRA",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Ebocha Oil Center Revamp Project Phase2",
        description:
          "Modelling of various case scenarios to carry out material and energy balance, dynamics check on each vessel. Preparation of the datasheets for all the vessels, line sizing, control valves sizing and level setting calculation.",
      },
      {
        title: "Ebocha and Oshie flow station upgrade",
        description:
          "Capacity check on some in-plots pipes for conformity and non conformity with pressure and velocity drop requirement. Carried out debottlenecking strategies under technical and economical consideration. Investigation of hydrate formation at given operating conditions and determined the optimum temperature range for hydrate- free operation at a known pressure.",
      },
    ],
  },

  {
    title: "TOTAL",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "OML 58 Gas Transportation Simulation Study",
        description:
          "Determined maximum export capacity of NAOC’s GTS4 pipeline from Obiafu to Bonny. Determined maximum capacity available to TOTAL for tie-in gas from Obite at varying production rate from Obiafu.",
      },
      {
        title: "Obagi Flow station Reid Vapor Pressure (RVP) Study",
        description:
          "Carry out studies to determine the actual RVP versus specification of Oil/ Condensate from stabilization process. Designed new equipment/modification to meet this target RVP.",
      },
    ],
  },

  {
    title: "ADAX",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "OPL 98 field-wide offshore production facilities optimization",
        description:
          "Development of production and facilities optimization models in order to maximize production.",
      },
      {
        title: "Design of Crude Oil Flowlines and Tie-ins for the Ossu Field",
        description:
          "Determined constraints to tie-in two new wells to existing production from Ossu manifold to Izombe flow station through existing LP bulkline. Designed new bulklines and checked for capacity limitations of producing additional six new wells through these new bulklines.",
      },
    ],
  },

  {
    title: " INDORAMA ELEME PETROCHEMICALS COMPANY LIMITED",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Hydrocarbon Recovery",
        description:
          "Detailed engineering design of Piping layout, Equipment layout, Civil foundation and Support allocation.",
      },
      {
        title: "As-built Documentation",
        description: "Development of 2D As-built drawings of PP, Olefins and Power Plants.",
      },
    ],
  },

  {
    title: "OZONO/SPDC",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Mininta-Ahia Bulk lines and Tie-ins Simulation Study",
        description:
          "Determined the fluid handling capacities of the proposed bulklines and tie-ins.",
      },
      {
        title: "Ahia Flow Station Process Study and Design",
        description:
          "Determined the ability of the proposed double-bank flow station to handle an anticipated peak production.",
      },
    ],
  },

  {
    title: "BELEMAOIL PRODUCING",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "OML 55 Gas Treatment Simulation Project",
        description:
          "The main objective of this project was to develop a Gas Treatment System Simulation model for Robertkiri Production facility using Aspen Hysys software. This will eventually form the basis for the EPC phase of the project.",
      },
      {
        title: "OML 55 Gas Treatment Flow Assurance study",
        description:
          "The Flow Assurance study was done to determine the optimum pipeline sizes considering desired arrival pressures and throughput and also determine potential for slugging and requirement for slug suppression considering steady state operation at various production rates.",
      },
    ],
  },

  {
    title: "BELEMAOIL PRODUCING",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title:
          "Installation and Configuration of Aspen Info Plus 21 and CIM-IO Server (Central Database for Real-Time Collection and Analysis",
        description: (
          <>
            <ul className="list-disc">
              <li>Installation of the Software License Manager</li>
              <li>
                Installation of the CIM-IO application on the CIM-IO server and enabling an
                interaction interface between the Infoplus.21 Server and the Schneider OPC server
              </li>
              <li>
                CIM-IO full configuration and subsequent creation of CIM-IO related records (Tasks
                and Logical Devices)
              </li>
              <li>Installation of Aspen Infoplus.21 Process explorer</li>
              <li>
                Testing of OPC tag names via the Test API CIM-IO utility to verify the name
                convention
              </li>
              <li>Configuration of CIM-IO for IP.21</li>
              <li>Loading of tags from corrected spreadsheets</li>
            </ul>
          </>
        ),
      },
    ],
  },

  {
    title: "POINT ENG. LTD",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Hydrate formation monitoring in Gas Pipeline Network",
        description: "Monitoring of Hydrate formation in Gas Pipeline Network.",
      },
    ],
  },

  {
    title: "NGIC (subsidiary of NNPC)",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title:
          "Detailed Engineering Design for Rehabilitation/Upgrade of Delta IV Metering Station, Ughelli",
        description:
          "Detailed Engineering Design for rehabilitation and upgrade of process equipment, field instruments, Fire and Gas Systems, Electrical installations, control and security building to a much modern status and also guarantee reliability of operations and security of the facility",
      },
      {
        title: "Detailed Engineering Design for EPC of the New Egbin Metering Station",
        description:
          "Provision of FEED verification and Detailed Engineering Design for the New Egbin Metering Station",
      },
      {
        title:
          "FEED, Detailed Engineering Design, Follow-on Engineering and As-built documentation for EPC of Pipeline Infrastructure for Gas Supply to Escravos Environs Power Supply Project",
        description:
          "Provision of FEED and Detailed Engineering for Pipelines, Pressure Reduction, and Metering Systems for the EPC project and also Construction Support, Management and As-built documentation",
      },
    ],
  },

  {
    title: "Warri Refinery and Petrochemicals Company Limited",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Computer Simulation and Plant Modeling",
        description:
          "Development of steady-state models for Crude distillation unit, Vacuum distillation unit, Fluidized Catalytic Cracking unit, Naphtha Hydro treating unit, and Catalytic Reformer unit.",
      },
    ],
  },

  {
    title: "NDPHC LIMITED",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },

      {
        title: "Detailed Engineering Design for EPC of the New Egbin Metering Station",
        description:
          "To carry out supply, repair and service of gas equipment for CALABAR power station at Odukpani, Cross River state, to improve and optimize its working condition.",
      },
      {
        title: "Supply, Repair, and Service of Gas Equipment in Geregu Power Station",
        description:
          "To carry out supply, repair and service of gas equipment for GEREGU power station at Ajaokuta, Kogi state as part of efforts to improve and optimize its working condition.",
      },
    ],
  },

  {
    title: "NEPL",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },

      {
        title:
          "Update of Hazardous Area Classification and As-Built Drawings of Facilities in OML-26",
        description:
          "The Nigerian National Petroleum Corporation (NNPC) and E&P Limited (As operators of OML 26) in joint venture with NEPL and FHN 26 Limited intend to carry-out update of hazardous area classification and as-built drawings of facilities in OML 26. This entails reviews and back drafting of existing drawings, deployment of Laser scanner (2D/3D technology) and generation of new as-built documentations. To this end Weam and company limited was contracted to do the aforementioned SOW.",
      },
    ],
  },
];

export default SimulationStudiesService;
