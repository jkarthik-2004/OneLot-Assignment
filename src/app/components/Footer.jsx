import React from "react";
import { US } from "country-flag-icons/react/3x2";
export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row mt-17 sm:justify-between sm:items-center ml-10 mr-10 p-10">
      <img src="onelot-logo.webp" alt="" />
      <div className="flex flex-col gap-1">
        <ul className="flex flex-col sm:flex-row gap-5 text-[#6B7280]">
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
  );
}
