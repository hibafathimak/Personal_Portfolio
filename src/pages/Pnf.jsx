import React from 'react'
import img from '../assets/gif.gif'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div className='bg-[#0A1817]  h-[100vh] overflow-hidden flex items-center justify-center flex-col'>
      <img src={img} className='w-[100vw] '  alt="" />
      <Link  className='absolute border mt-96 rounded-full px-8 py-2 border-[#2A6463] hover:bg-[#2A6463]' to={'/'}>Back to Home</Link>
    </div>
  )
}

export default Pnf