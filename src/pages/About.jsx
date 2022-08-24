import React from 'react'
import Scroll from '../components/Scroll'

function About() {
  return (
    <div id='about' className='relative h-screen p-44'>
      <div className='max-w-4xl mt-20 mx-auto'>
        <p className='text-2xl text-white  md:text-4xl font-bold text-center'>
          Hey 👋
        </p>
        <p className='text-base text-left md:text-center text-white  leading-relaxed mt-4 justify-center'>
          I'm a passionate web developer. I love creating content. I also love
          freelancing and contributing to open-source projects.
        </p>
      </div>
      <Scroll selector='#tech' bottom='0'/>
    </div>
  )
}

export default About
