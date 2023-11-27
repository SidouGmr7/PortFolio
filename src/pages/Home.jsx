import React from 'react'
import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'
import { skillsIcons } from '../data/icons'
import { Stack } from '@mui/material'

const home = () => {
    const p = (str) => <span className='text-primary'>{str}</span>
    const icons = skillsIcons({ className: 'md:text-[4rem] text-[2rem]' })
    const iconLabel = ['MongoDB', 'Express', 'React', 'NextJS']
    return (
        <div className='bg-fixed h-screen md:p-32 p-20' id='home'>
            <div className='flex justify-center md:p-0 pb-10'>
                <Stack direction='row' spacing={1}>
                    {iconLabel.map((fw) => {
                        return (
                            icons[fw] && (
                                <div className='animate-[bounce_4s_ease-in-out_infinite]'>
                                    {icons[fw]}
                                </div>
                            )
                        )
                    })}
                </Stack>
            </div>
            <div fixed className='flex md:flex-row flex-col items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className='md:w-[50%] w-[100%] flex flex-col items-center ml-4 transition duration-1000'
                >
                    <div className='md:space-x-10 space-y-4'>
                        <div className='md:text-6xl text-2xl font-bold text-white capitalize space-y-4 md:space-x-10 space-x-2'>
                            <h1 className='text-4xl'>hey, i'm</h1>
                            <h1 className='text-4xl'>
                                {p('G')}oumiri {p('A')}li
                            </h1>
                            <h1 className='text-xl'>A {p('MERN')} FullStack focused</h1>
                            <h1 className='md:text-4xl '>
                                {p('W')}eb {p('D')}eveloper
                            </h1>
                        </div>
                        <div className='md:text-lg text-sm text-center'>
                            <p className='text-justify text-gray-200 '>
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
