import React from 'react'
import Reservation from '../assets/reservation day.png'
import TotalReservation from '../assets/total reservation.png'
// import Customers from '../assets/active customers.png'

function reservation() {
  return (
    <>
       <div className='mx-[30px]'>
        <p className='font-bold text-[25px] my-[20px]'>Reservation</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-[100%] gap-2 border rounded-md'>
          <div className='flex flex-col gap-4 px-5 py-5 m-5 bg-white border rounded-md sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
           <div  className='w-[64px] h-[64px] bg-[#242E69]  flex justify-center items-center rounded-md'><img src={Reservation} alt="" className='' /></div> 
            <div className='flex flex-col'>
              <p className='font-[400] font-rubik text-[18px] sm:text[20px] md:text-[24px] lg:text-[26px] xl:text-[30px] leading-[39px]'>15</p>
              <p className='font-[400] font-rubik text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[27px]'>Reservation Today</p>
            </div>
          </div>

          {/* 2nd div */}
          <div className='flex flex-col gap-4 px-5 py-5 m-5 bg-white border rounded-md sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
           <div className='w-[64px] h-[64px] bg-[#242E69]  flex justify-center items-center rounded-md'><img src={TotalReservation} alt="" className='' /></div> 
            <div className='flex flex-col'>
              <p className='font-[400] font-rubik text-[18px] sm:text[20px] md:text-[24px] lg:text-[26px] xl:text-[30px] leading-[39px]'>190</p>
              <p className='font-[400] font-rubik text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[27px]'>Total Reservation</p>
            </div>
          </div>

        
        </div>
      </div>
    </>
  )
}

export default reservation
