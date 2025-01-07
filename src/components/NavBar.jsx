import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import data from '../assets/data';  

const NavBar = () => {
  const { contactInfo } = data; 

  return (
    <div className="w-full flex justify-between items-center px-20 py-4">
      <Link to={'/login'}>
        <img 
          src={logo} 
          className="rounded-full h-14 px-8" 
          alt="Brand Logo - Hiba Fathima's Personal Website" 
        />
      </Link>
      <div className="border-[0.2px] border-gray-500 bg-none rounded-full flex items-center py-1">
        <ul className="flex justify-evenly w-full text-white">
          <li className="px-10 py-2 rounded-3xl hover:bg-[#426A6F] text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-10 py-2 rounded-3xl hover:bg-[#426A6F] text-xl">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="px-10 py-2 rounded-3xl hover:bg-[#426A6F] text-xl">
            <a href="#about">About Me</a>
          </li>
          <li className="px-10 py-2 rounded-3xl hover:bg-[#426A6F] text-xl">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-10 text-white text-2xl">
        <a 
          href={`mailto:${contactInfo.email}`} 
                   target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope hover:text-[#D2C86E]"></i>
        </a>
        <a 
          href={contactInfo.linkedin}   
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin hover:text-[#D2C86E]"></i>
        </a>
        <a 
          href={contactInfo.github} 
                    target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github hover:text-[#D2C86E]"></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
