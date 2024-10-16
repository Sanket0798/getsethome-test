"use client";
import React from "react";
import Image from "next/image";
import { HeroItems } from "@/app/utils/Data";
import { GradientButton } from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="bg-no-repeat bg-hero w-full bg-cover bg-center h-[690px]">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-between h-full">
          <h1 className="font-extrabold text-[42px] text-black text-center leading-[50px] mt-[40px]">
            Student Accommodation, <br />
            Near your College Location
          </h1>
          <div className="w-full h-[508px] flex items-end justify-between">
            <Image
              src="/assets/HomePage/HeroSection/Img5.png"
              alt="Student accommodation"
              width={504}
              height={495}
              className="object-cover z-10"
              priority
            />
            <div className="flex flex-col items-start gap-y-[20px] w-[600px] h-full">
              {HeroItems.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-row items-center justify-between gap-x-[10px]"
                >
                  <div className="w-[80px] h-[80px] bg-[#DDDDDD] rounded-full flex items-center justify-center">
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-[50px]">
                    <h2 className="font-extrabold text-[18px] uppercase">
                      {value.title}
                    </h2>
                    <p className="font-semibold text-[14px] text-[#555]">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-full flex justify-end mt-[20px]">
                <GradientButton
                  text="Explore Homes"
                  width="172px"
                  height="48px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
