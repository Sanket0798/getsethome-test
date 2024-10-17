"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  CloseSVG,
  DownArrowSVG,
  NavbarMenuSVG,
  NavbarPhoneSVG,
} from "@/public/assets/HomePage/Svg";
import { GradientButton } from "../ui/Button";

const Navbar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const sidePanelRef = useRef(null);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  // Effect to handle clicks outside the side panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidePanelRef.current &&
        !sidePanelRef.current.contains(event.target)
      ) {
        setIsSidePanelOpen(false);
      }
    };

    if (isSidePanelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidePanelOpen]);

  return (
    <nav className="bg-white w-full h-[75px] flex items-center shadow-[0_3px_10px_0_rgba(0,0,0,.05)] px-[10px] md:px-[20px] lg:px-0">
      <div className="w-1200 mx-auto flex justify-between items-center">
        <Image
          src="/assets/HomePage/Navbar/Logo.png"
          width={150}
          height={48}
          alt="Logo"
          priority
        />
        <div className="flex items-center justify-end gap-x-[18px]">
          <button className="hidden lg:flex items-center justify-center w-[137px] h-[40px] rounded-full bg-[rgba(107,49,231,.1)] gap-x-[5px]">
            <NavbarPhoneSVG />
            <p className="text-[#555555] hover:text-[#6b31e7] text-[14px] font-extrabold">
              8080 900 300
            </p>
          </button>
          <button className="hidden md:flex items-center justify-between gap-x-[5px] w-[72px] h-[18px] font-extrabold">
            <p className="text-[14px] text-[#555]">Mumbai</p>
            <DownArrowSVG />
          </button>
          <button className="hover:text-[#6b31e7] text-[14px] font-extrabold cursor-pointer text-[#555] hidden md:flex">
            List Your Property
          </button>
          <GradientButton text="Sign Up" width="72px" height="35px" />
          <button
            onClick={toggleSidePanel}
            aria-label="Open menu"
            className="md:hidden lg:block"
          >
            <NavbarMenuSVG />
          </button>
        </div>

        {/* Side Panel */}
        <div
          ref={sidePanelRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidePanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-[20px] w-auto h-auto">
            <button onClick={toggleSidePanel} className="mb-4 ">
              <div className="w-[200px] flex items-end justify-end">
                <CloseSVG />
              </div>
            </button>
            <ul>
              <li className="my-[15px]">
                <a
                  href="#"
                  className="text-[#7185A1] text-[14px] font-extrabold hover:text-[#6b31e7]"
                >
                  Help center
                </a>
              </li>
              <li className="my-[15px]">
                <a
                  href="#"
                  className="text-[#7185A1] text-[14px] font-extrabold hover:text-[#6b31e7]"
                >
                  Tenancy policy
                </a>
              </li>
              <li className="my-[15px]">
                <a
                  href="#"
                  className="text-[#7185A1] text-[14px] font-extrabold hover:text-[#6b31e7]"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="my-[15px]">
                <a
                  href="#"
                  className="text-[#7185A1] text-[14px] font-extrabold hover:text-[#6b31e7]"
                >
                  Privacy policy
                </a>
              </li>
              <li className="my-[15px]">
                <a
                  href="#"
                  className="text-[#7185A1] text-[14px] font-extrabold hover:text-[#6b31e7]"
                >
                  About us
                </a>
              </li>
              <li className="my-[15px]">
                <a
                  href="#"
                  className="text-[#7185A1] text-[14px] font-extrabold hover:text-[#6b31e7]"
                >
                  Contact us
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
