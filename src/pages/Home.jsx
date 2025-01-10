import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import gif from '../assets/coding.gif';
import { Link } from 'react-router-dom';

import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SelectedProjects from '../components/SelectedProjects';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const h1Ref = useRef(null); 
  const h2Ref = useRef(null); 
  const paragraphRef = useRef(null); 
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(() => {
    const h1Split = new SplitType(h1Ref.current, { types: 'lines, words, chars', tagName: 'span' });
    const h2Split = new SplitType(h2Ref.current, { types: 'lines, words, chars', tagName: 'span' });

    gsap.from(h1Ref.current.querySelectorAll('.char'), {
      y: '100%',
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.05,
    });

    gsap.from(h2Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.5, 
    });

    gsap.from(paragraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      delay: 1,
    });

    gsap.from(skillsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(aboutRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(projectsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(contactRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 80%',
      },
    });

    return () => {
      h1Split.revert();
      h2Split.revert();
    };
  });

  return (
    <div className="bg-[#0A1817] min-h-screen">
  <NavBar />

  <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-32 lg:py-0 space-y-0 lg:space-y-0">
    <div className="lg:w-1/2 text-white space-y-2 lg:space-y-6">
      <h1
        ref={h1Ref}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
      >
        Hi, I'm <span>Hiba Fathima</span>
      </h1>
      <h2 ref={h2Ref} className="text-xl sm:text-2xl lg:text-3xl font-semibold">
        A Passionate Full-Stack Developer
      </h2>
      <p
        ref={paragraphRef}
        className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6"
      >
        I specialize in building scalable, user-friendly web applications
        using the latest technologies. From crafting seamless front-end
        experiences to architecting efficient back-end solutions, I bring
        ideas to life with code.
      </p>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <a
          href="./src/assets/HibaFathimaResume.pdf"
          download="Hiba_Fathima_Resume.pdf"
          className="bg-[#4D8685] text-white px-6 py-2 rounded-full text-center hover:bg-[#426A6F] transition-all"
        >
          Download Resume
        </a>
        <Link
          to="/projects"
          className="bg-transparent border-2 border-[#4D8685] text-[#4D8685] px-6 py-2 rounded-full text-center hover:bg-[#4D8685] hover:text-white transition-all"
        >
          View Projects
        </Link>
      </div>
    </div>

    <div className="lg:w-1/2 flex justify-center mt-4 lg:mt-0">
      <img
        src={gif}
        alt="Coding Animation"
        className="w-full max-w-xs rounded-full sm:max-w-md lg:max-w-2xl"
      />
    </div>
  </div>

  <section ref={skillsRef} className="px-6 md:px-12 lg:px-32 py-10">
    <Skills />
  </section>

  <section ref={aboutRef} id="about" className="px-6 mt-40 md:px-12 lg:px-32 py-10">
    <About />
  </section>

  <section ref={projectsRef} className="px-6 md:px-12 lg:px-32 py-10">
    <SelectedProjects />
  </section>

  <section ref={contactRef} id="contact" className="px-6 md:px-12 lg:px-32 py-10">
    <Contact />
  </section>

  <footer className="bg-[#0A1817] py-6">
    <Footer />
  </footer>
</div>

  
  );
};

export default Home;
