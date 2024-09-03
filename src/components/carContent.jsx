import React from 'react'
import Car from '../assets/vehicle-icon.png'
import TotalCars from '../assets/total-cars.png'
import Availaible from '../assets/avail-cars.png'
import RentedOut from '../assets/rented-car.png'

function carContent() {
  return (
    <>
      <div className='mx-[30px] mt-[40px]'>
        <p className='font-rubik font-[600] text-[25px] pb-[20px]'>Cars</p>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-[100%] gap-5 border rounded-md'>
          <div className='flex flex-col gap-4 px-5 py-5 m-5 bg-white border rounded-md sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
          <div className='w-[64px] h-[64px] bg-[#242E69]  flex justify-center items-center rounded-md'>
          <img src={TotalCars} alt=""  />
          </div>
            <div className='flex flex-col'>
              <p className='font-[400] font-rubik text-[18px] sm:text[20px] md:text-[24px] lg:text-[26px] xl:text-[30px]  leading-[39px]'>102</p>
              <p className='font-[400] font-rubik text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[27px]'>Total Cars</p>
            </div>
          </div>

          {/* 2nd div */}
          <div className='flex flex-col gap-4 px-5 py-5 m-5 bg-white border rounded-md sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
           <div className='w-[64px] h-[64px] bg-[#242E69]  flex justify-center items-center rounded-md'>
           <img src={Availaible} alt="" className='' /></div> 
            <div className='flex flex-col'>
              <p className='font-[400] font-rubik text-[18px] sm:text[20px] md:text-[24px] lg:text-[26px] xl:text-[30px] leading-[39px]'>80</p>
              <p className='font-[400] font-rubik text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[27px]'>Cars Available</p>
            </div>
          </div>

          {/* 3rd div */}
          <div className='flex flex-col gap-4 px-5 py-5 m-5 bg-white border rounded-md sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
           <div className='w-[64px] h-[64px] bg-[#242E69]  flex justify-center items-center rounded-md'>
           <img src={RentedOut} alt="" className='' />
            </div> 
            <div className='flex flex-col'>
              <p className='font-[400] font-rubik text-[18px] sm:text[20px] md:text-[24px] lg:text-[26px] xl:text-[30px] leading-[39px]'>40</p>
              <p className='font-[400] font-rubik text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[27px]'>Cars Rented Out</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default carContent
