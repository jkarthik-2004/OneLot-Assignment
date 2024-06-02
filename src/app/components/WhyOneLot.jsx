import React from "react";

export default function WhyOneLot() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl font-extrabold mb-5">Why OneLot?</p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center mt-5 p-10">
        <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
          <img src="trust.webp" alt="" className=" h-10 w-10" />
          <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
            Trust
          </p>
          <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">
            Regulated by Securities and Exchange Commission (SEC) Philippines
          </p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
          <img src="high_amount.webp" alt="" className="h-10 w-10" />
          <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
            High Amount
          </p>
          <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">
            Get the highest loan amounts compared to other banks and lenders
          </p>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
          <img src="fast.webp" alt="" className="h-10 w-10" />
          <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
            Fast
          </p>
          <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">
            Get the money within a few hours on the same day
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
          <img src="flexible.webp" alt="" className="h-10 w-10" />
          <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
            Flexible
          </p>
          <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">
            Loans are tailored to your needs
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center shadow-md p-5">
          <img src="easy.webp" alt="" className="h-10 w-10" />
          <p className="text-lg font-semibold mx-4 text-black text-center mb-2 w-full">
            Easy
          </p>
          <p class="text-sm text-gray-500 text-center px-4 overflow-hidden">
            Run through an easy process and get your first loans within days
          </p>
        </div>
      </div>
    </div>
  );
}
