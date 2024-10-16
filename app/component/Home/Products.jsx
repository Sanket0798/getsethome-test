"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GradientButton } from "../ui/Button";

const Products = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", phone);
  };

  return (
    <section className="w-1200 mx-auto h-[598px] py-[60px]">
      <div className="flex flex-row w-full justify-between">
        <div className="w-[585px] h-[498px] bg-[#ECDBDB] rounded-[20px] p-[44px] flex justify-between">
          <Image
            width={198}
            height={408}
            src="/assets/HomePage/Products/mobile.png"
            alt="product1"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="text-[28px] text-black font-extrabold leading-[38px] w-[278px]">
                Renting Made APPsolutely{" "}
                <span className="text-[#6B31E7]">Easy</span>!
              </h2>
              <form
                onSubmit={handleSubmit}
                className="w-[278px] h-[45px] mt-[20px]"
              >
                <div className="flex items-center bg-white rounded-full overflow-hidden h-[45px]">
                  <input
                    type="number"
                    placeholder="Enter Mobile no."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-grow bg-transparent py-[15px] px-[20px] font-medium text-[12px] text-white placeholder-gray-300 focus:outline-none"
                    required
                  />
                  <GradientButton
                    text="Send Link"
                    width="113px"
                    height="45px"
                  />
                </div>
              </form>
            </div>

            <Image
              width={180}
              height={74}
              src="/assets/HomePage/Products/googlePlay.png"
              alt="googlePlay"
            />
          </div>
        </div>

        <div className="w-[585px] h-[498px] bg-[#DAE8EC] rounded-[20px] p-[44px]">
          <div className="relative z-10">
            <h1 className="text-[28px] text-black font-extrabold">
              Have a Property to <span className="text-[#6B31E7]">Rent</span>?
            </h1>
            <p className="text-[14px] mt-[10px] mb-[15px] leading-[22px] text-[#555]">
              As a Home owner, your peace of mind is our priority. From showing
              your property to potential leads, managing compliance, we&apos;ll
              be there with you at every step of the way.
            </p>
            <GradientButton
              text="List your Property"
              width="190px"
              height="45px"
            />
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0 relative">
            <div className="absolute right-[-227%] -top-[80px] w-[585px] h-[387px]">
              <Image
                src="/assets/HomePage/Products/owner.png"
                alt="Person sitting in a chair reading"
                width={585}
                height={387}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
