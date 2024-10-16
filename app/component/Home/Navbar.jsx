"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  DownArrowSVG,
  NavbarMenuSVG,
  NavbarPhoneSVG,
} from "@/public/assets/HomePage/Svg";
import { GradientButton } from "../ui/Button";

const Navbar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <nav className="bg-white w-full h-[75px] flex items-center shadow-[0_3px_10px_0_rgba(0,0,0,.05)]">
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
              8080 900 300
            </p>
          </button>
          <button className="flex items-center justify-between gap-x-[5px] w-[72px] h-[18px] font-extrabold">
            <p className="text-[14px] text-[#555]">Mumbai</p>
            <DownArrowSVG />
          </button>
          <p className="hover:text-[#6b31e7] text-[14px] font-extrabold cursor-pointer text-[#555]">
            List Your Property
          </p>
          <GradientButton text="Sign Up" width="72px" height="35px" />
          <button onClick={toggleSidePanel} aria-label="Open menu">
            <NavbarMenuSVG />
          </button>
        </div>

        {/* Side Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidePanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <button
              onClick={toggleSidePanel}
              className="mb-4 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
