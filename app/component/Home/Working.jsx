"use client";
import React from "react";
import Image from "next/image";
import { workingContent } from "@/app/utils/Data";

const Working = () => {
  return (
    <section className="w-1200 mx-auto h-[644px] py-[60px]">
      <div className="flex flex-row w-full h-full justify-between">
        <Image
          width={587}
          height={538}
          alt=""
          src="/assets/HomePage/Working/Background.png"
        />

        <div className="w-[587px] h-[524px] flex flex-col items-start">
          <h2 className="font-extrabold text-[42px] text-black">
            How it <span className="text-[#6B31E7]">works</span>?
          </h2>
          {workingContent.map((value, index) => (
            <>
              <div key={index} className="w-[587px]">
                <h3 className="text-[24px] text-black font-extrabold mt-[33px] mb-[15px] h-[28px]">
                  <span className="text-[24px] text-[#555] font-medium">
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
