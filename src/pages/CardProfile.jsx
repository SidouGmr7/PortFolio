import React from "react"
import SidouProfile from "../images/SidouProfile.jpg"
import Scroll from "../components/Scroll"
import SocialItem from "../components/SocialItem"
import { motion } from "framer-motion"
import Button from "../components/Button"

function Card() {
  return (
    <div className='relative w-full lg:h-screen md:pt-20 pt-12' id='profile'>
      <p className='headerTitle'>Profile</p>
      <div className='flex flex-col md:flex-row pt-12 md:pb-8 gap-10'>
        <motion.div
          className='md:w-[50%] transition'
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <div className='mr-10 pl-10 space-y-5 grid justify-items-center'>
            <h1 className='text-3xl text-primary pb-5  font-bold '>Get to know me !</h1>
            <p className='md:text-lg text-justify text-gray-200'>
              I'm a Frontend Web Developer building the Front-end of Websites and Web Applications
              that leads to the success of the overall product. Check out some of my work in the
              Projects section.
              <br />
              <br />
              I also like sharing content related to the stuff that I have learned over the years in
              Web Development so it can help other people of the Dev Community.
              <br />
              <br />
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a
              good opportunity that matches my skills and experience then don't hesitate to contact
              me.
            </p>
            <Button Name='Contact Me' Selector='#contact' />
          </div>
        </motion.div>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='lg:w-[25%] md:w-[40%] w-[80%] md:max-w-lg max-w-xs mx-auto shadow-2xl rounded-xl p-10  hover:scale-125 duration-500 transition'
        >
          <div className='hover:scale-105 duration-500 transition-all ease-in-out '>
            <img
              alt='sidou'
              src={SidouProfile}
              className='md:w-44 w-32 mx-auto shadow-2xl rounded-full drop-shadow-sm'
            />
          </div>
          <div className='text-center pt-2'>
            <div className='md:bg-slate-300 md:bg-opacity-10 hover:scale-105 duration-500 transition-all md:p-0 md:mx-0 p-4 -mx-10 rounded-full mb-1'>
              <p className='text-xs sm:text-base 0 pt-2 w-autotext-white'>
                <span className='text-primary'>IT engineer</span>
              </p>
              <p className='text-xs sm:text-base 0 pt-2 w-auto text-white'>FrontEnd developer</p>
              <p className='text-xs sm:text-base pt-2 px-5 w-auto inline-blocktext-white'>
                <span className='text-sky-400'>React</span> /
                <span className='text-yellow-300'> Firebase</span>
              </p>
              <p className='text-xs sm:text-base 0 pt-2 pb-3 w-auto text-zinc-400'>
                Number: 0664784130
              </p>
            </div>
            <div className='grid grid-cols-3 justify-center md:pl-10 pl-2 hover:scale-105 duration-500 transition-all max-h-500 ease-in-out bg-slate-300 bg-opacity-10 md:p-0 p-2 rounded-full'>
              <SocialItem
                name='Github'
                href='https://github.com/SidouGmr7/'
                Color='text-gray-900 hover:bg-gray-800'
              />
              <SocialItem
                name='Facebook'
                href='https://www.facebook.com/Sidali.Gmr/'
                Color='text-blue-600 hover:bg-blue-600'
              />
              <SocialItem
                name='Linkedin'
                href='https://www.linkedin.com/in/goumiri-ali-4bbba21a4/'
                Color='text-blue-500 hover:bg-blue-500'
              />
              <SocialItem
                name='Email'
                href='https://mailto:goumirisidali@hotmail.com'
                Color='text-teal-500 hover:bg-teal-500'
              />
              <SocialItem
                name='Instagram'
                href=' https://www.instagram.com/sidou_gmr/'
                Color='text-orange-600 hover:bg-orange-600'
              />
              <SocialItem
                name='Messanger'
                href=' https://www.facebook.com/messages/t/100009280429982'
                Color='text-blue-500 hover:bg-blue-500'
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Scroll selector='#service' />
    </div>
  )
}

export default Card
