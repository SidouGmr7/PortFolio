import { FaAngular } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiJavascript, SiFirebase } from 'react-icons/si'
import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'
const SkillsItem = ({ Name }) => {
  const { dark } = useContext(DarkMode)

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 200 }}
      whileInView={{ x: 0, scale: 1 }}
      className={`flex flex-col p-10 m-6  overflow-hidden shadow-2xl rounded-xl sm:w-52 ${
        dark
          ? 'bg-gradient-to-t from-slate-300 to-slate-200'
          : 'bg-gradient-to-r from-slate-100 to-cyan-100'
      }`}>
      {
        {
          Angular: <FaAngular className='  text-rose-700 mx-auto text-4xl' />,
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
        }[Name]
      }
      <p className={`mt-6 text-xl font-semibold text-center ${dark && ''}`}>
        {Name}
      </p>
    </motion.div>
  )
}

export default SkillsItem
