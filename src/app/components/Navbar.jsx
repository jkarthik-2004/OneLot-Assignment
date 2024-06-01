"use client";
import React from "react";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
export default function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="">
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-2 bg-white shadow-sm z-50">
        <div className="flex gap-5">
          <img src="onelot-logo.webp" alt="onelot-logo" />
          {!open && (
            <ul className="hidden md:flex items-center justify-center gap-5">
              <li>
                <a href="/" className="text-[#57009C] text-sm">
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-sm text-center inline-flex items-center hover:text-[#57009C]"
                  type="button"
                >
                  Products
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a href="/" className="hover:text-[#57009C] text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#57009C] text-sm">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="hidden md:flex md:items-center md:justify-center md:gap-2 md:mr-3">
          <a href="/" className="mr-2 text-sm">
            Login
          </a>
          <button
            type="button"
            class="focus:outline-none text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4  font-medium rounded-lg text-md px-5 py-2.5 mb-2"
          >
            Inquire Now
          </button>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
      {open && (
        <ul className="flex flex-col items-center justify-center gap-5 pt-20 mt-2">
          <li>
            <a href="/" className="text-[#57009C]">
              Home
            </a>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-sm text-center inline-flex items-center hover:text-[#57009C]"
              type="button"
            >
              Products
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>
          <li>
            <a href="/" className="hover:text-[#57009C]">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-[#57009C]">
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}















