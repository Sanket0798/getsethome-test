import React from "react";
import Image from "next/image";
import { DownArrowSVG, NavbarPhoneSVG } from "@/public/assets/HomePage/Svg";

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-[75px] items-center flex">
      <div className="w-1200 mx-auto flex justify-between items-center">
        <Image
          src="/assets/HomePage/Navbar/Logo.png"
          width={150}
          height={48}
          alt="Logo"
          priority
        />
        <div className="flex items-center justify-end gap-x-[18px]">
          <button className="flex items-center justify-center w-[137px] h-[40px] rounded-full bg-[rgba(107,49,231,.1)] gap-x-[5px]">
            <NavbarPhoneSVG />
            <p className="text-[#555555] hover:text-[#6b31e7] text-[14px] font-semibold">
              {" "}
              8080 900 300{" "}
            </p>
          </button>
          <button className="flex items-center justify-between gap-x-[5px] w-[72px] h-[18px] font-bold">
            <p className="text-[14px] text-[#555]">Mumbai</p>
            <DownArrowSVG />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
