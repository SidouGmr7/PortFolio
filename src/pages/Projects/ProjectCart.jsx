import "primeicons/primeicons.css"
import { motion } from "framer-motion"

const ProjectCart = (props) => {
    const { url, github, name, desc, index } = props
    const img = require("../../images/" + props.img)

    return (
        <div
            className={`md:flex ${
                index % 2 ? "md:flex-row-reverse" : "md:flex-row"
            } md:items-center md:pt-10 pt-24`}>
            <motion.div
                animate={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className='md:w-[50%] flex flex-col items-center ml-4 transition duration-500 '>
                <div className='md:flex md:flex-col items-center text-center md:gap-6 pb-4 md:pb-0'>
                    <p className='text-primary before:bg-secondary uppercase lg:text-4xl md:text-3xl text-2xl relative before:absolute before:rounded-lg before:w-14 before:h-[3px]  before:-bottom-1'>
                        {name}
                    </p>
                    <div className='text-gray-300 capitalize lg:text-2xl md:text-xl text-sm md:w-[60%] w-[80%] mx-auto space-y-4 pt-4 md:pt-0'>
                        {desc}
                    </div>
                </div>
            </motion.div>
            <motion.div
                animate={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className='md:w-[50%] flex flex-col relative items-center transition-all duration-1000'>
                <a href={url}>
                    <img
                        src={img}
                        alt='images'
                        className='rounded-full hover:rounded-3xl transition-all duration-200 opacity-80'
                    />
                </a>
                <div className='absolute bottom-3 right-auto'>
                    <a
                        href={url ?? null}
                        className='text-primary backdrop-blur-lg hover:bg-slate-400 hover:bg-opacity-50 transition rounded-xl px-4 p-2 font-semibold md:text-lg text-sm'>
                        Open
                    </a>
                    {github && (
                        <a
                            href={github}
                            className='text-primary backdrop-blur-lg hover:bg-slate-400 hover:bg-opacity-50 transition rounded-xl px-4 p-2 font-semibold md:text-lg text-sm'>
                            Github
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCart
