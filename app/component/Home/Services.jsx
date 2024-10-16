import React from "react";
import { servicesContent } from "@/app/utils/Data";

const Services = () => {
  return (
    <section className="w-1200 mx-auto h-[945px] py-[60px]">
      <div className="w-full h-full flex flex-col justify-between">
        <h2 className="text-black font-extrabold text-[42px] leading-[50px] text-center">
          Meet the easier side of <span className="text-[#6B31E7]">living</span>
        </h2>
        <div className="grid grid-cols-3 gap-[20px] justify-between">
          {servicesContent.map((value, index) => (
            <div
              key={index}
              className="w-[380px] h-[370px] bg-[#F9F9F9] rounded-[20px] p-[40px] flex flex-col items-start"
            >
              <div className="flex items-center justify-center bg-white rounded-[20px] w-[80px] h-[80px]">
                {value.logo}
              </div>
              <h3 className="text-[20px] font-extrabold mt-[45px] mb-[20px]">
                {value.title}
              </h3>
              <p className="text-[14px] leading-[25px] text-[#555]">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
