import React from 'react'
import BG from '../images/bg2.bmp'
import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'
import Button from '../components/Button'

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
        className='fixed space-y-10 md:space-x-80 py-24 md:py-0 mr-24'>
        <div className='md:space-x-10 md:space-y-4'>
          <h1 className=' md:text-6xl text-3xl justify-center text-white uppercase'>
            hey, i'm <span className='text-rose-600'>G</span>oumiri{' '}
            <span className='text-rose-600'>A</span>li
          </h1>
          <div className='p-4 text-white space-y-2 space-x-5'>
            <h1 className='md:text-3xl text-xl'>
              A <span className='text-rose-600'>Frontend</span> focused{' '}
              <span className='text-rose-600'>Web Developer</span>
            </h1>
            <h1 className='md:text-base text-sm'>
              Building The Frontend of Web Applications
            </h1>
            <h1 className='md:text-sm text-xs capitalize'>
              that leads to the success of the overall product
            </h1>
          </div>
        </div>
        <div className='flex md:space-x-14 space-x-2'>
          <button className=' bg-rose-700 hover:bg-rose-800 md:scale-125 md:hover:scale-150 transition text-white py-2 px-3 rounded-full'>
            <a href='https://drive.google.com/file/d/1iUe0aNqxPUXpE7CRYkTHVleWEcRbTt5U/view?usp=sharing'>
              Download CV
            </a>
          </button>
          <Button Name='My Projects' Selector='#projects' />
        </div>
      </motion.div>
      <div className='z-50'>
        <Scroll selector='#profile' bottom='0' />
      </div>
    </div>
  )
}

export default home
