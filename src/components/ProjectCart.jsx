import { useState } from 'react'
import 'primeicons/primeicons.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Grid, Chip, useMediaQuery ,Box} from '@mui/material'
import { FaFirefoxBrowser, FaGithub } from 'react-icons/fa'
import { Chips } from './Chips'

const ProjectCart = (props) => {
    const { url, github, name, desc, frameworks, contribution } = props
    const isMobile = useMediaQuery('(max-width: 700px)')
    const [isHovered, setIsHovered] = useState(false)
    const img = require('../images/' + props.img)

    return (
        <Grid xs={6} sm={6} md={4} className='p-4'>
            <motion.div
                animate={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                className='transition-all duration-1000 '
            >
                <div className='rounded-xl relative overflow-hidden group'>
                    <a href={url}>
                        <img src={img} alt='images' />
                        <AnimatePresence>
                            <div
                                className={
                                    isHovered &&
                                    'transition-all duration-500 absolute inset-0 bg-[#141c3a] bg-opacity-80 flex justify-center items-center'
                                }
                            >
                                {isHovered && (
                                    <>
                                        <div className='items-center text-center lg:mb-10'>
                                            <p className='text-primary uppercase xl:text-2xl lg:text-md text-xs'>
                                                {name}
                                            </p>
                                            <div className='hidden xl:block text-gray-300 capitalize text-md mx-auto pt-4'>
                                                {desc}
                                            </div>
                                        </div>
                                        <div className='flex flex-row space-x-2 absolute top-3 right-3'>
                                            {github && !contribution && (
                                                <FaGithub
                                                    href={github}
                                                    className='md:text-2xl hover:scale-150 transition'
                                                    color='#010409'
                                                />
                                            )}
                                            {url && !contribution && (
                                                <FaFirefoxBrowser
                                                    href={url}
                                                    className='md:text-2xl hover:scale-150 transition'
                                                    color='#fd414a'
                                                />
                                            )}
                                        </div>
                                        {url && contribution && (
                                            <div className='backdrop-blur-lg hover:bg-slate-600 hover:bg-opacity-50 transition rounded-full md:font-semibold absolute bottom-1 left-50%'>
                                                <Chip
                                                    icon={
                                                        <FaFirefoxBrowser
                                                            href={url}
                                                            className='md:text-xl'
                                                            color='#fd414a'
                                                        />
                                                    }
                                                    label='Visit Website'
                                                    color='primary'
                                                    variant='outlined'
                                                    sx={{
                                                        ...(isMobile && {
                                                            fontSize: '0.5rem',
                                                            width: '5rem',
                                                            height: '1rem',
                                                        }),
                                                        ...(!isMobile && {
                                                            marginBottom: '0.4rem',
                                                            padding: '1.2rem',
                                                        }),
                                                    }}
                                                />
                                            </div>
                                        )}
                                        {frameworks && (
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: { xs: 1, md: 3 },
                                                    left: { xs: 1, md: 2 },
                                                }}
                                            >
                                                <Chips frameworks={frameworks} />
                                            </Box>
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
