import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

const Button = ({Name, Selector}) => {
  return (
    <button className='bg-[#04998a] hover:bg-[#04998a] md:scale-125 md:hover:scale-150 transition text-white py-2 px-5 rounded-full'>
      <ScrollIntoView selector={Selector}>{Name}</ScrollIntoView>
    </button>
  )
}

export default Button
