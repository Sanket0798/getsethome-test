"use client";
import React, { useState } from "react";

const storiesComment = [
  {
    comment:
      "I stayed there for almost two months. I had a smooth transition in and out with comfortable stay good people to share the house or room which reflects that Getsethome takes a good background check a lot of homes. Felt homely",
    owner: "John Doe",
    designation: "Software Engineer",
  },
  {
    comment:
      "GetSetHome was like a saviour during my internship in Pune. It was extremely difficult to find decent place that would allow for a 2 months stay, but GetSetHome did allow. I dearly missed the services when I moved to Bangalore with other service provider.",
    owner: "Jane Smith",
    designation: "UI/UX Designer",
  },
  {
    comment:
      "The property was 'Home' for us, learned a lot in life after living with so many people over the two years. But sadly had to move out as the next step in growing up and become an individual, settling with my parents and family. You guys are doing a good job!",
    owner: "Michael Johnson",
    designation: "Project Manager",
  },
  {
    comment:
      "One of the best places to stay as a bachelor with GSH properties. Pack your bags, shift and stay tension free. GSH, No other PG accommodations provide such amenities and services, everything is being taken care of.",
    owner: "Emily Davis",
    designation: "Senior Developer",
  },
  {
    comment: "Great job on the presentation! The client is very happy.",
    owner: "Anna Williams",
    designation: "Client Relations Manager",
  },
  {
    comment:
      "The testing phase is almost done. Just a few more cases to cover.",
    owner: "David Brown",
    designation: "QA Engineer",
  },
  {
    comment: "We need to integrate the API before the end of the sprint.",
    owner: "Sophia Taylor",
    designation: "Backend Developer",
  },
  {
    comment:
      "The color palette is a bit off. I'll update it for a more modern look.",
    owner: "Olivia Wilson",
    designation: "Graphic Designer",
  },
  {
    comment:
      "The security review found a potential vulnerability in the authentication flow.",
    owner: "Liam Martinez",
    designation: "Security Analyst",
  },
  {
    comment: "I’ll organize the code review session tomorrow afternoon.",
    owner: "Isabella Anderson",
    designation: "Lead Developer",
  },
  {
    comment:
      "Can we optimize the database queries? Some pages are loading slowly.",
    owner: "Noah Thomas",
    designation: "Database Administrator",
  },
  {
    comment: "The documentation needs to be more detailed for new developers.",
    owner: "Lucas White",
    designation: "Technical Writer",
  },
  {
    comment:
      "I’ll be updating the dashboard with real-time data by the end of the day.",
    owner: "Mia Jackson",
    designation: "Frontend Developer",
  },
  {
    comment: "We received positive feedback from the client after the demo.",
    owner: "James Harris",
    designation: "Business Analyst",
  },
  {
    comment:
      "Please coordinate with the marketing team for the product launch timeline.",
    owner: "Charlotte Clark",
    designation: "Product Manager",
  },
];

const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === storiesComment.length - 1 ? prev : prev + 1
    );
  };

  return (
    <section className="w-auto flex h-[450px] bg-gradient-to-r from-gradient-purple-1 via-gradient-purple-3 to-gradient-purple-5 py-[100px]">
      <h2 className="text-[25px] text-white uppercase leading-[35px] font-extrabold w-[434px]">
        Stories from those <br />
        who{" "}
        <span className="text-[30px] text-[#78EDEE] font-extrabold">
          Love Us!
        </span>
      </h2>

      <div className="relative w-full h-[250px] overflow-hidden ">
        <div
          className="flex gap-x-[15px] transition-transform duration-300 ease-in-out w-[5000px]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {storiesComment.map((value, index) => (
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
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentSlide === 0}
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-purple-500 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 ${
            currentSlide === storiesComment.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentSlide === storiesComment.length - 1}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default Stories;
