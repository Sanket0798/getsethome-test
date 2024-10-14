"use client";
import React from "react";
import Image from "next/image";
import { HeroItems } from "@/app/utils/Data";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="bg-no-repeat bg-hero w-full bg-cover bg-center h-[690px]">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-between h-full">
          <p className="font-extrabold text-[42px] text-black text-center leading-[50px] mt-[40px]">
            Student Accommodation, <br />
            Near your College Location
          </p>
          <div className="w-full h-[508px] flex items-end justify-between">
            <Image
              src="/assets/HomePage/HeroSection/Img5.png"
              alt=""
              width={504}
              height={495}
              className="object-cover z-10"
            />
            <div className="flex flex-col items-start gap-y-[20px] w-[600px] h-full">
              {HeroItems.map((value, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between gap-x-[10px]"
                  >
                    <div className="w-[80px] h-[80px] bg-[#DDDDDD] rounded-full flex item justify-center">
                      <Image
                        src={value.image}
                        alt="IMG"
                        width={60}
                        height={0}
                        className="object-contain h-[80px]"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-between h-[50px]">
                      <h4 className="font-extrabold text-[18px] uppercase">
                        {value.title}
                      </h4>
                      <p className="font-semibold text-[14px] text-[#555]">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </>
              ))}
              <div className="w-full flex justify-end mt-[20px]">
                <button className="flex items-center justify-center uppercase text-white bg-gradient-to-r from-[#981fc9] to-[#4522b3] w-[172px] h-[48px] rounded-full text-[12px] font-extrabold hover:shadow-[0_18px_40px_-12px_rgba(107,49,231,.35)]">
                  Explore Homes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
