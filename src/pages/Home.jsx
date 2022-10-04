import React from 'react'
import BG from '../images/bg2.bmp'
import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import {
  Animator,
  batch,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
} from 'react-scroll-motion'

const home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BG})` }}
      className='bg-fixed h-screen md:p-52 p-20'
      id='home'>
      <div fixed className='flex md:flex-row flex-col items-center'>
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'>
          <div className='md:space-x-10 md:space-y-4'>
            <div className=' md:text-6xl text-4xl font-bold text-white capitalize space-y-4 space-x-10'>
              <h1 className='text-4xl'>hey, i'm</h1>
              <h1>
                <span className='text-rose-600 ml-4'>G</span>oumiri
                <span className='text-rose-600 ml-4'>A</span>li
              </h1>
              <h1 className='text-2xl'>A Frontend focused</h1>
              <h1 className='text-4xl'>
                <span className='text-rose-600 ml-4'>W</span>eb
                <span className='text-rose-600 ml-4'>D</span>eveloper
              </h1>
            </div>
            <div className='flex flex-col items-center  p-4 text-white space-y-2 space-x-5 mr-10'>
              <h1 className=' capitalize md:text-base mb-5 text-slate-300 text-justify text-sm'>
                Building The Frontend of Web Applications that leads to the
                success of the overall product
              </h1>
              <div className='md:flex gap-10 w-[120%]'>
                <Button Name='Savoir Plus' Selector='#service' />
                <a
                  className='bg-rose-700 hover:bg-rose-800 md:scale-125 md:hover:scale-150 transition text-white py-2 px-5 rounded-full'
                  href='https://drive.google.com/file/d/1i_YQI5jzgC3YIxj9T73vlmrzNpdpwWo2/view?usp=sharing'>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] transition duration-1000'>
          <img
            src='https://digitalmarketingdz.com/wp-content/uploads/2022/09/home-01-01-01-01-1024x1024.png'
            alt='Développement site web'
            loading='lazy'
            className='w-[70%] animate-[bounce_4s_ease-in-out_infinite] md:ml-20 ml-16 md:mt-10 mt-10 '
          />
        </motion.div>

        <div className='z-50'>
          <Scroll selector='#profile' bottom='0' />
        </div>
      </div>
    </div>
  )
}

export default home
