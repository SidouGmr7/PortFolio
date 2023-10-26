import React from 'react'
import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'

const home = () => {
    return (
        <div className='bg-fixed h-screen md:p-52 p-20' id='home'>
            <div fixed className='flex md:flex-row flex-col items-center'>
                <motion.div
                    // initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'
                >
                    <div className='md:space-x-10 space-y-4'>
                        <div className='md:text-6xl text-2xl font-bold text-white capitalize space-y-4 space-x-10'>
                            <h1 className='text-4xl'>hey, i'm</h1>
                            <h1 className='text-4xl'>
                                <span className='text-primary ml-4'>G</span>oumiri
                                <span className='text-primary ml-4'>A</span>li
                            </h1>
                            <h1 className='text-xl'>A Frontend focused</h1>
                            <h1 className='md:text-4xl '>
                                <span className='text-primary ml-4'>W</span>eb
                                <span className='text-primary ml-4'>D</span>eveloper
                            </h1>
                        </div>
                        <div className=' space-y-5 grid justify-items-center'>
                            <p className=' text-justify text-gray-200 '>
                                I design and code elegantly simple solutions, and engineer seamless
                                web applications that seamlessly blend form and function. I am
                                passionate about creating exceptional digital experiences, and I
                                genuinely enjoy what I do.
                            </p>
                        </div>
                        <div className='md:flex '>
                            <a
                                className='bg-[#6366f1] hover:bg-[#6366f1] md:scale-125 md:hover:scale-150 transition text-white py-2 px-5 justify-center flex rounded-full'
                                href='https://drive.google.com/file/d/15kM-O1iZscwkszhXc8VgKEvYoMtbMY0K/view?usp=sharing'
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
                    className='md:w-[50%] transition duration-1000 flex justify-center'
                >
                    <img
                        src='https://cdni.iconscout.com/illustration/premium/thumb/male-web-developer-doing-research-on-development-5691622-4759504.png'
                        alt='Développement site web'
                        loading='lazy'
                        className=' animate-[bounce_4s_ease-in-out_infinite] md:ml-20 md:mt-10 mt-10'
                    />
                </motion.div>
                <Scroll selector='#profile' />
            </div>
        </div>
    )
}

export default home
