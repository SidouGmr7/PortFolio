import "primeicons/primeicons.css"
import { motion } from "framer-motion"

const CardItem = (props) => {
    const { title,icon, about, index } = props
    return (
        <motion.div
            animate={{ x: 100, y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 + index / 20 }}
            className='flex flex-col items-center p-7 m-7 shadow-2xl transition backdrop-blur-md rounded-[10%] sm:w-52 bg-slate-700 bg-opacity-10 hover:bg-opacity-40 text-white'>
            {icon}
            <p
                className={`mt-6 text-xl text-center ${
                    about ? "text-primary" : "text-gray-100"
                } font-semibold`}>
                {title}
            </p>
            <p className='mt-6 text-md text-gray-200 text-center'>{about}</p>
        </motion.div>
    )
}

export default CardItem
