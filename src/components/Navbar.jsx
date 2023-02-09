import React, { useState } from 'react';
import { close, menu } from '../assets';
import {navLinks} from "../constants/index"

const Navbar = () => {
  const [openMenu,SetOpenMenu] = useState(true);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <h2 className=" text-white font-semibold font-poppins text-lg lg:text-2xl">nimo<span className='text-secondary'>Bank</span>
      </h2>
      <ul className={`list-none sm:flex hidden gap-4`}>
        {
          navLinks.map((navLink,index)=>(
            <li className={`font-thin text-base
            text-white font-poppins`} key={navLink.id}>
              <a className={`hover:text-secondary`} href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))
        }
      </ul> 
      <button onClick={()=>SetOpenMenu(!openMenu)} className='lg:hidden flex flex-1 justify-end cursor-pointer'>
        {openMenu===true?<img src={menu} alt="menu-bar" />:<img src={close} alt="menu-bar" />}
      </button>
      <div className={`${openMenu ? "hidden": "flex"} lg:hidden absolute top-10 right-0 mx-4 my-2 bg-black-gradient rounded-xl  p-6 sidebar min-w-[140px]`}>
      <ul className={`list-none flex flex-col items-center gap-2`}>
        {
          navLinks.map((navLink,index)=>(
            <li className={`font-small text-base
            text-white font-poppins`} key={navLink.id}>
              <a className={`hover:text-secondary`} href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))
        }
      </ul> 
      </div>
    </nav>
  )
}

export default Navbar