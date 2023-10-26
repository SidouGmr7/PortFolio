import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { SectionWrapper } from '../components/SectionWrapper'

function Card() {
    return (
        <SectionWrapper
            id='profile'
            selector='#timeLine'
            className='lg:h-screen'
            title='Get to know me !'
        >
            <motion.div
                className='transition'
                animate={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
            >
                <div className='mr-10 pl-10 space-y-5 grid justify-items-center'>
                    <p className='md:text-lg text-justify text-gray-200 lg:m-20'>
                        I'm a Frontend Web Developer building the Front-end of Websites and Web
                        Applications that leads to the success of the overall product. Check out
                        some of my work in the Projects section.
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
                </div>
            </motion.div>
        </SectionWrapper>
    )
}

export default Card
