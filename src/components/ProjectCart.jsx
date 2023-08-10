import { useState } from "react"
import "primeicons/primeicons.css"
import { motion, AnimatePresence } from "framer-motion"
import { Grid } from "@mui/material"

const ProjectCart = (props) => {
  const { url, github, name, desc } = props
  const [isHovered, setIsHovered] = useState(false)
  const img = require("../images/" + props.img)

  return (
    <Grid xs={12} sm={6} md={4} className='p-4'>
      <motion.div
        animate={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='transition-all duration-1000 '
      >
        <div className='rounded-xl relative overflow-hidden group'>
          <a href={url}>
            <img src={img} alt='images' />
            <AnimatePresence>
              <div
                className={
                  isHovered &&
                  "transition-all duration-500 absolute inset-0 bg-[#141c3a] bg-opacity-80 flex justify-center items-center"
                }
              >
                {isHovered && (
                  <>
                    <div className='items-center text-center lg:mb-10'>
                      <p className='text-primary uppercase lg:text-3xl md:text-md text-xl'>
                        {name}
                      </p>
                      <div className='text-gray-300 capitalize lg:text-lg md:text-xs text-sm md:w-[60%] w-[80%] mx-auto pt-4'>
                        {desc}
                      </div>
                    </div>
                    {url && (
                      <a
                        href={url}
                        className='text-primary backdrop-blur-lg hover:bg-slate-600 hover:bg-opacity-50 transition rounded-xl px-4 p-2 font-semibold lg:text-lg md:text-md text-xs absolute bottom-1 left-1 border border-[#68fff1]'
                      >
                        Visit Website
                      </a>
                    )}
                    {github && (
                      <a
                        href={github}
                        className='text-primary backdrop-blur-lg hover:bg-slate-600 hover:bg-opacity-50 transition rounded-xl px-4 p-2 font-semibold lg:text-lg md:text-md text-xs absolute bottom-1 right-1 border border-[#68fff1]'
                      >
                        Github
                      </a>
                    )}
                  </>
                )}
              </div>
            </AnimatePresence>
          </a>
        </div>
      </motion.div>
    </Grid>
  )
}

export default ProjectCart
