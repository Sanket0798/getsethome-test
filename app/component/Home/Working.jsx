"use client";
import React from "react";
import Image from "next/image";

const workingContent = [
  {
    number: "01.",
    title: "Rent a House close to your office/college",
    desc: "We have accommodations spread across the city, especially close to railway or metro stations OR close proximity to popular offices and college, so you are always close to a GetSetHome. So explore and select a home that suits you.",
  },
  {
    number: "02.",
    title: "Free Assisted Visit",
    desc: "Once you shortlist you can visit a property before booking your stay. We provide guided visits to our properties to ensure it ticks all boxes of your Wishlist so you can book with full trust and confidence.",
  },
  {
    number: "03.",
    title: "Get, Set, Move-in",
    desc: "Book your preferred No brokerage home by paying just the token amount. The team will help you with the rest of KYC and balance payable so you can enjoy a seamless move-in to a GetSetHome property.",
  },
];

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
