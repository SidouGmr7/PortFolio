import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import SocialItem from '../components/SocialItem'

function Footer() {
  return (
    <div className='py-5 border-t-3/2'>
      <div className='flex gap-2 justify-center mt-4 md:gap-8'>
            <SocialItem name='Github' href='https://github.com/SidouGmr7/' Color='text-gray-800 hover:bg-gray-800'/>
            <SocialItem name='Facebook' href='https://www.facebook.com/Sidali.Gmr/' Color='text-blue-600 hover:bg-blue-600'/>
            <SocialItem name='Linkedin' href='https://www.linkedin.com/in/sidali-gmr-4bbba21a4/' Color='text-blue-500 hover:bg-blue-500'/>
            <SocialItem name='Email' href='https://mailto:goumirisidali@hotmail.com' Color='text-teal-500 hover:bg-teal-500'/>
            <SocialItem name='Instagram' href=' https://www.instagram.com/sidou_gmr/' Color='text-orange-600 hover:bg-orange-600'/>
            <SocialItem name='Messanger' href=' https://www.instagram.com/sidou_gmr/' Color='text-blue-500 hover:bg-blue-500'/>
      </div>
      <div className='flex align-center justify-center mt-4 md:text-xl'>
        <p className='text-black mb-4'>
          Made by
          <a className='text-rose-600' href='mailto:goumirisidali@hotmail.com'>
            {' '}
            Goumiri Ali
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
