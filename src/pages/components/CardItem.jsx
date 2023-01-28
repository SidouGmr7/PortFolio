import "primeicons/primeicons.css"
import { motion } from "framer-motion"
import { useContext } from "react"
import DarkMode from "../../context/DarkMode"
import { icon } from "./icons"

const CardItem = ({ Name, About, d, x, y }) => {
  const { dark } = useContext(DarkMode)

  return (
    <motion.div
      animate={{ x: x, y: y, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: d }}
      className={`flex flex-col p-8 m-8 shadow-2xl transition backdrop-blur-md  rounded-[10%] sm:w-52 ${
        dark
          ? "bg-slate-700 bg-opacity-10 hover:bg-opacity-40 text-white"
          : " hover:bg-slate-200 "
      }`}>
      {icon(Name)}
      <p className='mt-6 text-xl text-center text-rose-600 font-semibold'>
        {Name}
      </p>
      <p className={`mt-6 text-md ${dark && "text-gray-200"} text-center`}>
        {About}
      </p>
    </motion.div>
  )
}

export default CardItem
