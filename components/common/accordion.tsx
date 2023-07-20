import React, { ReactElement, useState } from "react";
import { Icon } from "@iconify/react";

interface AccordionItem {
  title: string;
  content: string | ReactElement | { title: string; description: string | ReactElement }[];
}

interface AccordionProps {
  items: AccordionItem[];
  defaultIndex?: number;
  noclick?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultIndex, noclick = false }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultIndex ?? null);

  const handleClick = (index: number) => {
    if (!noclick) {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-[1px] border-[#EFEFEF] mb-4 rounded-[12px] ${
            index === activeIndex ? "bg-white" : "bg-[#F4F4FF]"
          }`}>
          <div
            className="flex items-center justify-between p-4 lg:gap-10 cursor-pointer"
            onClick={() => handleClick(index)}>
            <div className="font-[500] text-[#0C1239] text-[14px] lg:text-[17px]  text-left mb-0">
              {item.title}
            </div>
            <div>
              {index === activeIndex ? (
                <Icon
                  icon={"ic:baseline-keyboard-arrow-down"}
                  className=" text-[#111111]"
                  height={25}
                />
              ) : (
                !noclick && (
                  <Icon
                    icon={"iconamoon:arrow-right-2-duotone"}
                    className=" text-[#111111]"
                    height={25}
                  />
                )
              )}
            </div>
          </div>
          {index === activeIndex && (
            <div className="p-4 pt-0 font-nunito font-[400] text-[#61657E] lg:text-[13.5px] text-[12px] leading-6 transition-all duration-200">
              {Array.isArray(item.content) ? (
                <>
                  <table width="100%" className="w-full mt-5">
                    <thead className="bg-wdark text-white text-left">
                      <tr>
                        <th className="px-5 py-4">{item.content[0].title}</th>
                        <th className="px-5 py-4">{item.content[0].description}</th>
                      </tr>
                    </thead>
                    <tbody className="odd:bg-gray-50 even:bg-neutral-50">
                      {item.content.map(
                        (item, index) =>
                          index !== 0 && (
                            <tr key={index}>
                              <td className="px-5 py-4">{item.title}</td>
                              <td className="px-5 py-4">{item.description}</td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </>
              ) : (
                item.content
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
