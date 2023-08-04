import React from 'react';
import {close, logo2, menu } from "../assets";
import {navLinks} from "../constants";
import {useState} from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const active_path = window.location.pathname;
  return (
    <nav className = "w-full flex py-6 justify-between items-center navbar">
      <NavLink to={`/`}><img src={logo2} alt="yours lawfully logo" className="w-[250px]"></img></NavLink>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,index) => (
          <li
            key = {nav.id}
            className={` flex font-poppins font-normal cursor-pointer text-[16px] p-4 text-white ${active_path=== nav.link ? 'bg-blue-500' : ''} hover:bg-blue-400 h-[40px] rounded-[10px] `}   
          >
            {/* <a href={`#${nav.id}`}> {nav.title} </a> */}
            <NavLink className={`flex items-center`} to={`${nav.link}`}>{nav.title}</NavLink>
          </li>
        ))}
      </ul>

      <div  className="sm:hidden flex flex-1 justify-end items-center ">
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}></img>
        
        <div className={`${toggle ? 'fixed' : 'hidden'} w-screen h-screen bg-black-gradient-2 inset-0 px-2`}>
          <div className={`flex w-full justify-between py-6 items-center`}>
            <NavLink to={`/`}><img src={logo2} alt="yours lawfully logo" className="w-[250px]"></img></NavLink>
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}></img>
          </div>
          <ul className="list-none flex flex-col justify-end items-center flex-1 w-full  mt-40">
            {navLinks.map((nav,index) => (
              <li
                key = {nav.id}
                className={`font-poppins font-normal cursor-pointer text-[25px] my-4 text-white`}   
              >


                <NavLink to={`${nav.link}`}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
