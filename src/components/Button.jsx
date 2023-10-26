import React from "react"
import ScrollIntoView from "react-scroll-into-view"
import { motion } from "framer-motion"

const Button = ({ Name, Selector }) => {
    return (
        <motion.div
            className='box'
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <button className='bg-[#6366f1] hover:bg-[#6366f1] md:scale-125 md:hover:scale-150 transition text-white py-2 px-5 rounded-full'>
                <ScrollIntoView selector={Selector}>{Name}</ScrollIntoView>
            </button>
        </motion.div>
    )
}

export default Button
