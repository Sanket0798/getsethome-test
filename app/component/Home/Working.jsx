"use client";
import React from "react";
import Image from "next/image";
import { workingContent } from "@/app/utils/Data";

const Working = () => {
  return (
    <section className="w-auto md:w-[768px] lg:w-1200 mx-auto h-auto lg:h-[644px] py-[20px] md:py-[30px] lg:py-[60px] px-[20px] md:px-[30px] lg:px-0">
      <div className="flex flex-col lg:flex-row gap-y-[20px] md:gap-y-0 w-auto md:w-auto lg:w-full h-full justify-between">
        <Image
          width={587}
          height={538}
          alt=""
          src="/assets/HomePage/Working/Background.png"
          className="w-auto h-auto lg:w-[587px] lg:h-[538px]"
        />

        <div className="w-auto lg:w-[587px] h-auto md:h-[524px] flex flex-col items-start mt-[20px]">
          <h2 className="font-extrabold md:text-[42px] text-black text-[35px]">
            How it <span className="text-[#6B31E7]">works</span>?
          </h2>
          {workingContent.map((value, index) => (
            <>
              <div key={index} className="w-[340px] md:w-full lg:w-[587px]">
                <h3 className="text-[20px] md:text-[24px] text-black font-extrabold mt-[15px] md:mt-[33px] mb-[10px] md:mb-[15px] h-auto md:h-[28px]">
                  <span className="text-[20px] md:text-[24px] text-[#555] font-medium">
                    {value.number}
                  </span>{" "}
                  {value.title}
                </h3>
                <p className="text-[14px] text-[#555] leading-[26px]">
                  {value.desc}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;
