import React,{useState} from "react";
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import {RiRegisteredLine} from 'react-icons/ri'
import {SiTheregister} from 'react-icons/si'
import {CgMenuHotdog,CgMenu} from 'react-icons/cg'
import { NavHashLink } from 'react-router-hash-link';
import { BsFillBriefcaseFill } from "react-icons/bs";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(previous=>!previous);
  }
  


  return(
    <header className="w-full flex justify-between items-center h-[60px] md:h-[70px] px-3  bg-[#002244]  sticky   mx-auto top-0 shadow-sm shadow-blue-300 z-[10] ">
   <div className="flex justify-center items-center">
  <NavHashLink smooth to="#" className='flex justify-center items-center'>  <span aria-describedby="logo" className="text-xl md:text-2xl font-bold text-slate-50">A.A</span>  </NavHashLink>
   </div>
    <nav className="hidden md:block  relative">
        <ul className="flex">
            <li className=' ml-10 text-slate-50 text-sm flex justify-center items-center'><NavHashLink className='flex justify-center items-center' smooth to="#"> <AiOutlineHome className="text-2xl text-white mr-1 "/>Home</NavHashLink ></li>
            <li className=' ml-10 text-slate-50 text-sm flex justify-center items-center'><NavHashLink to="#about" className='flex justify-center items-center' smooth > <MdOutlinePeopleAlt className="text-2xl text-white mr-1 "/>About</NavHashLink ></li>
            <li className=' ml-10 text-slate-50 text-sm flex justify-center items-center'><NavHashLink to="#portfolio" className='flex justify-center items-center' smooth > <BsFillBriefcaseFill className="text-2xl text-white mr-1 "/>Portfolio</NavHashLink ></li>
            <li className=' ml-10 text-slate-50 text-sm flex justify-center items-center'><NavHashLink className='flex justify-center items-center' smooth to="/#contact"> <AiOutlineMail className="text-2xl text-white mr-1 "/>Contact</NavHashLink ></li>
            <li className='ml-10 bg-white px-10 shadow-md shadow-slate-500 py-2 text-sm text-slate-600 flex  justify-center items-center'><RiRegisteredLine className='text-2xl text-slate-500'/> Download Cv</li>
        </ul>      
    </nav>
    { 
        <div className='block md:hidden'>
           {
            isOpen ?  <CgMenu className='text-slate-50 text-3xl' onClick={toggleNavbar}/> : <CgMenuHotdog className='text-slate-50 text-3xl' onClick={toggleNavbar}/>
           }
        </div>
    }
      <nav className={`home fixed border-t-4 border-b-4  border-slate-200 md:hidden right-0 top-[70px] bottom-0 w-[70%] h-[100vh] bg-[#002244]  z-[100] transition-all duration-500 ease-linear ${isOpen ? 'translate-x-0':'translate-x-[1000px]'}`}>
      <ul className="block">
            <li className=' ml-16 text-slate-50 text-sm block mt-16'><NavHashLink className='flex justify-center items-center' smooth to="#"> <AiOutlineHome className="text-2xl text-white mr-1 "/>Home</NavHashLink ></li>
            <li className=' ml-16 text-slate-50 text-smblock mt-10'><NavHashLink to="#about" className='flex justify-center items-center' smooth > <MdOutlinePeopleAlt className="text-2xl text-white mr-1 "/>About</NavHashLink ></li>
            <li className=' ml-16 text-slate-50 text-smblock mt-10'><NavHashLink to="#portfolio" className='flex justify-center items-center' smooth > <BsFillBriefcaseFill className="text-2xl text-white mr-1 "/>Portfolio</NavHashLink ></li>
            <li className=' ml-16 text-slate-50 text-smblock mt-10'><NavHashLink className='flex justify-center items-center' smooth to="/#contact"> <AiOutlineMail className="text-2xl text-white mr-1 "/>Contact</NavHashLink ></li>
            <button className='mt-16 ml-16 bg-white px-10 shadow-md shadow-slate-500 py-2 text-sm text-slate-600 flex  justify-center items-center'><RiRegisteredLine className='text-2xl text-slate-500'/> Download Cv</button>
        </ul>      
      </nav>

      {/* overlay */}
      <div className={`fixed md:hidden w-full left-0 bottom-0 right-0 top-[65px]  h-full transition-all duration-500 ease-linear  ${isOpen ? 'z-[4] bg-[#000000c5]':'z-[-1]'}`} onClick={()=>(setIsOpen(false))}>

      </div>
    </header>
  )  
};

export default Navbar;
