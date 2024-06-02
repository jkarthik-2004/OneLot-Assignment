import React from "react";

export default function Loans() {
  return (
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 px-4 sm:px-20 2xl:px-40  py-5 border-t border-b">
      <div class="mb-3 sm:pr-20 sm:pt-10">
        <div class="2xl:pl-32 2xl:pr-8">
          <p class="text-black text-3xl sm:text-4xl font-extrabold text-left">
            Everything you need to grow your business
          </p>
          <p class="text-gray-500 sm:text-xl mt-4 sm:mt-10 text-balance text-left">
            OneLot is your trusted lending and financing partner, exclusively
            tailored for used car dealership. We also offer digital tools for
            streamlined operations and growth of your dealership.
          </p>
          <p className="text-left p-1">
            <a href="/" className="text-[#57009C]">
              Learn more <span>&rarr;</span>
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-around">
        <div className="flex items-center justify-start gap-1">
          <img src="dollar-icon.svg" alt="" />
          <ul className="text-balance">
            <li className="text-xl font-bold text-left p-1">Dealer Loans</li>
          </ul>
        </div>
        <ul className="text-balance">
          <li className="text-[#01F1F1] mb-4 text-balance text-left">
            Accelerate your growth with tailored loan solutions
          </li>
          <li className="text-gray-500 text-balance text-left">
            Get comprehensive car financing solutions, unlock the potential of
            your dealership and take it to new heights.
          </li>
        </ul>

        <div className="mt-5 flex gap-1 items-center justify-start">
          <img src="announcements-icon.webp" alt="" />
          <p className="text-xl font-bold text-balance text-left p-1">
            Dealership Management System
          </p>
        </div>
        <p className="text-[#57009C] text-balance text-left">
          Enhance Efficiency and Sales with free digital tools for car
          dealerships
        </p>
        <p className="text-gray-500 text-balance text-left">
          OneLot offers a suite of powerful digital tools designed to optimize
          your dealership<span>&apos;</span>s operations.
        </p>
      </div>
    </div>
  );
}
