"use client";
import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { locations } from "@/app/utils/Data";

const Locality = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(locations.length - 1, prev + 1));
  }, []);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === locations.length - 1;

  const locationCards = useMemo(
    () =>
      locations.map((location, index) => (
        <div
          key={location.title}
          className="w-[380px] h-[230px] flex-shrink-0 relative rounded-[30px] overflow-hidden group"
        >
          <Image
            src={location.image}
            alt={location.title}
            width={380}
            height={230}
            className="object-cover absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-white bg-opacity-90" />
          <div className="absolute inset-0 flex flex-col justify-between pt-[35px] px-[20px] pb-[20px]">
            <h2
              className="text-[45px] font-extrabold text-transparent bg-clip-text bg-center bg-cover h-[90px] leading-[42px] text-center transition-all duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${location.image})`,
                backgroundSize: "100% 100%",
              }}
            >
              {location.title}
            </h2>
            <p className="text-[16px] font-extrabold text-center text-[rgba(0,0,0,.8)]">
              {location.rooms}
            </p>
          </div>
        </div>
      )),
    []
  );

  return (
    <section className="w-[360px] md:w-[768px] lg:w-1200 mx-auto h-[442px] flex flex-col items-center py-[60px] px-[10px] md:px-[20px] lg:px-0">
      <h2 className="font-extrabold text-[35px] md:text-[42px] text-black leading-[40px] md:leading-0 text-center ">
        Which area is your new <span className="text-[#6b31e7]">home</span>?
      </h2>

      <div className="relative rounded-[30px] w-full h-[232px] overflow-hidden mt-[20px]">
        <div
          className="flex gap-x-[20px] transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {locationCards}
        </div>

        <button
          onClick={handlePrev}
          className={`absolute top-1/2 left-0 z-10 transform -translate-y-1/2 w-[40px] h-[40px] p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isFirstSlide}
          aria-label="Previous slide"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className={`absolute top-1/2 right-5 transform -translate-y-1/2 w-[40px] h-[40px] p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            isLastSlide ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLastSlide}
          aria-label="Next slide"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Locality;
