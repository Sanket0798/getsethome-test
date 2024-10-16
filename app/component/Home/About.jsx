"use client";
import React from "react";
import Image from "next/image";
import { aboutContent } from "@/app/utils/Data";

const About = () => {
  return (
    <div className="w-[360px] md:w-[768px] lg:w-full h-[810px] md:h-[744px] bg-[#EDDBDB] py-[20px] md:py-[60px] px-[10px] md:px-[20px] lg:px-0">
      <section className="w-1200 mx-auto flex flex-col md:flex-row items-start justify-between h-full">
        <div className="flex flex-col items-start">
          <p className="text-black font-extrabold md:text-[42px] w-[340px] md:w-[575px] md:leading-[50px] text-[35px] leading-[40px]">
            Reduce your rental expense with{" "}
            <span className="text-[#6B31E7]">GetSetHome</span>
          </p>
          {aboutContent.map(({ title, desc }, index) => (
            <div key={index} className="w-[575px]">
              <h4 className="text-[20px] md:text-[24px] text-black font-extrabold mt-[40px] mb-[15px] h-[28px]">
                {title}
              </h4>
              <p className="text-[12px] md:text-[14px] text-[#555] leading-[25px] w-[340px] md:w-full">{desc}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-row w-[575px] h-full">
          <div className="relative w-full h-screen">
            {[
              {
                src: "/assets/HomePage/About/budget-accommodations.png",
                alt: "Person sitting",
                className: "absolute top-14 left-[100px] w-1/4",
              },
              {
                src: "/assets/HomePage/About/no-brokerage-homes.png",
                alt: "Person walking",
                className: "absolute right-[5px] w-[282px] h-[307px]",
              },
              {
                src: "/assets/HomePage/About/all-inclusive-rent.png",
                alt: "Person holding smartphone",
                className: "relative top-[300px] w-[282px] h-[260px]",
              },
              {
                src: "/assets/HomePage/About/rental.png",
                alt: "Person with braided hair",
                className: "relative left-[370px] top-[100px] w-1/4",
              },
            ].map((image, index) => (
              <div
                key={index}
                className={`${image.className} aspect-square rounded-full overflow-hidden`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
