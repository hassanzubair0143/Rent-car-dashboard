// import React from 'react';
import SidebarContent from './SidebarContent';
import CarLogo from '../assets/car-logo.png';
import Dashboard from '../assets/Group 271.png';
import Calendar from '../assets/calendar-icon.png';
import Customer from '../assets/customer.png';
import Reservation from '../assets/reservation-icon.png';
import Vehicle from '../assets/vehicle-icon.png';
import Tracking from '../assets/tracking-icon.png';
import Offer from '../assets/offer-icon.png';

const Sidebar = ({ isCollapsed }) => {
  return (
    <div
      className={`h-[1744px] border-r border-[#D9D9D9] transition-all duration-300 ${
        isCollapsed ? 'w-[70px]' : 'w-[302px]'
      }`}
    >
      <div className='h-[94px] border-b border-[#D9D9D9] flex items-center justify-center'>
        <img
          src={CarLogo}
          alt='Car Logo'
          className={`transition-all duration-300 ${
            isCollapsed ? 'w-[40px] h-[12px]' : 'w-[124px] h-[37px]'
          }`}
        />
      </div>
      <div className='mt-[46px] flex flex-col gap-[30px]'>
        <SidebarContent image={Dashboard} heading='Dashboard' isCollapsed={isCollapsed} />
        <SidebarContent image={Calendar} heading='Calendar' isCollapsed={isCollapsed} />
        <SidebarContent image={Customer} heading='Customer' isCollapsed={isCollapsed} />
        <SidebarContent image={Reservation} heading='Reservation' isCollapsed={isCollapsed} />
        <SidebarContent image={Vehicle} heading='Vehicle' isCollapsed={isCollapsed} />
        <SidebarContent image={Tracking} heading='Tracking' isCollapsed={isCollapsed} />
        <SidebarContent image={Offer} heading='Offer Generator' isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
