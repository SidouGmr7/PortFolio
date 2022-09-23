import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'

const ProjectCart = ({ img, url, github, x, y }) => {
  return (
    <motion.div
      animate={{ x: x, y: y, opacity: 0 }}
      whileHover={{ scale: 1.1, rotate: 1.2 }}
      whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      className='relative transition duration-1000 m-6 md:m-0 shadow-2xl'>
      <img src={img} alt='' className='rounded-xl' onClick={url} />
      <div className='absolute md:bottom-2 bottom-3 right-3'>
        <a
          href={url}
          className=' text-rose-600 bg-opacity-60 bg-neutral-200 hover:bg-black hover:bg-opacity-50 transition rounded-xl px-2 p-1 font-semibold md:text-lg text-sm'>
          Open
        </a>{' '}
        <a
          href={github}
          className='text-rose-600 bg-opacity-60 bg-gray-200 hover:bg-black hover:bg-opacity-50 transition rounded-xl  px-2 p-1 font-semibold md:text-lg text-sm'>
          Github
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCart
