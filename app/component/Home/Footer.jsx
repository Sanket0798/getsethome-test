"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FacebookSVG,
  FooterLogoSVG,
  InstagramSVG,
  LinkedInSVG,
  LoveSVG,
  MaxSVG,
  PinterestSVG,
  YoutubeSVG,
} from "@/public/assets/HomePage/Svg";
import Link from "next/link";

const footerLink1 = [
  "About Us",
  "Contact Us",
  "Mobile",
  "Home Owner",
  "Home Seekers",
  "Student Stay",
  "Help",
];

const footerLink2 = [
  "Careers",
  "Press",
  "Blog",
  "Offers",
  "Tenancy Policy",
  "Privacy Policy",
  "T&C's",
  "Site Map",
];

const socialMediaIcons = [
  { svg: <YoutubeSVG /> },
  { svg: <FacebookSVG /> },
  { svg: <LinkedInSVG /> },
  { svg: <InstagramSVG /> },
  { svg: <PinterestSVG /> },
  { svg: <MaxSVG /> },
];

const tabs = [
  { name: "MUMBAI" },
  { name: "PUNE" },
  { name: "CHENNAI" },
  { name: "INDORE" },
  { name: "NAVI MUMBAI" },
];

const content = {
  MUMBAI: (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat on rent in Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Andheri West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Andheri East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Powai
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Vile Parle West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Santacruz East
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Andheri West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Andheri East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Powai
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Vile Parle West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Santacruz East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Vakola
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Andheri West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Andheri East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Powai
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Vile Parle West
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Santacruz East
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Vakola
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  PUNE: (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat on rent in Pune
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Kharadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Wakad
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Baner
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Hinjewadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Vimannagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Magarpatta
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Kalyani Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat on rent in Koregaon Park
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Pune
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Hinjewadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Vimannagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Baner
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Kharadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Wakad
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Magarpatta
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Kalyani Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Koregaon Park
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Yerwada
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Model Colony
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Senapati Bapat Road
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Pune
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Hinjewadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Vimannagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Baner
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Kharadi
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Wakad
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Magarpatta
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Kalyani Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Shivaji Nagar
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Koregaon Park
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Yerwada
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Model Colony
            </li>
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Senapati Bapat Road
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  CHENNAI: (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat For rent in Chennai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat for Rent in Ponneri
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Chennai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Chennai
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Ponneri
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Ponneri
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  INDORE: (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat For rent in Indore
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat for Rent in Sukhlia
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Indore
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Sukhlia
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Indore
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Sukhlia
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
  "NAVI MUMBAI": (
    <>
      <div className="flex justify-between mt-[10px]">
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            Flat For rent in Navi Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              Flat for Rent in Airoli
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            PG in Navi Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              PG in Airoli
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-[12px] text-[#666666] font-extrabold hover:text-[#4a90e2] cursor-pointer py-[5px]">
            No Brokerage Homes in Navi Mumbai
          </h3>
          <ul className="text-[12px] text-[#333333]">
            <li className="hover:text-[#4a90e2] cursor-pointer py-[3px]">
              No Brokerage Homes in Airoli
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
};

const Footer = () => {
  const [activeTab, setActiveTab] = useState("MUMBAI");
  return (
    <footer className="w-full h-auto bg-[#F9F9F9] flex flex-col items-center">
      <div className="w-full h-auto py-[20px] bg-[#F1F1F1]">
        <div className="w-1200 mx-auto">
          {/* Tab Header */}
          <div className="flex gap-x-[20px] border-b-2 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`text-[13px] ${
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

          {/* Tab Content */}
          <div className="">{content[activeTab]}</div>
        </div>
      </div>

      <div className="flex items-center  w-full justify-center h-[110px]">
        <div className=" bg-[#CCCCCC] w-[700px] h-[1px]"></div>
        <FooterLogoSVG />
        <div className=" bg-[#CCCCCC] w-[700px] h-[1px]"></div>
      </div>

      <p className="w-[1100px] h-[120px] text-[#555555] text-[14px] leading-[24px] text-center">
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

      <div className="flex gap-x-[15px] mt-[30px]">
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

      <div className="flex gap-x-[15px] mt-[30px]">
        {footerLink2.map((value, index) => (
          <ul key={index}>
            <li className="p-[10px] font-extrabold text-[#555555] text-[14px] cursor-pointer">
              {value}
            </li>
          </ul>
        ))}
      </div>

      <p className="text-[14px] text-[#555] flex items-center w-[1100px] mx-auto justify-end mt-[30px]">
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
