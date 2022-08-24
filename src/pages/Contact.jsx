import { useContext } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import DarkMode from '../context/DarkMode'

export default function ContactMe() {
  const { dark } = useContext(DarkMode)

  return (
    <div
      className='max-w-lg w-full  text-center m-auto pt-72 pb-40 justify-center items-center'
      id='contact'>
      <h1 className={`text-4xl ${dark && 'text-white'}`}>
        Interested in working together?
      </h1>
      <a
        href='mailto:goumirisidali@hotmail.com'
        className={`flex hover:scale-105 duration-200 bg-rose-600 transition-all ease-in-out items-center justify-center mt-10 ml-40 w-48  md:text-xl py-4 px-5 cursor-pointer ${
          dark ? ' text-white' : ' text-black'
        }`}>
        <span className='mr-3 '>Get in touch</span>
        <FaArrowRight color={`${dark ? 'white' : 'black'}`} />
      </a>
    </div>
  )
}
