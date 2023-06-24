"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
  ];
  return (
    <div className="fixed lg:block hidden top-2 z-[100] w-full">
      <ul className="w-[60%] bg-white mx-auto rounded-[20px] overflow-hidden p-5 flex justify-between items-center">
        <Image src={"logo.svg"} height={35.11} width={48.5} alt="logo" />
        <div className="flex items-center gap-10 text-[#0C1239] font-[600] text-sm font-roboto">
          {navLinks?.map((item, i) => (
            <li key={i}>
              <Link
                href={item?.link}
                className={`${
                  pathname === item?.link
                    ? "px-6 border-b-[1px] border-[#E47B0E] pb-1 "
                    : "px-6"
                }`}
              >
                {item?.name}
              </Link>
            </li>
          ))}
        </div>
        <li>
          <a
            href="#"
            className="bg-[#E47B0E] text-white rounded-[3px] py-3 px-8 font-[400] text-[13.5px] font-poppins"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
