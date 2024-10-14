import React from "react";
import Image from "next/image";
import { DownArrowSVG, NavbarMenuSVG, NavbarPhoneSVG } from "@/public/assets/HomePage/Svg";

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-[75px] items-center flex shadow-[0_3px_10px_0_rgba(0,0,0,.05)]">
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
            <p className="text-[#555555] hover:text-[#6b31e7] text-[14px] font-extrabold">
              {" "}
              8080 900 300{" "}
            </p>
          </button>
          <button className="flex items-center justify-between gap-x-[5px] w-[72px] h-[18px] font-extrabold">
            <p className="text-[14px] text-[#555]">Mumbai</p>
            <DownArrowSVG />
          </button>
          <p className="hover:text-[#6b31e7] text-[14px] font-extrabold cursor-pointer text-[#555]">
            List Your Property
          </p>
          <button className="flex items-center justify-center uppercase text-white bg-gradient-to-r from-[#981fc9] to-[#4522b3] w-[72px] h-[35px] rounded-full text-[12px] font-extrabold hover:shadow-[0_18px_40px_-12px_rgba(107,49,231,.35)]">
            Sign In
          </button>
          <NavbarMenuSVG/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
