import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import data from '../assets/data';  

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { contactInfo } = data; 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 py-4">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link to="/login">
          <img
            src={logo}
            className="rounded-full h-12 lg:h-14"
            alt="Brand Logo - Hiba Fathima's Personal Website"
          />
        </Link>
        <button
          className="text-white text-3xl lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } lg:flex lg:border-[0.2px] rounded-full lg:py-1 border-gray-500 xl:flex flex-col xl:flex-row items-center mt-4 xl:mt-0 w-full xl:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-evenly text-center lg:text-left w-full text-white">
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

      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } lg:flex space-x-4 lg:space-x-10 text-white text-lg lg:text-2xl mt-4 lg:mt-0`}
      >
        <div>
          <a
            href={`mailto:${contactInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-2.5 text-white rounded-full border border-[#2A6463] hover:bg-[#2A6463] transition-all"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 text-white rounded-full border border-[#2A6463] hover:bg-[#2A6463] transition-all"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-2.5 text-white rounded-full border border-[#2A6463] hover:bg-[#2A6463] transition-all"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
