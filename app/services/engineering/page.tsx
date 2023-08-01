"use client";

import React from "react";
import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ServiceSidebar from "@/components/common/serviceSidebar";
import Accordion from "@/components/common/accordion";
import { engineeringAccordions } from "@/utils/constants";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const EngineeringService = () => {
  return (
    <PageLayout>
      <div className="lg:mt-[7.5rem]  lg:pt-0 pt-[4.5rem]  lg:flex lg:gap-20 gap-6 lg:px-32 px-5  mb-8 grid">
        <div className="lg:w-[68%] font-roboto order-2 lg:order-1">
          <Image
            src={"/images/enginnering1.svg"}
            className="relative rounded-lg mb-5 lg:h-[350px] h-[100px]"
            width={0}
            height={0}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
            alt="projectImage"
          />
          <Slide cascade triggerOnce={true}>
            <h6 className="text-[#1C1C1C] lg:text-[24px] text-[20px] font-[600] lg:mb-3 mb-1">
              Transforming Ideas into Reality
            </h6>
            <p className="text-[#61657E] lg:leading-9 leading-7 lg:text-[16px] text-sm">
              We have an in-house multi-disciplined engineering team with an average of 25 years
              industry experience, and our engineering strength covers Feasibility studies,
              Conceptual Engineering, Front-End Engineering Design, Detailed Engineering Design, 2D
              & 3D As-Built Documentation for Greenfield and Brownfield projects of offshore,
              onshore (shallow & deepwater) and subsea facilities.
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
        <h6 className="text-[#1C1C1C] text-[24px] font-[600] mb-4">Our Engineering Process </h6>
        <div className="grid lg:grid-cols-2 gap-12 ">
          <Slide direction="left" cascade triggerOnce={true}>
            <Accordion noclick={true} items={engineeringAccordions} />
          </Slide>
          <Zoom triggerOnce={true}>
            <Image
              src={"/images/enginnering2.svg"}
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
          Engineering Projects done for our Clients
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
        title: "Kolocreek Debottlenecking Project",
        description:
          "Debottlenecked facility to reduce system backpressure on surge vessel. Installation of new flare barrel to receive gases from separators.",
      },
      {
        title: "Kolocreek Debottlenecking Project",
        description:
          "Debottlenecked facility to reduce system backpressure on surge vessel. Installation of new flare barrel to receive gases from separators.",
      },
    ],
  },

  {
    title: "Chevron/Titan Energy",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "North Apoi/Funiwa Revamp Project (Conceptual and Front End Engineering Design)",
        description:
          "Carried out capacity check on existing North Apoi and Funiwa processing facilities. Performed sizing of new recommended vessel, air coolers, compressors, slug catchers, pumps, etc. Carried out optimal pipeline sizing and flow scenario for routing of three-phase fluid from North Apoi to Funiwa without production loss.",
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
          "Modelling of various case scenarios to carry out material and energy balance, dynamics check on each vessel. Preparation of the datasheets for all the vessels, line sizing, control valves sizing, and level setting calculation.",
      },
      {
        title: "Ebocha and Oshie flow station upgrade",
        description:
          "Capacity check on some in-plots pipes for conformity and non-conformity with pressure and velocity drop requirements. Carried out debottlenecking strategies under technical and economical consideration. Investigation of hydrate formation at given operating conditions and determined the optimum temperature range for hydrate-free operation at a known pressure.",
      },
    ],
  },

  {
    title: "ADDAX",
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
    title: "INDORAMA ELEME PETROCHEMICALS COMPANY LIMITED",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title: "Hydrocarbon Recovery",
        description:
          "Detailed engineering design of Piping layout, Equipment layout, Civil foundation, and Support allocation.",
      },
      {
        title: "As-built Documentation",
        description: "Development of 2D As-built drawings of PP, Olefins, and Power Plants.",
      },
    ],
  },

  {
    title: "NGIC (Subsidiary of NNPC)",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title:
          "Detailed Engineering Design for Rehabilitation/Upgrade of Delta IV Metering Station, Ughelli.",
        description:
          "etailed Engineering Design for rehabilitation and upgrade of process equipment, field instruments, Fire and Gas Systems, Electrical installations, control and security building to a much modern status and also guarantee reliability of operations and security of the facility.",
      },
      {
        title: "Detailed Engineering Design for EPC of the New Egbin Metering Station.",
        description:
          "Provision of FEED verification and Detailed Engineering Design for the New Egbin Metering Station.",
      },
      {
        title:
          "FEED, Detailed Engineering Design, Follow-on Engineering, and As-built documentation for EPC of Pipeline Infrastructure for Gas Supply to Escravos Environs Power Supply Project.",
        description:
          "Provision of FEED and Detailed Engineering for Pipelines, Pressure Reduction, and Metering Systems for the EPC project, and also Construction Support, Management, and As-built documentation.",
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
        title: "Supply, Repair, and Service of Gas Equipment in Calabar Power Station.",
        description:
          "To carry out supply, repair, and service of gas equipment for CALABAR power station at Odukpani, Cross River state, to improve and optimize its working condition.",
      },
      {
        title: "Supply, Repair, and Service of Gas Equipment in Geregu Power Station.",
        description:
          "To carry out supply, repair, and service of gas equipment for GEREGU power station at Ajaokuta, Kogi state, as part of efforts to improve and optimize its working condition.",
      },
    ],
  },

  {
    title: "NEPL/First Hydrocarbon Nigeria Limited",
    content: [
      {
        title: "Project Name",
        description: "Project Description",
      },
      {
        title:
          "Update of Hazardous Area Classification and As-Built Drawings of Facilities in OML-26.",
        description:
          "The Nigerian National Petroleum Corporation (NNPC) and E&P Limited (as operators of OML 26) in joint venture with NEPL and FHN 26 Limited intend to carry out an update of hazardous area classification and as-built drawings of facilities in OML 26. This entails reviews and back drafting of existing drawings, deployment of Laser scanner (2D/3D technology), and generation of new as-built documentations. To this end, Weam and Company Limited was contracted to perform the aforementioned Scope of Work (SOW).",
      },
      {
        title: "Ahia Flow Station Process Study and Design",
        description:
          "Determined the ability of the proposed double-bank flow station to handle an anticipated peak production.",
      },
    ],
  },
];

export default EngineeringService;
