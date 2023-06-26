"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { navLinks } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white  relative z-[10000] py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src={"/images/logo.svg"}
                height={18}
                width={30}
                alt="logo"
              />
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-[#E47B0E] hover:text-white hover:bg-[#E47B0E] focus:outline-none focus:bg-[#E47B0E] focus:text-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <Icon icon={"ion:close-outline"} className="h-4 w-4" />
              ) : (
                <Icon icon={"quill:hamburger"} className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="relative  z-[3000]">
        {isOpen && (
          <div className="md:hidden absolute bg-white w-full h-[100vh] flex justify-center">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col gap-8 mt-10">
              {navLinks?.map((item, i) => (
                <div key={i}>
                  <Link
                    href={item?.link}
                    className={`${
                      pathname === item?.link
                        ? "px-6 border-b-[1px] border-[#E47B0E] pb-1 "
                        : "px-6"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item?.name}
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-[#E47B0E] text-white rounded-[3px] py-3 px-8 font-[400] text-[13.5px] font-poppins"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileNavigation;
