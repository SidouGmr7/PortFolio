import { motion } from 'framer-motion'
import SidouProfile2 from '../images/SidouProfile2.jpg'
import NavbarItem from '../components/NavbarItem'
import { FiSun } from 'react-icons/fi'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'

const Navbar = () => {
  const { dark, changeMode } = useContext(DarkMode)

  return (
    <header className={`fixed z-50 mt-4 w-screen bg-primary `}>
      <div className='md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center justify-center'>
          <div
            className={`text-xl m-1 p-1 sm:m-2 sm:p-2 rounded-full transition ${
              dark
                ? 'text-white hover:bg-white hover:text-black '
                : 'text-black hover:bg-black hover:text-white'
            }`}
            onClick={changeMode}>
            <FiSun />
          </div>
          <div className='flex items-center gap-2'>
            <p
              className={` text-xl ${
                dark && 'text-white'
              }`}>
              MY {''}
               <span className='text-rose-600 font-bold'>P</span>ORT
              <span className='text-rose-600 font-bold'>F</span>OLIO
            </p>
          </div>
        </div>
        <div className='md:flex hidden items-center gap-8 mr-14'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-10'>
            <NavbarItem Name='Home' Selector='#home' dark={dark} />
            <NavbarItem Name='About' Selector='#profile' dark={dark} />
            <NavbarItem Name='Skills' Selector='#tech' dark={dark} />
            <NavbarItem Name='Service' Selector='#service' dark={dark} />

            <NavbarItem Name='Contact' Selector='#contact' dark={dark} />
          </motion.ul>
          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={SidouProfile2}
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
              alt='userprofile'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
