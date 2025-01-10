import React from 'react';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full px-4 sm:px-10 md:px-20 py-10'>
      <div className='border flex justify-center items-center space-x-2 sm:space-x-4 rounded-full text-sm sm:text-xl p-2 sm:p-4'>
        <span className='text-center'>
          Hiba Fathima
        </span>
        <FaCode className='text-lg sm:text-2xl' />
        <p className='text-center'>
          Portfolio
        </p>
      </div>
    </div>
  );
};

export default Footer;
