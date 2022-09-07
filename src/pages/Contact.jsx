import { motion } from 'framer-motion'
import { useContext } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import DarkMode from '../context/DarkMode'

export default function ContactMe() {
  const { dark } = useContext(DarkMode)

  return (
    <motion.div
      animate={{ x: 200 }}
      whileInView={{ x: 0 }}
      className='transition max-w-lg md:h-screen text-center m-auto md:py-72 py-52'
      id='contact'>
      <h1 className={`md:text-4xl ${dark && 'text-white'}`}>
        Interested in working together?
      </h1>
      <a
        href='mailto:goumirisidali@hotmail.com'
        className={`flex hover:scale-105 duration-200 bg-rose-600 transition-all ease-in-out items-center justify-center mt-10 ml-40 md:w-48 w-40 md:text-xl md:p-4 p-2 rounded-sm  cursor-pointer ${
          dark ? ' text-white' : ' text-black'
        }`}>
        <span className='mr-3 '>Get in touch</span>
        <FaArrowRight color={`${dark ? 'white' : 'black'}`} />
      </a>
    </motion.div>
  )
}
