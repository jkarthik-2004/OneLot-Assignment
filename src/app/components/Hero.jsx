import React from "react";
import Testimonals from "./Testimonals";
import Social from "./Social";
import Faq from "./Faq";
import { US } from "country-flag-icons/react/3x2";

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
            Enhance Efficiency and Sales with free digital tools for car dealerships
          </p>
          <p className="text-gray-500 text-balance text-left">
          OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 flex flex-col sm:flex-row gap-10 pl-8 pb-5">
        <img src="carfinancing.png" alt="" className="shadow-md mt-10" />
        <div className="mt-10 p-5">
          <ul className="text-left">
            <li className="text-3xl sm:text-4xl font-bold">Car Financing</li>
            <li className="text-xl mt-4 font-semibold text-balance">
              Dealer Loans
            </li>
          </ul>
          <p className="text-gray-500 text-balance text-left mt-2">
            OneLot’s working capital loans allows car dealer to buy more cars
            and capitalize on car purchase opportunities you would otherwise
            have missed. We transfer the money to your account within 6 hours.
          </p>
          <hr className="mt-6" />

          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="text-left font-semibold">
              Interest as low as 1.5% per month with daily calculation of
              interest
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="text-balance text-left font-semibold">
              Financing up to 70% of the vehicle purchase
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="text-left font-semibold">
              Financing period up to 90 days with flexible repayment schedule at
              any point
            </p>
          </div>

          <hr className="mt-6 mb-6" />
          <p className="text-gray-500 text-balance text-left">
            Use OneLot's financing solution today, grow the number of cars in
            your lot and increase your profits
          </p>

          <p className="text-left mt-5">
            <button
              type="button"
              class="text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4 focus:outline-none focus:-[#57009C] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              View Loans
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </p>
        </div>
      </div>
      <div className="bg-slate-50 flex flex-col sm:flex-row gap-10 pl-8 pr-2 mb-5">
        <div className="mt-10 p-8">
          <ul className="text-left">
            <li className="text-3xl sm:text-4xl font-bold">
              Dealership Management System
            </li>
            
          </ul>
          <p className="text-gray-500 text-balance text-left mt-2">
            OneLot’s digital platform has been build with the single goal to
            help used car dealers to operate their business more efficiently.
          </p>
          <hr className="mt-6" />

          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="p-1 text-left">
              <span className="font-bold text-balance">
                Inventory Management:
              </span>{" "}
              Track all details about your cars and sales in one place - from
              car details to buyers. All you need to now in one place
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="p-1 text-left">
              <span className="font-bold text-balance">Marketing Tools:</span>{" "}
              Promote your cars across all the different platforms. Write a
              marketing text and upload on Facebook Marketplace, Groups, Pages
              and Instagram with a single click of a button
            </p>
          </div>
          <div className="flex mt-6 items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-2 flex-shrink-0"
              style={{ color: "#c3b6d1" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <p className="p-1 text-left">
              <span className="font-bold text-balance">
                Marketing Insights (Coming Soon):
              </span>{" "}
              Get insights on prices and volumes for all cars in the market. We
              provide you all the date by combining data from various sources
              with a single click of a button.
            </p>
          </div>

          <hr className="mt-6 mb-6" />
          <p className="text-gray-500 text-balance text-left">
            Sign-up OneLot's dealer platform today, and your cars easier.
          </p>

          <p className="text-left mt-5">
            <button
              type="button"
              class="text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4 focus:outline-none focus:-[#57009C] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Explore Now
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </p>
        </div>
        <img src="dmscontent.png" alt="" className="shadow-md mt-10 pl-6" />
      </div>

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
      <footer className="flex mt-17 justify-between items-center ml-10 mr-10 p-10">
        <img src="onelot-logo.webp" alt="" />
        <div className="flex flex-col gap-1">
          <ul className="flex gap-5 text-[#6B7280]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <p className="flex justify-end items-center">
            <span className="text-xs p-1 font-bold">ENG</span>
            <US title="United States" className="h-6 w-6 " />
            <span class="transition group-open:rotate-180  text-[#6B7280] group-open:text-black">
              <svg
                fill="none"
                height="20"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </p>
        </div>
        
      </footer>
      <hr className="w-full my-6 border-gray-200 sm:mx-auto lg:my-8"/>
      
      <div className="flex flex-col justify-start p-16">
      <span class="text-gray-500  dark:text-gray-400 text-left">© 2023 <a class="" href="/">OneLot Technologies Incorporated Pte. Ltd</a>. All Rights Reserved.</span>
      <div className="flex justify-between">
      <span class="text-gray-500  dark:text-gray-400 text-left">© 2023<a class="" href="/">OneLot Financing Corporation</a>. All Rights Reserved.</span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0"><a class="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="https://www.facebook.com/OneLotPH/"><svg class="w-5 h-5 cursor-pointer hover:text-[#57009C] focus:text-[#57009C]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg></a><a class="text-gray-500 hover:text-gray-900 dark:hover:text-white" href="https://www.instagram.com/onelot.ph/"><svg class="w-5 h-5 cursor-pointer hover:text-[#57009C] focus:text-[#57009C]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path></svg></a></div>
      </div>
      </div>
    </div>
  );
}
