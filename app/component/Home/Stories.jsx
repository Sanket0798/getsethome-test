"use client";
import React, { useState, useCallback, useMemo } from "react";
import { storiesComment } from "@/app/utils/Data";
import {
  LeftArrowSVG,
  RightArrowSVG,
  StoriesSVG,
} from "@/public/assets/HomePage/Svg";

const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = useMemo(() => storiesComment.length, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const slideContent = useMemo(
    () =>
      storiesComment.map((value, index) => (
        <div
          key={index}
          className="w-[302px] h-[250px] bg-white p-[20px] rounded-[10px] flex flex-col items-start justify-between"
        >
          <p className="text-[14px] text-[#555] leading-[22px]">
            {value.comment}
          </p>
          <div className="h-[40px]">
            <strong className="text-[14px] font-extrabold">
              {value.owner},
            </strong>
            <p className="text-[#777777] text-[13px] h-[18px]">
              {value.designation}
            </p>
          </div>
        </div>
      )),
    []
  );

  return (
    <section className="w-auto flex flex-row h-[450px] bg-gradient-to-r from-gradient-purple-1 via-gradient-purple-3 to-gradient-purple-5 py-[100px]">
      <div className="relative bottom-[60px] pl-[40px]">
        <StoriesSVG />
        <h2 className="text-[25px] text-white uppercase leading-[35px] font-extrabold w-[434px]">
          Stories from those <br />
          who{" "}
          <span className="text-[30px] text-[#78EDEE] font-extrabold">
            Love Us!
          </span>
        </h2>
      </div>

      <div className="relative w-full h-[250px] overflow-hidden">
        <div
          className="flex gap-x-[15px] transition-transform duration-300 ease-in-out w-[5000px]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slideContent}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 left-2 w-[40px] h-[40px] transform -translate-y-1/2 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <LeftArrowSVG />
        </button>
        <button
          onClick={handleNext}
          className={`absolute top-1/2 right-2 w-[40px] h-[40px] transform -translate-y-1/2 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            currentSlide === totalSlides - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
        >
          <RightArrowSVG />
        </button>
      </div>
    </section>
  );
};

export default Stories;
