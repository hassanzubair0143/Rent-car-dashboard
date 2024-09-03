// import React from 'react'

// function sidebarContent({image,heading}) {
//   return (
//     <>
//       <div className='flex flex-row items-center mx-[40px] gap-2'>
//         <div><img src={image} alt="" className='w-[18px] h-[18px] ' /></div>
//        <div><p className='text-[18px] font-[400] leading-[27px]'>{heading}</p></div>
//       </div>
//     </>
//   )
// }

// export default sidebarContent
import React from 'react';

function sidebarContent({ image, heading, isCollapsed }) {
  return (
    <div className={`flex items-center gap-2 px-4 transition-all duration-300`}>
      <img src={image} alt={heading} className='w-[18px] h-[18px]' />
      {!isCollapsed && (
        <p className='text-[18px] font-[400] font-rubik leading-[27px]'>{heading}</p>
      )}
    </div>
  );
}

export default sidebarContent;
