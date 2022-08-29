import React, { useContext } from 'react'
import SidouProfile from '../images/SidouProfile.jpg'
import DarkMode from '../context/DarkMode'
import Scroll from '../components/Scroll'
import SocialItem from '../components/SocialItem'

function Card() {
  const { dark } = useContext(DarkMode)

  return (
    <div className='relative w-full h-screen pt-44' id='profile'>
      <div
        className={` md:max-w-lg max-w-xs mx-auto shadow-2xl  rounded-xl p-10 hover:scale-110 duration-500 transition-all ease-in-out ${
          dark
            ? 'bg-gradient-to-t from-slate-800 to-slate-500'
            : 'bg-gradient-to-r from-slate-200 to-blue-200 '
        } `}>
        <div className='md:float-left hover:scale-105 duration-500 transition-all ease-in-out '>
          <img
            alt='sidou'
            src={SidouProfile}
            className='md:w-44 w-32 mx-auto shadow-2xl rounded-full drop-shadow-sm'
          />
          <p
            className={`md:flex hidden  text-center justify-center text-xl  pt-2   ${
              dark ? 'text-gray-200' : 'text-gray-900 '
            }`}>
            Goumiri Ali
          </p>
        </div>
        <div className='text-center md:m-0 m-5'>
          <p
            className={` md:hidden text-xl sm:text-2xl font-semibold  ${
              dark ? 'text-white' : 'text-gray-900 '
            }`}>
            Goumiri Ali
          </p>
          <p
            className={`text-xs sm:text-base 0 pt-2 w-auto ${
              dark ? 'text-white' : 'text-gray-800 '
            }`}>
            <span className='text-rose-600'>IT engineer</span>
          </p>
          <p
            className={`text-xs sm:text-base 0 pt-2 w-auto ${
              dark ? 'text-white' : 'text-gray-800 '
            }`}>
            FrontEnd developer
          </p>
          <p
            className={`text-xs  sm:text-base  pt-2 pb-3 px-5 w-auto inline-block ${
              dark ? 'text-white' : 'text-gray-600'
            }`}>
            <span className='text-blue-400'>React</span> /
            <span className='text-yellow-300'> Firebase</span>
          </p>
          <div className='grid grid-cols-3 justify-center md:pl-10 pl-2 hover:scale-105 duration-500 transition-all ease-in-out '>
            <SocialItem
              name='Github'
              href='https://github.com/SidouGmr7/'
              Color='text-gray-800 hover:bg-gray-800'
            />
            <SocialItem
              name='Facebook'
              href='https://www.facebook.com/Sidali.Gmr/'
              Color='text-blue-600 hover:bg-blue-600'
            />
            <SocialItem
              name='Linkedin'
              href='https://www.linkedin.com/in/sidali-gmr-4bbba21a4/'
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
              href=' https://www.instagram.com/sidou_gmr/'
              Color='text-blue-500 hover:bg-blue-500'
            />
          </div>
        </div>
      </div>
      <Scroll selector='#tech' bottom='0' />
    </div>
  )
}

export default Card
