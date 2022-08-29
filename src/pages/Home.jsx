import React from 'react'
import BG from '../images/bg2.bmp'
import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'


const home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BG})` }}
      className='bg-fixed h-screen md:p-52 p-20'
      id='home'>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className='fixed space-y-10 md:space-x-80 py-48 md:py-4 '>
        <div className='space-x-10 space-y-4'>
          <h1 className=' md:text-6xl text-4xl justify-center text-white'>
            <span className='text-rose-600'>G</span>oumiri{' '}
            <span className='text-rose-600'>A</span>li
          </h1>
          <h1 className='md:text-4xl text-2xl text-white'>
            i'm a <span className='text-rose-600'>Web Developer</span>
          </h1>
        </div>
        <button className='bg-rose-700 hover:bg-rose-800 md:scale-125 md:hover:scale-150 transition text-white py-2 px-5 rounded-full'>
          <a href='https://drive.google.com/file/d/1iUe0aNqxPUXpE7CRYkTHVleWEcRbTt5U/view?usp=sharing'>
            Download CV
          </a>
        </button>
      </motion.div>
      <div className='z-50'>
        <Scroll selector='#profile' bottom='0' />
      </div>
    </div>
  )
}

export default home
