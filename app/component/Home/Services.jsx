import {
  AccommodationSVG,
  ApplianceSVG,
  ConvenienceSVG,
  HouseKeepingSVG,
  SafetySVG,
  ServiceRequestSVG,
} from "@/public/assets/HomePage/Svg";
import React from "react";

const servicesContent = [
  {
    logo: <ApplianceSVG />,
    title: "Modern Appliances",
    desc: "Our homes are equipped with refrigerator, washing machine & other modern appliances so your daily chores don't seem daunting and you can do them at your preferred time.",
  },
  {
    logo: <HouseKeepingSVG />,
    title: "House Keeping",
    desc: "We know a bachelor life can get pretty hectic and sometimes messy too? Our staff ensures daily house cleaning, so you can be welcomed by a clean space after a tiring day.",
  },
  {
    logo: <SafetySVG />,
    title: "Safety First",
    desc: "Our homes are located in gated societies across the city, so you will always find one closer to your office. Unlike PG/hostels, gated societies are much safer so you can live stress-free.",
  },
  {
    logo: <ServiceRequestSVG />,
    title: "Service Requests",
    desc: "We fix everything at home (except broken hearts ;), so you can laze around in your PJs. Just raise a service request from the app and leave it to our maintenance team to fix them.",
  },
  {
    logo: <ConvenienceSVG />,
    title: "Convenience",
    desc: "From online payments to doorstep agreement, we love to spoil you by adding convenience at every stage. We may technically be your landlords but not a pesty one for sure.",
  },
  {
    logo: <AccommodationSVG />,
    title: "Affordable Accommodation",
    desc: "Moving into a new city or a new home can be daunting and financially exhausting. We therefore make it easy on the pocket with Zero brokerage & just 2 months deposit.",
  },
];

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
