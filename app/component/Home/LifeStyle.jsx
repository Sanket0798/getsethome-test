"use client";
import React, { useState } from "react";
import { LifestyleCard } from "../ui/LifestyleCard";

const LifeStyle = () => {
  return (
    <section className="w-1200 h-[942px] mx-auto py-[60px]">
      <h2 className="absolute text-[42px] w-[560px] leading-[50px] font-extrabold">
        Discover Homes as unique as your{" "}
        <span className="text-[#6B31E7]">lifestyle</span>
        <br />
        <span className="text-[20px] text-[#555555] font-medium">
          Explore curated homes for
        </span>
      </h2>
      <div className="grid grid-cols-6 gap-x-[15px] h-full">
        <div className="w-full h-[685px] flex items-end justify-center">
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img8.jpg"
            title="Spiritual Wellness Seekers"
            description="Discover homes near spiritual wellness centers to immerse yourself in their tranquil aura."
          />
        </div>

        <div className="w-full h-full items-center justify-center flex">
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img10.jpg"
            title="Scholars"
            description="Want to stay near your college? Explore our residences near colleges and universities."
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-[15px]">
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img2.jpg"
            title="Shopaholics"
            description="Tick Tock, time to Shop? Stay near the most happening Shopping streets, markets and malls"
          />
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img11.jpg"
            title="Corporate Warriors"
            description="Walk to work with our homes located around popular corporate parks."
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-[15px]">
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img3.jpg"
            title="Beach Lovers"
            description="Love a peaceful walk on the beach? Explore our homes around beaches."
          />
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img7.jpg"
            title="Party Animals"
            description="Stay in a locality that’s always buzzing till the wee hours with pubs and clubs."
          />
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img6.jpg"
            title="Fitness Freaks"
            description="Live near local parks so you can walk your way to a healthier life."
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-[15px]">
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img1.jpg"
            title="Movie Buffs"
            description="Love Movies? Stay near all the action (and drama) with homes near popular Cinemas."
          />
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img5.jpg"
            title="Food Connoisseurs"
            description="Fancy a good meal? Stay close to happening upscale restaurants."
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-[15px]">
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img4.jpg"
            title="Street Food lovers"
            description="Always in the mood for a quick bite? Live in homes just steps away from street food and local markets."
          />
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img9.jpg"
            title="Daily Commuters"
            description="Always pressed for time? Live near public transportation to reclaim more of your day to enjoy."
          />
          <LifestyleCard
            image="/assets/HomePage/LifeStyle/Img12.jpg"
            title="Caregivers"
            description="Discover homes near hospitals to ensure convenient access and support."
          />
        </div>
      </div>
    </section>
  );
};

export default LifeStyle;
