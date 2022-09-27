import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'

const ProjectCart = ({ img, url, github, name, desc, style }) => {
  const { dark } = useContext(DarkMode)

  return (
    <div className={`md:flex ${style} md:items-center md:pt-10 pt-24`}>
      <motion.div
        animate={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className=' md:w-[50%] flex flex-col items-center ml-4 transition duration-500'>
        <div className=' md:flex md:flex-col items-center text-center md:gap-6 pb-4 md:pb-0'>
          <p
            className={` ${
              dark
                ? 'text-[#27c7b7] before:bg-[#68fff1]'
                : 'text-rose-600 before:bg-rouse-600'
            }  bfont-bold uppercase lg:text-4xl md:text-3xl text-2xl relative before:absolute before:rounded-lg before:w-14 before:h-1  before:-bottom-1`}>
            {name}
          </p>
          <div
            className={`${
              dark ? 'text-gray-200' : 'text-gray-800'
            } capitalize lg:text-2xl md:text-xl text-sm md:w-[60%] w-[80%] mx-auto space-y-4 pt-4 md:pt-0`}>
            {desc}
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className='md:w-[50%] flex flex-col relative items-center transition-all duration-1000'>
        <img
          src={img}
          alt=''
          className='rounded-full hover:rounded-xl transition-all duration-700 opacity-80 hover:opacity-100'
          onClick={url}
        />
        <div className='absolute bottom-3 right-auto'>
          <a
            href={`https://` + url}
            className={` ${
              dark ? 'text-[#27c7b7]' : 'text-rose-600'
            }  bg-opacity-60 bg-neutral-200 hover:bg-slate-300 hover:bg-opacity-50 transition rounded-xl px-4 p-2 font-semibold md:text-lg text-sm`}>
            Open
          </a>{' '}
          <a
            href={`https://` + github}
            className={` ${
              dark ? 'text-[#27c7b7]' : 'text-rose-600'
            }  bg-opacity-60 bg-neutral-200 hover:bg-slate-300 hover:bg-opacity-50 transition rounded-xl px-4 p-2 font-semibold md:text-lg text-sm`}>
            Github
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCart
