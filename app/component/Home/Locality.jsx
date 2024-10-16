"use client";
import React, { useState } from "react";
import Image from "next/image";

const locations = [
  {
    title: "ANDHERI WEST",
    rooms: "124 Shared Rooms",
    image: "/assets/HomePage/Locality/Andheri.jpg",
  },
  {
    title: "SANTACRUZ EAST",
    rooms: "68 Shared Rooms",
    image: "/assets/HomePage/Locality/Santacruz.jpg",
  },
  {
    title: "BKC",
    rooms: "13 Shared Rooms",
    image: "/assets/HomePage/Locality/BKC.jpg",
  },
  {
    title: "JUHU",
    rooms: "13 Shared Rooms",
    image: "/assets/HomePage/Locality/Juhu.jpg",
  },
];

const Locality = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === locations.length - 1 ? prev : prev + 1
    );
  };

  return (
    <section className="w-1200 mx-auto h-[442px] flex flex-col items-center py-[60px]">
      <h2 className="font-extrabold text-[42px] text-black">
        Which area is your new <span className="text-[#6b31e7]">home</span>?
      </h2>

      <div className="relative rounded-[30px] w-full h-[232px] overflow-hidden mt-[20px]">
        <div
          className="flex gap-x-[20px] transition-transform duration-300 ease-in-out "
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {locations.map((location, index) => (
            // <div key={index} className="w-[380px] flex-shrink-0">
            //   <Image
            //     src={location.image}
            //     alt={location.title}
            //     width={380}
            //     height={230}
            //     className="object-cover rounded-[30px]"
            //   />
            //   <div className="absolute top-0 text-center w-[380px] h-[230px] flex flex-col justify-between pt-[35px] px-[20px] pb-[20px]">
            //     <h2 className="text-[45px]  font-extrabold">{location.title}</h2>
            //     <p className="text-md">{location.rooms}</p>
            //   </div>
            // </div>

            <div key={index} className="w-[380px] h-[230px] flex-shrink-0 relative rounded-[30px] overflow-hidden">
            <Image
              src={location.image}
              alt={location.title}
              width={380}
              height={230}
              className="object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-white bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-between pt-[35px] px-[20px] pb-[20px]">
              <h2 className="text-[45px] font-extrabold text-transparent bg-clip-text bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${location.image})`,
                  }}>
                {location.title}
              </h2>
              <p className="text-md text-black">{location.rooms}</p>
            </div>
          </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 left-0 z-10 transform -translate-y-1/2 w-[40px] h-[40px] p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentSlide === 0}
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 w-[40px] h-[40px] p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            currentSlide === locations.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentSlide === locations.length - 1}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Locality;
