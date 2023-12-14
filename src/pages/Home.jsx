/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'
import { skillsIcons } from '../data/icons'
import { Stack, useMediaQuery, Typography, Box } from '@mui/material'
import { CV_URL } from '../configs'

const Home = () => {
    const isMobile = useMediaQuery('(max-width: 1200px)')
    const p = (str) => <span className='text-primary'>{str}</span>
    const icons = skillsIcons({ className: 'md:text-[4rem] text-[2rem]' })
    const iconLabel = ['MongoDB', 'Express', 'React', 'NextJS']

    return (
        <div className='bg-fixed xl:h-screen  md:pt-16 p-10' id='home'>
            <Box className='flex justify-center md:p-0 md:pt-10 pt-16 pb-10'>
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
            </Box>
            <Box fixed className='flex md:flex-row flex-col items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    className='md:w-[50%] w-[100%] flex flex-col items-center ml-4 transition duration-1000'
                >
                    <div className='md:space-x-10 space-y-4'>
                        <Box className='font-bold text-white capitalize space-y-4 space-x-4'>
                            <Box className='flex justify-center'>
                                <Typography variant={isMobile ? 'h6' : 'h4'}>
                                    hey, i'm {p('G')}oumiri {p('A')}li
                                </Typography>
                            </Box>
                            <Box className='flex justify-center'>
                                <Typography variant={isMobile ? 'h6' : 'h4'}>
                                    A {p('MERN')} FullStack focused
                                </Typography>
                            </Box>
                            <Box className='flex justify-center'>
                                <Typography variant={isMobile ? 'h6' : 'h4'}>
                                    {p('W')}eb {p('D')}eveloper
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='flex justify-center'>
                            <Typography
                                variant={isMobile ? 'caption' : 'subtitle1'}
                                className='text-justify text-gray-200 '
                            >
                                I design and code elegantly simple solutions, and engineer seamless
                                web applications that seamlessly blend form and function. I am
                                passionate about creating exceptional digital experiences, and I
                                genuinely enjoy what I do.
                            </Typography>
                        </Box>
                        <Box className='md:flex md:justify-center md:pb-10'>
                            <a
                                className='bg-[#6366f1] hover:bg-[#6366f1] md:scale-125 md:hover:scale-150 transition text-white py-2 px-5 justify-center flex rounded-full cursor-pointer'
                                onClick={() => window.open(CV_URL)}
                            >
                                Download CV
                            </a>
                        </Box>
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
            </Box>
        </div>
    )
}

export default Home
