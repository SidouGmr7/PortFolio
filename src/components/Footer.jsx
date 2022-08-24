import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <div className='py-5 border-t-3/2'>
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
          className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300'
          href='https://mailto:goumirisidali@hotmail.com'>
          <FaRegEnvelope />
          <span class='sr-only'>Email</span>
        </a>
      </div>
      <div className='flex align-center justify-center mt-4'>
        <p className='text-black mb-4'>
          Made with{' '}
          <span className='mr-2' role='img' aria-label='heart'>
            💙{' '}
          </span>
          by
          <a
            className='text-blue-500 hover:underline'
            href='mailto:goumirisidali@hotmail.com'>
            {' '}
            Goumiri Ali
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
