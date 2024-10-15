import React from "react";
import Image from "next/image";
import {
  FacebookSVG,
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

const Footer = () => {
  return (
    <footer className="w-full h-[755px] bg-[#F9F9F9] flex flex-col items-center">
      <div className="w-full h-[240px] py-[20px] bg-[#F1F1F1]"></div>

      <div className="flex items-center space-x-[30px] w-full justify-center h-[110px]">
        <div className=" bg-[#CCCCCC] w-full h-[1px]"></div>
        <Image
          width={140}
          height={57}
          alt=""
          src="/assets/HomePage/Footer/logo.jpg"
        />
        <div className=" bg-[#CCCCCC] w-full h-[1px]"></div>
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
            <li className="p-[10px] font-extrabold text-[#555555] text-[14px]">
              {value}
            </li>
          </ul>
        ))}
      </div>

      <div className="flex justify-center items-center gap-x-[12px] mt-[30px]">
        {socialMediaIcons.map((value, index) => (
          <div
            key={index}
            className="w-[45px] h-[45px] border-2 border-[#CCCCCC] rounded-full ring-2 ring-[#CCCCCC] flex items-center justify-center"
          >{value.svg}</div>
        ))}
      </div>

      <div className="flex gap-x-[15px] mt-[30px]">
        {footerLink2.map((value, index) => (
          <ul key={index}>
            <li className="p-[10px] font-extrabold text-[#555555] text-[14px]">
              {value}
            </li>
          </ul>
        ))}
      </div>

      <p className="text-[14px] text-[#555] flex">Made with <span><LoveSVG/></span> by <strong className="font-extrabold">Sanket Rathod</strong></p>
    </footer>
  );
};

export default Footer;
