import { useState } from 'react'
import SideBar from './components/sidebar' 
import Navbar from './components/navbar'
import CarContent from './components/carContent'
import Reservation from './components/reservation'
import Revenue from './components/revenue'
import Availability from './components/availability'
import RecentReservation from './components/recentReservation'

import './App.css'

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
 
  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };
  

  return (
    <>
    <div className='flex'>
        <SideBar isCollapsed={isCollapsed}/>
      
      <div className='felx flex-col w-[100%]'>
          <Navbar toggleSidebar={toggleSidebar}/>
          <div className='mx-[44px] pt-7'>
           <p className='font-bold text-[23px]'> Dashboard</p>
          </div>
          <div className=' flex flex-col mx-[40px] my-[30px] bg-[#F9F9F9] border border-[#D9D9D9] rounded-md border-slate-400 border-opacity-50 pb-[60px]'>
          <CarContent/>
          <Reservation/>
          <Revenue/>
         
         <div className=' flex flex-col lg:flex-row xl:flex-row'>
          <Availability/>
          <RecentReservation/>

         </div>
         
          </div>

      </div>
      
  
  
   </div>
      
     
    </>
  )
}

export default App
