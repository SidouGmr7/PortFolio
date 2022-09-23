import { FaReact, FaAngular, FaPaintBrush, FaPython } from 'react-icons/fa'
import { SiJavascript, SiFirebase, SiTailwindcss } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { BsCodeSlash } from 'react-icons/bs'
import { FiDatabase } from 'react-icons/fi'
import { AiOutlineDesktop } from 'react-icons/ai'
import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'

const ServiceItem = ({ Name, About, bol }) => {
  const { dark } = useContext(DarkMode)

  return (
    <motion.div
      animate={{ x: 200, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileInView={{ x: 0, scale: 1, opacity: 1 }}
      className={`flex flex-col p-8 m-8 shadow-2xl rounded-xl  transition-transform duration-1000  sm:w-52 ${
        dark
          ? 'bg-slate-200 hover:bg-slate-800 hover:text-white text-black'
          : 'bg-slate-700 hover:bg-slate-100 hover:text-black text-slate-300 '
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
        }[Name]
      }
      <p
        className={`mt-6 text-xl font-semibold text-center ${
          bol === true ? 'text-rose-600' : ''
        } }`}>
        {Name}
      </p>
      <p className={`mt-6 text-md  text-center`}>{About}</p>
    </motion.div>
  )
}

export default ServiceItem
