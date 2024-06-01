import React from 'react'

export default function Hero() {
  return (
    <div className='bg-white items-center text-center pt-40'>
        <p className='sm:text-5xl text-3xl sm:mb-8 mb-4 font-extrabold px-4 sm:px-20 xl:px-20 2xl:px-72 text-black'>
        Grow your dealership with working capital loans and 
        <br/>
         digital tools from OneLot
        </p>
        <p className='text-gray-500 font-normal px-4 sm:px-20 2xl:px-20 sm:w-2/3 2xl:w-1/2 mx-auto sm:text-xl'>
            We enable dealers to buy more cars through our working capital loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management, marketing solutions and market insights
        </p>
        <button
            type="button"
            class="focus:outline-none text-white bg-[#57009C] hover:bg-[#57009C] focus:ring-4  font-normal rounded-lg text-md px-5 py-2.5 mb-2 mt-4"
          >
            Inquire Now
          </button>
          <div className='flex justify-center items-center mt-5 p-5'>
          <img src="home_hero_image.webp" alt="" className=''/>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center mt-6 bg-slate-50'>
            <p className='text-gray-500'>Regulated by</p>
            <img src="sec.webp" alt="" />
          </div>
          <div className='flex gap-6 items-center justify-center'>
            <div>
              <p className='text-3xl font-bold'>Everything you need to grow your business</p>
              <p className='text-md text-gray-500'>OneLot is your trusted lending and financing partner, exclusively tailored for used car dealership. We also offer digital tools for streamlined operations and growth of your dealership.</p>
            </div>
            <div className='flex items-center mb-4'>
            <img src="dollar-icon.svg" alt="" />
            <p className='text-xl font-bold'>Dealer Inventory Loans</p>
            </div>
            <p>Accelerate your growth with tailored loan solutions</p>
          </div>
    </div> 
  )
}
