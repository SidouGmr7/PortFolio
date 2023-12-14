import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { SectionWrapper } from '../components/SectionWrapper'
import { Box } from '@mui/material'

function Card() {
    return (
        <SectionWrapper
            id='profile'
            selector='#timeLine'
            className='xl:h-screen px-10 xl:px-60'
            title='Get to know me !'
        >
            <motion.div
                className='transition'
                animate={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
            >
                <Box sx={{ display: 'grid', justifyItems: 'center' }}>
                    {' '}
                    <p className='md:text-lg md:p-0 pb-10 text-sm text-center text-gray-200 lg:m-20'>
                        I'm a FullStack MERN Web Developer building a Projects that leads to the
                        success of the overall product. Check out some of my work in the Projects
                        section.
                        <br />
                        <br />
                        I also like sharing content related to the stuff that I have learned over
                        the years in Web Development so it can help other people of the Dev
                        Community.
                        <br />
                        <br />
                        I'm open to Job opportunities where I can contribute, learn and grow. If you
                        have a good opportunity that matches my skills and experience then don't
                        hesitate to contact me.
                    </p>
                    <Button Name='Contact Me' Selector='#contact' />
                </Box>{' '}
            </motion.div>
        </SectionWrapper>
    )
}

export default Card
