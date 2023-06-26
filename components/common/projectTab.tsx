"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

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
          <h6 className="text-[#E47B0E] lg:text-[18px] text-[13.5px] mb-2">
            {isActive ? heading : title}
          </h6>
          <p
            className={`text-white  text-[19.5px] font[600] ${
              isActive ? "hidden" : ""
            }`}
          >
            {heading}
          </p>
          <p
            className={`text-[#61657E] lg:text-sm text-xs lg:w-[45%] ${
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

export default ProjectTab;
