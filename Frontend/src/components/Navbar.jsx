import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Coride_Logo from "./../assets/Coride_Logo.png"
import {Link} from "react-router-dom"
import { useState } from 'react';
function Navbar() {
    const [navbarVisible, setNavBarVisible]= useState(false);
    const handleNavbar=()=>{
        setNavBarVisible(!navbarVisible);
    }
  return (
    <div className='flex items-center justify-between w-full h-[100px] px-10 overflow-hidden'>
        <div>
            <img src={Coride_Logo} alt="Logo" className='w-[100px] h-[100px]' />
        </div>
        <div className=' px-4'>
            <div className={`hidden md:flex  md:gap-10 items-center`}>
                <Link to="#">Home</Link>
                <Link>How CoRide Works</Link>
                <Link>CoRide Benefits</Link>
                <button className='bg-[#86bd81] w-[182px] h-[51px] rounded-md hover:bg-[#79936e] hover:font-semibold text-white duration-200'>Help Center</button>
            </div>
            <div className={`md:hidden ${navbarVisible?"hidden":"block"}`} onClick={handleNavbar}>
                <GiHamburgerMenu/>
            </div>
        </div>
        {/*  responsive navbar  */}
        {
            navbarVisible&&(
                <div className='md:hidden absolute top-4 right-0 w-1/2 border h-screen '>
                    <div className=' relative w-full h-full'>
                        <div className="cross absolute top-4 right-14 font-semibold text-2xl" onClick={handleNavbar}>X</div>
                        <div className="link pt-20  flex flex-col gap-4">
                            <Link className='w-full h-[50px]  pt-2 text-lg font-semibold px-4 hover:bg-gray-300'> Home </Link>
                            <Link className='w-full h-[50px]  pt-2 text-lg font-semibold px-4 hover:bg-gray-300'>How CoRide Works</Link>
                            <Link className='w-full h-[50px]  pt-2 text-lg font-semibold px-4 hover:bg-gray-300'>CoRide Benefits </Link>
                            <button className='bg-[#86bd81]  mx-4 w-[182px] h-[51px] rounded-md hover:bg-[#79936e] text-white'>Help Center</button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Navbar

 {/* <div className={`hidden  border w-1/2 h-1/2 border-blacktop-10 duration-300 md:hidden ${navbarVisible?'block':'block'} `}>
            <div className='w-full relative'>
                <div className='absolute right-14 -top-2 text-2xl font-bold' onClick={handleNavbar}>X</div>
            </div>
        </div> */}