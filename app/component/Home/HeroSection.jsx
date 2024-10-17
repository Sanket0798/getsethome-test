"use client";
import React from "react";
import Image from "next/image";
import { HeroItems } from "@/app/utils/Data";
import { GradientButton } from "../ui/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/VerticalSlider.module.css";
import { useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: handleBeforeChange,
  };

  const slideTitles = [
    <>
      Student Accommodation, <br />
      Near your College Location
    </>,
    <>
      Stay in a Shared Space, <br />
      Near your Workplace
    </>,
    <>
      Renting Home, <br />
      made simple
    </>,
    <>
      Co-Living place, <br />
      that gives you your space
    </>,
  ];

  return (
    <div className="relative">
      <div className="bg-no-repeat bg-hero w-full bg-cover bg-center h-[690px]">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-between h-full">
          <h1 className="font-extrabold text-[35px] md:text-[42px] text-black text-center leading-[40px] md:leading-[50px] mt-[40px]">
            {slideTitles[currentSlide]}
          </h1>
          <div className="w-full h-auto md:h-[508px] flex md:items-center md:justify-center lg:items-end lg:justify-between">
            <div className={styles.sliderWrapper}>
              <Slider {...settings}>
                {[
                  "/assets/HomePage/HeroSection/Img5.png",
                  "/assets/HomePage/HeroSection/Img6.png",
                  "/assets/HomePage/HeroSection/Img7.png",
                  "/assets/HomePage/HeroSection/Img8.png",
                ].map((src, index) => (
                  <div className={styles.slide} key={index}>
                    <Image
                      src={src}
                      alt="Student accommodation"
                      width={504}
                      height={495}
                      priority
                      className="w-[390px] md:w-full h-auto"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="hidden lg:flex flex-col items-start gap-y-[20px] w-[600px] h-full">
              {HeroItems.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-row items-center justify-between gap-x-[10px]"
                >
                  <div className="w-[80px] h-[80px] bg-[#DDDDDD] rounded-full flex items-center justify-center">
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-[50px]">
                    <h2 className="font-extrabold text-[18px] uppercase">
                      {value.title}
                    </h2>
                    <p className="font-semibold text-[14px] text-[#555]">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-full flex justify-end mt-[20px]">
                <GradientButton
                  text="Explore Homes"
                  width="172px"
                  height="48px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
