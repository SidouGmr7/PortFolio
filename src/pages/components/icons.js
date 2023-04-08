import { FaReact, FaAngular, FaPaintBrush, FaPython, FaGitAlt, FaBootstrap } from "react-icons/fa"
import { SiJavascript, SiFirebase, SiTailwindcss } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { BsCodeSlash } from "react-icons/bs"
import { FiDatabase } from "react-icons/fi"
import { AiOutlineDesktop } from "react-icons/ai"
import { BiBookContent } from "react-icons/bi"
import { MdAnimation } from "react-icons/md"
import razzle from "../../images/logo/razzle.png"

export const servicesIcons = {
    FrontEnd: {
        icon: <AiOutlineDesktop className='mx-auto text-[4rem] text-primary' />,
        about: "Create Web Application using React or Angular framework",
    },
    BackEnd: {
        icon: <BsCodeSlash className='mx-auto text-[4rem] text-primary' />,
        about: "Create Backend with nodeJs, Python(flask) or Firebase",
    },
    "Ui UX Design": {
        icon: <FaPaintBrush className='mx-auto text-[4rem] text-primary' />,
        about: "Design Web Application with Tailwind ,Materiel UI, PrimeFaces",
    },
    DataBase: {
        icon: <FiDatabase className='mx-auto text-[4rem] text-primary' />,
        about: "Manage DataBase with MySql or Firestore DataBase",
    },
    Content: {
        icon: <BiBookContent className='mx-auto text-[4rem] text-primary' />,
        about: "Create the best content of your website",
    },
    Animation: {
        icon: <MdAnimation className='mx-auto text-[4rem] text-primary' />,
        about: "Animate you website with framer motion",
    },
}

export const skillsIcons = {
    React: <FaReact color='#2196f3' className='mx-auto text-[4rem] ' />,
    Javascript: <SiJavascript color='#ffdf00' className='mx-auto text-[4rem]' />,
    Firebase: <SiFirebase color='orange' className='mx-auto text-[4rem]' />,
    Razzle: <img src={razzle} alt='razzle' className='w-[4rem]'></img>,
    Angular: <FaAngular className='text-rose-800 mx-auto text-[4rem]' />,
    Tailwind: <SiTailwindcss color='#00C0A3' className='mx-auto text-[4rem]' />,
    Python: <FaPython className='mx-auto text-[4rem] text-yellow-600' />,
    Bootstrap: <FaBootstrap className='mx-auto text-[4rem] text-blue-400' />,
    Git: <FaGitAlt className='mx-auto text-[4rem] text-red-400' />,
    MySql: <GrMysql className='mx-auto text-[4rem] text-blue-900' />,
}
