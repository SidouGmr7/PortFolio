import { FaReact, FaAngular, FaPaintBrush, FaPython } from 'react-icons/fa'
import { SiJavascript, SiFirebase, SiTailwindcss } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { BsCodeSlash } from 'react-icons/bs'
import { FiDatabase } from 'react-icons/fi'
import { AiOutlineDesktop } from 'react-icons/ai'
import { BiBookContent } from 'react-icons/bi'
import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'

const ServiceItem = ({ Name, About, bol, d, x, y }) => {
  const { dark } = useContext(DarkMode)

  return (
    <motion.div
      drag
      animate={{ x: x, y: y, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: d }}
      className={`flex flex-col p-8 m-8 shadow-2xl transition border-slate-800 border-2 rounded-[10%] hover:scale-150 sm:w-52 ${
        dark
          ? 'bg-slate-700 bg-opacity-10 hover:bg-opacity-40 text-white'
          : ' hover:bg-slate-200 '
      }`}>
      {
        {
          Angular: <FaAngular className='  text-rose-800 mx-auto text-4xl' />,
          React: <FaReact color='#2196f3' className='mx-auto text-4xl ' />,
          Firebase: <SiFirebase color='orange' className='mx-auto text-4xl' />,
          Tailwind: (
            <SiTailwindcss color='#00C0A3' className='mx-auto text-4xl' />
          ),
          Javascript: (
            <SiJavascript color='#ffdf00' className='mx-auto text-4xl' />
          ),
          PrimeFaces: (
            <i className='pi pi-prime mx-auto text-4xl text-blue-400'></i>
          ),
          MySql: <GrMysql className='mx-auto text-4xl text-blue-900' />,
          Python: <FaPython className='mx-auto text-4xl text-yellow-600' />,

          FrontEnd: (
            <AiOutlineDesktop className='mx-auto text-4xl text-rose-600' />
          ),
          BackEnd: <BsCodeSlash className='mx-auto text-4xl text-rose-600' />,
          'Ui UX Design': (
            <FaPaintBrush className='mx-auto text-4xl text-rose-600' />
          ),
          DataBase: <FiDatabase className='mx-auto text-4xl text-rose-600' />,
          Content: <BiBookContent className='mx-auto text-4xl text-rose-600' />,
        }[Name]
      }
      <p
        className={`mt-6 text-xl  text-center ${
          bol === true ? 'text-rose-600 font-semibold' : ''
        } }`}>
        {Name}
      </p>
      <p className='mt-6 text-md text-gray-200 text-center'>{About}</p>
    </motion.div>
  )
}

export default ServiceItem
