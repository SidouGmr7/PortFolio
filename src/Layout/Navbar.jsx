import { motion } from 'framer-motion'
import SidouProfile2 from '../images/SidouProfile2.jpg'
import { FiSun } from 'react-icons/fi'
import ScrollIntoView from 'react-scroll-into-view'

const Navbar = () => {
    return (
        <header className='fixed z-50 pt-4 pb-2 w-screen backdrop-blur-sm'>
            <div className='md:flex w-full h-full items-center justify-between'>
                <div className='flex items-center justify-center'>
                    <motion.div
                        whileTap={{ rotate: 180 }}
                        whileHover={{ rotate: 60 }}
                        className='md:text-xl m-1 p-1 sm:m-2 sm:p-2 rounded-full transition text-black hover:bg-black hover:text-white'
                        onClick={null}
                    >
                        <FiSun />
                    </motion.div>
                    <div className='flex items-center gap-2'>
                        <p className='md:text-xl text-white'>
                            <span className='text-primary font-bold'>GMR</span>{' '}
                            <span className='text-primary font-bold'>P</span>ORT
                            <span className='text-primary font-bold'>F</span>OLIO
                        </p>
                    </div>
                </div>
                <div className='md:flex hidden gap-8'>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-10'
                    >
                        <NavbarItem Name='Home' Selector='#home' />
                        <NavbarItem Name='About' Selector='#profile' />
                        <NavbarItem Name='Service' Selector='#service' />
                        <NavbarItem Name='Skills' Selector='#tech' />
                        <NavbarItem Name='My Project' Selector='#projects' />
                        <NavbarItem Name='Project Contribution' Selector='#projectsc' />
                        <NavbarItem Name='Contact' Selector='#contact' />
                    </motion.ul>
                </div>
                <div className='md:flex hidden mr-14'>
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={SidouProfile2}
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
                        alt='userprofile'
                    />
                </div>
            </div>
        </header>
    )
}

export default Navbar

const NavbarItem = ({ Selector, Name }) => {
    return (
        <li className='text-lg hover:scale-110 transition cursor-pointer text-white'>
            <ScrollIntoView selector={Selector}>
                <p className='hover:text-primary'>{Name}</p>
            </ScrollIntoView>
        </li>
    )
}
