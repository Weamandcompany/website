"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { Bounce } from "react-awesome-reveal";

interface ProjectTabProps {
  isActive: boolean;
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
  heading: string;
  setSelectedImage: React.Dispatch<
    React.SetStateAction<{ original: string; thumbnail: string }[]>
  >;
  images: { original: string; thumbnail: string }[];
}

const ProjectTab: React.FC<ProjectTabProps> = ({
  isActive,
  title,
  description,
  imageSrc,
  onClick,
  heading,
  setSelectedImage,
  images,
}) => {
  return (
    <>
      <div
        className={`${
          isActive ? "bg-white lg:my-12 my-6" : "bg-[#161C49] mb-4"
        } lg:p-10 p-6 rounded-[8px] font-poppins cursor-pointer`}
        onClick={onClick}
      >
        <div className="flex lg:gap-5 gap-8 items-center justify-between relative">
          <div>
            <h6 className="text-[#E47B0E] lg:text-[14px] text-[13.5px] mb-2">
              {isActive ? heading : title}
            </h6>
            <p
              className={`text-white  text-[19.5px] font[600] ${
                isActive ? "hidden" : ""
              }`}
            >
              {heading}
            </p>

            <div
              className={`text-[#61657E] lg:text-[13px] text-xs lg:w-[45%] ${
                isActive ? "" : "hidden"
              }`}
            >
              <Bounce cascade triggerOnce={true}>
                <div className="lg:hidden block">
                  <Image
                    src={imageSrc}
                    className="relative rounded-lg my-3"
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                    }}
                    alt="projectImage"
                    onClick={() => setSelectedImage(images)}
                  />
                </div>
              </Bounce>
              {description}
            </div>
            {isActive && (
              <Bounce cascade triggerOnce={true}>
                <div className="lg:block hidden">
                  <Image
                    src={imageSrc}
                    className="absolute lg:top-[-150px] rounded-lg right-[15%]"
                    width={0}
                    height={0}
                    style={{
                      width: "37%",
                      height: "210px",
                      objectFit: "cover",
                    }}
                    alt="projectImage"
                    onClick={() => setSelectedImage(images)}
                  />
                </div>
              </Bounce>
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
    </>
  );
};

export default ProjectTab;
