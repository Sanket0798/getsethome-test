"use client"
import React from "react";
import Image from "next/image";

const aboutContent = [
  {
    title: "No Brokerage Homes",
    desc: "Renting a new home can be financially draining with hefty deposits, furnishings, and brokerage fees. That's why we offer a budget-friendly solution with No brokerage homes, a fully furnished accommodation and a minimal deposit of two months' rent.",
  },
  {
    title: "All-Inclusive Rent",
    desc: "GetSetHome rent packages are inclusive of complementary bills like WiFi, DTH, Gas and housekeeping services*. We make it easier for you to plan & budget your living expenses and remove the hassles of managing separate payments or worrying about additional costs.",
  },
  {
    title: "Best Budget Accommodations",
    desc: "GetSetHome homes are fully furnished with a living area, functional kitchen & modern appliances. You can simply move in with your luggage and choose to rent an entire house, a private room or shared rooms like Twin or Triple Sharing. We cater to a wide range of budgets, ensuring there's something suitable for everyone.",
  },
];

const imgGroup1 = [
  {
    id: 1,
    img: "/assets/HomePage/About/budget-accommodations.png",
  },
  {
    id: 1,
    img: "/assets/HomePage/About/all-inclusive-rent.png",
  },
];

const imgGroup2 = [
  {
    id: 1,
    img: "/assets/HomePage/About/no-brokerage-homes.png",
  },
  {
    id: 1,
    img: "/assets/HomePage/About/rental.png",
  },
];

const About = () => {
  return (
    <div className="w-full h-[744px] bg-[#EDDBDB] py-[60px]">
      <section className="w-1200 mx-auto flex flex-row items-start justify-between h-full">
        <div className="flex flex-col items-start">
          <p className="text-black font-extrabold text-[42px] w-[575px] leading-[50px]">
            Reduce your rental expense with{" "}
            <span className="text-[#6B31E7]">GetSetHome</span>
          </p>
          {aboutContent.map((value, index) => (
            <>
              <div key={index} className="w-[575px]">
                <h4 className="text-[24px] text-black font-extrabold mt-[40px] mb-[15px] h-[28px]">
                  {value.title}
                </h4>
                <p className="text-[14px] text-[#555] leading-[25px]">
                  {value.desc}
                </p>
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-row w-[575px] h-full">
          {/* <div className="flex flex-col">{imgGroup1.map((value, index) => (
            <div key={index}>
              <Image
              // width={20}
              // height={20}
              fill
              alt=""
              className="w-auto h-auto object-cover"
              src={value.img}
              />
            </div>
          ))}</div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
