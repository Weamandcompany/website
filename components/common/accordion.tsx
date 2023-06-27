import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-[1px] border-[#EFEFEF] mb-4 rounded-[12px] ${
            index === activeIndex ? "bg-white" : "bg-[#F4F4FF]"
          }`}
        >
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div className="font-[500] text-[#0C1239] text-[14px] lg:text-[17px]  text-left mb-0">
              {item.title}
            </div>
            {index === activeIndex ? (
              <Icon
                icon={"ic:baseline-keyboard-arrow-down"}
                className=" text-[#111111]"
                height={25}
              />
            ) : (
              <Icon
                icon={"iconamoon:arrow-right-2-duotone"}
                className=" text-[#111111]"
                height={25}
              />
            )}
          </div>
          {index === activeIndex && (
            <div className="p-4 pt-0 font-nunito font-[400] text-[#61657E] lg:text-[13.5px] text-[12px] leading-6 transition-all duration-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
