import React from 'react'
import Menu from '../assets/navbar-menu-icon.png'
import Bell from '../assets/bell-icon.png'
import Profile from '../assets/profile-icon.png'

function navbar({toggleSidebar}) {
  return (
    <>
       <div className='flex flex-row justify-between justify-center items-center px-4 h-[94px] w-[100%] border-b border-[#D9D9D9]'>
        <div><img src={Menu} alt="" onClick={toggleSidebar} className='cursor-pointer'
        /></div>
        <div className='flex flex-row gap-2'>
         <div><img src={Bell} alt="" /></div>
         <div><img src={Profile} alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default navbar