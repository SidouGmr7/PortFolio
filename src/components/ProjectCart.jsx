import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'

const ProjectCart = ({ img, url, github }) => {
  const { dark } = useContext(DarkMode)

  return (
    <motion.div
      animate={{ x: 200 }}
      whileInView={{ x: 0 }}
      className='relative md:hover:scale-110 scale-90 hover:scale-95 md:scale-105 transition'>
      <img src={img} alt='' className='rounded-xl' />
      <div className='absolute md:bottom-3 bottom-3 right-3'>
        <a
          href={url}
          className=' text-rose-600 bg-opacity-60 bg-gray-500 hover:bg-black hover:bg-opacity-60 hover:scale-110 transition rounded-xl p-2 font-bold md:text-xl text-sm'>
          Open
        </a>{' '}
        <a
          href={github}
          className='text-rose-600 bg-opacity-60 bg-gray-500 hover:bg-black hover:bg-opacity-60 hover:scale-110 transition rounded-xl  p-2 font-bold md:text-xl text-sm'>
          Github
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCart
