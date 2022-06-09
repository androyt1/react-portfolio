import React from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { NavHashLink } from 'react-router-hash-link';
const Footer = () => {
  return (
    <div className='w-full  mx-auto border-t-2 border-[##B9D9EB] min-h-[20vh] bg-[#002244] flex items-center px-3 py-5 relative'>
        <p className='text-slate-50 md:max-w-[1100px] mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla optio facere dolorem, est </p>

        <NavHashLink smooth to='#'><BsFillArrowUpCircleFill className='hidden md:block absolute z-[4] text-3xl text-slate-200 right-3 top-10 md:text-4xl cursor-pointer' /></NavHashLink>

    </div>
  )
}

export default Footer