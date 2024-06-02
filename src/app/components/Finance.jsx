import React from "react";

export default function Finance() {
  return (
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
          OneLot’s working capital loans allows car dealer to buy more cars and
          capitalize on car purchase opportunities you would otherwise have
          missed. We transfer the money to your account within 6 hours.
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
            Interest as low as 1.5% per month with daily calculation of interest
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
          Use OneLot's financing solution today, grow the number of cars in your
          lot and increase your profits
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
  );
}
