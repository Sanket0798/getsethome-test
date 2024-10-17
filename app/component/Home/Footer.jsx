"use client";
import React, { useState, useMemo } from "react";
import { FooterLogoSVG, LoveSVG } from "@/public/assets/HomePage/Svg";
import {
  footerLink1,
  footerLink2,
  socialMediaIcons,
  tabs,
  content,
} from "@/app/utils/Data";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("MUMBAI");

  const activeTabContent = useMemo(() => content[activeTab], [activeTab]);

  return (
    <footer className="w-auto md:w-[768px] lg:w-full bg-[#F9F9F9] flex flex-col items-center">
      <div className="w-full py-5 bg-[#F1F1F1] px-[20px] md:px-0">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-x-5 border-b-2 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`text-xs ${
                  activeTab === tab.name
                    ? "text-purple-600 border-purple-600 border-b-2"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div>{activeTabContent}</div>
        </div>
      </div>

      <div className="flex items-center  w-full justify-center h-[110px]">
        <div className=" bg-[#CCCCCC] w-[100px] lg:w-[700px] h-[1px]"></div>
        <FooterLogoSVG />
        <div className=" bg-[#CCCCCC] w-[100px] lg:w-[700px] h-[1px]"></div>
      </div>

      <p className="w-auto px-[20px] lg:px-0 lg:w-[1100px] h-auto lg:h-[120px] text-[#555555] text-[14px] leading-[24px] text-center">
        GetSetHome offers full homes and shared homes on rent with No Brokerage.
        Our aim is to provide a seamless rental experience with the help of
        technology and new processes to eliminate the hassles of house hunting
        and everyday living. We provide ready to move-in homes with flexible
        stay plans so renting can seem like plug and play whenever you decide to
        move-in or move-out. So if you are new to the city, live a nomad life by
        choice or a working professional where your work takes you places, you
        can always count on us to get you a home that suits your lifestyle and
        budget. Browse through our Curated Homes, take Virtual Tours, view Real
        Photos and Book Online. #LetsGetYouAHome
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-[15px] mt-[30px] px-[20px] md:px-0 w-full h-auto md:h-[41px] md:w-[720px]">
        {footerLink1.map((value, index) => (
          <ul key={index}>
            <li className="p-[10px] font-extrabold text-[#555555] text-[14px] cursor-pointer">
              {value}
            </li>
          </ul>
        ))}
      </div>

      <div className="flex justify-center items-center gap-x-[12px] mt-[30px]">
        {socialMediaIcons.map((value, index) => (
          <div
            key={index}
            className="w-[45px] h-[45px] border-2 border-[#CCCCCC] rounded-full ring-2 ring-[#CCCCCC] flex items-center justify-center hover:border-[#4A90E2] hover:ring-[#4A90E2] transition-colors duration-300 cursor-pointer"
          >
            <div className="opacity-50 hover:opacity-100 transition-colors duration-300">
              <div className="text-[#555555] hover:text-[#4A90E2]">
                {value.svg}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-[15px] mt-[30px] px-[20px] md:px-0 w-full h-auto md:h-[41px] md:w-[725px]">
        {footerLink2.map((value, index) => (
          <ul key={index}>
            <li className="p-[10px] font-extrabold text-[#555555] text-[14px] cursor-pointer">
              {value}
            </li>
          </ul>
        ))}
      </div>

      <p className="text-[14px] text-[#555] flex items-center w-full lg:w-[1100px] mx-auto justify-end mt-[15px] mb-[10px] md:mb-0 md:mt-[30px] px-[20px] lg:px-0">
        Made with{" "}
        <span className="mx-[3px]">
          <LoveSVG />
        </span>{" "}
        by <strong className="font-extrabold ml-[5px]">Sanket Rathod</strong>
      </p>
    </footer>
  );
};

export default Footer;
