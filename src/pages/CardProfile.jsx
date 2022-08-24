import React, { useContext } from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import Avatar from '@mui/material/Avatar'
import SidouProfile from '../images/SidouProfile.jpg'
import DarkMode from '../context/DarkMode'
import Scroll from '../components/Scroll'

function Card() {
  const { dark } = useContext(DarkMode)

  return (
    <div className='relative w-full md:h-screen md:pt-44 pb-20' id='profile'>
      <div
        className={` md:max-w-lg max-w-xs mx-auto shadow-2xl  rounded-xl p-10 duration-500 transition-all ease-in-out ${
          dark
            ? 'bg-gradient-to-t from-slate-800 to-slate-500'
            : 'bg-gradient-to-r from-slate-200 to-blue-200'
        } `}>
        <div className='md:float-left'>
          <img
            alt='sidou'
            src={SidouProfile}
            className='w-40 mx-auto shadow-2xl rounded-full drop-shadow-sm'
          />
        </div>
        <div className='text-center mt-5'>
          <p
            className={`text-xl sm:text-2xl font-semibold  ${
              dark ? 'text-white' : 'text-gray-900'
            }`}>
            Goumiri Ali
          </p>
          <p
            className={`text-xs sm:text-base 0 pt-2 w-auto ${
              dark ? 'text-white' : 'text-gray-800'
            }`}>
            FrontEnd developer
          </p>
          <p
            className={`text-xs  sm:text-base  pt-2 pb-3 px-5 w-auto inline-block ${
              dark ? 'text-white' : 'text-gray-600'
            }`}>
            React / Firebase
          </p>
          <div className='flex align-center justify-center mt-4'>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'
              href='https://github.com/SidouGmr7/'>
              <FaGithub />
              <span class='sr-only'>Github</span>
            </a>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300'
              href='https://www.facebook.com/Sidali.Gmr/'>
              <FaFacebook />
              <span class='sr-only'>Facebook</span>
            </a>
            <a
              className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'
              href='https://www.linkedin.com/in/sidali-gmr-4bbba21a4/'>
              <FaLinkedin />
              <span class='sr-only'>Linkedin</span>
            </a>
            <a
              className='pb- text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300'
              href='https://mailto:goumirisidali@hotmail.com'>
              <FaRegEnvelope />
              <span class='sr-only'>Email</span>
            </a>
          </div>
        </div>
      </div>
      <Scroll selector='#tech' bottom='0' />
    </div>
  )
}

export default Card
