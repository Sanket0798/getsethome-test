"use client";
import React, { useState } from "react";
import Image from "next/image";

export const LifestyleCard = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[176px] h-[264px] rounded-lg overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="h-[264px] w-auto object-cover rounded-[10px]"
        width={176}
        height={264}
        src={image}
        alt={title}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <h2 className="absolute top-4 left-4 text-white text-[16px] leading-[14px] font-extrabold">
        {title}
      </h2>
      <div
        className={`absolute inset-0 bg-black bg-opacity-75 text-white transition-all duration-300 ease-in-out transform ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between p-[15px]">
          <div>
            <h3 className="text-[16px] leading-[14px] font-extrabold mb-4">
              {title}
            </h3>
            <p className="mb-4">{description}</p>
          </div>
          <button className="text-white ring-1 ring-white text-[12px] w-[125px] h-[34px] bg-transparent rounded-full duration-200 self-center">
            EXPLORE HOMES
          </button>
        </div>
      </div>
    </div>
  );
};
