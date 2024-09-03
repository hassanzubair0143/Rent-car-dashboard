import React from 'react'

function availability() {
  return (
    <>
      <div className='border rounded-md lg:w-[100%] mx-[30px] mt-[30px] pb-[30px] bg-white flex flex-col'>
        <p className='font-[400] font-rubik text-[18px] leading-[27px] mt-[19px] mx-[16px]'>Cars Availability</p>
        <div className=' flex w-[100%] '>
            
        <div className='flex flex-col mt-[19px] mx-[16px] w-[100%]'>
       <div className='font-rubik font-[400] text-[14px]'>Make</div>
       <div className=' bg-[#F9F9F9] border rounded-md border-[#D9D9D9] '>
          <select name="" id=" " className='h-[43px] w-[100%]  font-rubik font-[400] text-[16px] bg-[#F9F9F9] border rounded-md border-[#D9D9D9]'>
            <option value="">Suzuki</option>
            <option value="">Swift</option>
            <option value="">Toyota</option>
          </select></div>
        </div>

        <div className='flex flex-col mt-[19px] mx-[16px] w-[100%] '>
       <div className='font-rubik font-[400] text-[14px]'>Make</div>
       <div className='border rounded-md '>
          <select name="" id=" " className='h-[43px] w-[100%] font-rubik font-[400] text-[16px] bg-[#F9F9F9] border rounded-md border-[#D9D9D9]'>
            <option value="">Suzuki</option>
            <option value="">Swift</option>
            <option value="">Toyota</option>
          </select></div>
        </div>
        </div>

        <div className='w-[100%]  mt-[13px] '>
          <p className='mx-[16px] font-[400] font-rubik text-[14px] mb-2'>Registration No</p>
          <div className='  mx-[16px]'>
          <input type="text" name="" id="" placeholder='Enter Text' className='p-3 w-[100%] outline-none font-rubik font-[400] bg-[#F9F9F9] border rounded-md border-[#D9D9D9]' /></div>

        </div>

        <div className='  mt-[13px]  '>
          <p className='mx-[16px] font-[400] text-[14px] font-rubik'>Date & Time</p>
          <div className='w-[100%] flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row'>
         <input type="date" name="" id="" placeholder='dd-mm-yyyy' className='font-rubik font-[400] text-[16px] lg:w-[100%] p-3 bg-[#F9F9F9] border rounded-md border-[#D9D9D9] mx-[16px]'/>
          <input type="time" name="" id="" placeholder='12:00' className='font-rubik font-[400] text-[16px] lg:w-[100%] p-3 bg-[#F9F9F9] border rounded-md border-[#D9D9D9] mx-[16px]' />
          </div>
        </div>

        <div className=' font-rubik font-[500] text-[16px] bg-[#242E69] text-white rounded-lg mx-[16px] mt-[20px] h-[43px] flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-all duration-200 '>check</div>

      </div>
    </>
  )
}

export default availability
