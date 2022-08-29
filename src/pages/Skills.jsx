import React from 'react'
import ServiceItem from '../components/ServiceItem'
import Scroll from '../components/Scroll'

function Skills() {
  return (
    <div
      className='relative max-w-3xl md:h-screen mx-auto py-12'
      id='tech'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-4'>
        Tech I Use
      </p>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 pt-10'>
        <ServiceItem Name='React' />
        <ServiceItem Name='Angular' />
        <ServiceItem Name='Firebase' />
        <ServiceItem Name='Tailwind' />
        <ServiceItem Name='Javascript' />
        <ServiceItem Name='PrimeFaces' />
      </div>
      <Scroll selector='#service' bottom='0' />
    </div>
  )
}

export default Skills
