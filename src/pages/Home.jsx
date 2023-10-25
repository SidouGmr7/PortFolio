import React from "react"
import Scroll from "../components/Scroll"
import { motion } from "framer-motion"

const home = () => {
  return (
    <div className='bg-fixed h-screen md:p-52 p-20' id='home'>
      <div fixed className='flex md:flex-row flex-col items-center'>
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'
        >
          <div className='md:space-x-10 md:space-y-4'>
            <div className=' md:text-6xl text-4xl font-bold text-white capitalize space-y-4 space-x-10'>
              <h1 className='text-4xl'>hey, i'm</h1>
              <h1>
                <span className='text-primary ml-4'>G</span>oumiri
                <span className='text-primary ml-4'>A</span>li
              </h1>
              <h1 className='text-2xl'>A Frontend focused</h1>
              <h1 className='text-4xl'>
                <span className='text-primary ml-4'>W</span>eb
                <span className='text-primary ml-4'>D</span>eveloper
              </h1>
            </div>
            <h1 className='capitalize  mb-5 text-slate-300 text-justify text-sm'>
              I design and code beautifully simple things, and I love what I do.
            </h1>
            <div className='md:flex gap-10 w-[120%]'>
              <a
                className='bg-[#04998a] hover:bg-[#04998a] md:scale-125 md:hover:scale-150 transition text-white py-2 px-5 rounded-full'
                href='https://drive.google.com/file/d/1RqTPBu55SUCI4J0zyiI7R9r-UHBM-z-k/view?usp=sharing'
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] transition duration-1000'
        >
          <img
            src='https://cdni.iconscout.com/illustration/premium/thumb/male-web-developer-doing-research-on-development-5691622-4759504.png'
            alt='Développement site web'
            loading='lazy'
            className=' animate-[bounce_4s_ease-in-out_infinite] md:ml-20 ml-16 md:mt-10 mt-10 '
          />
        </motion.div>
        <div className='z-50'>
          <Scroll selector='#profile' />
        </div>
      </div>
    </div>
  )
}

export default home
