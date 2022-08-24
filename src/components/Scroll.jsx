import React, { useContext } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'
import DarkMode from '../context/DarkMode'

const Scroll = ({ selector,bottom }) => {
  const { dark } = useContext(DarkMode)
  return (
      <ScrollIntoView selector={selector} className="absolute inset-x-0 bottom-0" >
        <div class={`mx-auto pb-${bottom}`}>
          <FaChevronDown
            class={`animate-bounce mx-auto text-4xl  ${
              dark ? 'text-rose-600' : 'text-black'
            }`}
          />
        </div>
      </ScrollIntoView>
  )
}

export default Scroll
