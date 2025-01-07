import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import gif from '../assets/coding.gif';
import { Link } from 'react-router-dom';

import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SelectedProjects from '../components/SelectedProjects';



const Home = () => {
  
  return (
    <div className="bg-[#0A1817]">
      <NavBar />
      <div className="flex flex-col lg:flex-row items-center justify-between mx-32">
        <div className="lg:w-1/2 text-white space-y-6">
          <h1 className="text-5xl font-extrabold ">Hi, I'm Hiba Fathima</h1>
          <h2 className="text-3xl font-semibold">A Passionate Full-Stack Developer</h2>
          <p className="text-lg leading-relaxed">
            I specialize in building scalable, user-friendly web applications using the latest technologies.
            From crafting seamless front-end experiences to architecting efficient back-end solutions, 
            I bring ideas to life with code.
          </p>
          <div className="flex space-x-4">
            <a
              href="./src/assets/HibaFathimaResume.pdf" 
              download="Hiba_Fathima_Resume.pdf"
              className="bg-[#4D8685] text-white px-6 py-2 rounded-full hover:bg-[#426A6F]"
            >
              Download Resume
            </a>
            <Link to={'/projects'} className="bg-transparent border-2 border-[#4D8685] text-[#4D8685] px-6 py-2 rounded-full hover:bg-[#4D8685] hover:text-white">
              View Projects
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img src={gif} alt="Coding Animation" className="w-full" />
        </div>
      </div>
      <Skills/>
      <section id='about'><About/></section>
      <SelectedProjects/>
      <section id='contact'><Contact/></section>
      <Footer/>
    </div>
  );
};

export default Home;
