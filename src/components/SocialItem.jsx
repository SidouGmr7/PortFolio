import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaRegEnvelope,
  FaInstagram,
  FaFacebookMessenger,
} from 'react-icons/fa'

const SocialItem = ({ name, href, Color }) => {
  const { dark } = useContext(DarkMode)
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      initial={{ x: 50 }}
      whileInView={{ x: 0, scale: 1 }}
      className={`text-xl  p-2 m-2 w-9 justify-center text-${Color} hover:bg-${Color} rounded-full hover:text-white transition-colors duration-300`}
      href={href}>
      {
        {
          Github: <FaGithub />,
          Facebook: <FaFacebook />,
          Linkedin: <FaLinkedin />,
          Email: <FaRegEnvelope />,
          Instagram: <FaInstagram />,
          Messanger: <FaFacebookMessenger />,
        }[name]
      }
    </motion.a>
  )
}

export default SocialItem
