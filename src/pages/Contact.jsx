import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

export default function ContactMe() {
  return (
    <motion.div
      animate={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      className='transition max-w-lg text-center m-auto py-52'
      id='contact'
    >
      <h1 className='md:text-4xl backdrop-blur-sm p-4 font-bold rounded-full text-primary'>
        Interested in working together?
      </h1>
      <a
        href='mailto:goumirisidali@hotmail.com'
        className='flex hover:scale-105 duration-200 bg-[#6366f1] transition-all ease-in-out items-center justify-center mt-10 ml-40 md:w-48 w-40 md:text-xl md:p-4 p-2 rounded-sm  cursor-pointer text-gray-200'
      >
        <span className='mr-3 '>Get in touch</span>
        <FaArrowRight color='white' />
      </a>
    </motion.div>
  )
}
