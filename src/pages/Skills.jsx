import React from 'react'
import ServiceItem from '../components/ServiceItem'
import Scroll from '../components/Scroll'

function Skills() {
  return (
    <div
      className='relative max-w-4xl lg:h-screen mx-auto py-12'
      id='tech'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
        Tech I Use
      </p>

      <div className='grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  pt-10'>
        <ServiceItem Name='React' d={0.5} />
        <ServiceItem Name='Angular' d={0.7} />
        <ServiceItem Name='Firebase' d={1} />
        <ServiceItem Name='Tailwind'd={1.5} />
        <ServiceItem Name='Javascript' d={1.5} />
        <ServiceItem Name='PrimeFaces'd={1.7} />
        <ServiceItem Name='MySql' d={2}/>
        <ServiceItem Name='Python'd={2.5} />
      </div>
      <Scroll selector='#projects' bottom='0' />
    </div>
  )
}

export default Skills
