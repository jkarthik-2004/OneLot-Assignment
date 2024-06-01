import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between w-full mt-2">
        <div className="flex gap-5">
        <img src="onelot-logo.webp" alt="onelot-logo" />
        <ul className="flex items-center justify-center gap-10">
          <li>
            <a href="/" className="text-[#57009C]">
              Home
            </a>
          </li>
          <li>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="  text-sm text-center inline-flex items-center hover:text-[#57009C] "
              type="button"
            >
              Products
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
        </div>
        
        <div className="flex items-center justify-center gap-2 mr-3">
            <a href="/" className="mr-2">Login</a>
            <button type="button" class="focus:outline-none text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4  font-medium rounded-lg text-md px-5 py-2.5 mb-2">Get Started</button>
        </div>
        
      </nav>
    </div>
  );
}
