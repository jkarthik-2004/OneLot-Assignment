import React from "react";
import Testimonals from "./Testimonals";
import Social from "./Social";
import Faq from "./Faq";
import Loans from "./Loans";
import Finance from "./Finance";
import DealershipMgmt from "./DealershipMgmt";
import WhyOneLot from "./WhyOneLot";
import Copyright from "./Copyright";
import Footer from "./Footer";

export default function Hero() {
  return (
    <div className="bg-white items-center text-center pt-40">
      <p className="sm:text-5xl text-3xl sm:mb-8 mb-4 font-extrabold px-4 sm:px-20 xl:px-20 2xl:px-72 text-black">
        Grow your dealership with working capital loans and
        <br />
        digital tools from OneLot
      </p>
      <p className="text-gray-500 font-normal px-4 sm:px-20 2xl:px-20 sm:w-2/3 2xl:w-1/2 mx-auto sm:text-xl">
        We enable dealers to buy more cars through our working capital loan
        solutions and sell cars more efficiently through our Dealership
        Management System with its inventory management, marketing solutions and
        market insights
      </p>
      <button
        type="button"
        class="focus:outline-none text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4  font-normal rounded-lg text-md px-5 py-2.5 mb-2 mt-4"
      >
        Inquire Now
      </button>
      <div className="flex justify-center items-center mt-5 p-5">
        <img src="home_hero_image.webp" alt="" className="" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center p-8 bg-slate-50">
        <p className="text-gray-500">Regulated by</p>
        <img src="sec.webp" alt="" />
      </div>
      <Loans />
      <Finance />
      <DealershipMgmt />
      <WhyOneLot />
      <Testimonals />
      <Social />
      <Faq />
      <div className="flex flex-col justify-center items-center gap-2 mt-10 p-10">
        <p className="sm:text-4xl text-3xl mb-8 font-extrabold">
          Get started today
        </p>
        <p className="text-gray-500 font-normal text-xl sm:w-1/2 mx-auto">
          We look forward to serving the needs of used car dealers across the
          Philippines and helping them thrive in this dynamic market.
        </p>
        <p className="mt-6">
          <button
            type="button"
            class="text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4 focus:outline-none focus:-[#57009C] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Inquire now
          </button>
        </p>
      </div>
     
    </div>
  );
}
