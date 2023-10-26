import 'primeicons/primeicons.css'
import { motion } from 'framer-motion'

import {
    FaGithub,
    FaFacebook,
    FaLinkedin,
    FaRegEnvelope,
    FaInstagram,
    FaFacebookMessenger,
} from 'react-icons/fa'

const SocialItem = ({ name, href, Color }) => {
    const style = 'md:text-4xl text-md'
    return (
        <motion.a
            whileHover={{ scale: 1.1 }}
            initial={{ x: 20 }}
            whileInView={{ x: 0, scale: 1 }}
            className={`text-xl p-4 m-2 justify-center ${Color} rounded-full hover:text-white transition-colors duration-300`}
            href={href}
        >
            {
                {
                    Github: <FaGithub className={style} />,
                    Facebook: <FaFacebook className={style} />,
                    Linkedin: <FaLinkedin className={style} />,
                    Email: <FaRegEnvelope className={style} />,
                    Instagram: <FaInstagram className={style} />,
                    Messanger: <FaFacebookMessenger className={style} />,
                }[name]
            }
        </motion.a>
    )
}

export default SocialItem
