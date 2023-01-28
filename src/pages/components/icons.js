import { FaReact, FaAngular, FaPaintBrush, FaPython } from "react-icons/fa"
import { SiJavascript, SiFirebase, SiTailwindcss } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { BsCodeSlash } from "react-icons/bs"
import { FiDatabase } from "react-icons/fi"
import { AiOutlineDesktop } from "react-icons/ai"
import { BiBookContent } from "react-icons/bi"
import { MdAnimation } from "react-icons/md"

export const icon = (Name) => {
  const icons = {
    Angular: <FaAngular className='  text-rose-800 mx-auto text-4xl' />,
    React: <FaReact color='#2196f3' className='mx-auto text-4xl ' />,
    Firebase: <SiFirebase color='orange' className='mx-auto text-4xl' />,
    Tailwind: <SiTailwindcss color='#00C0A3' className='mx-auto text-4xl' />,
    Javascript: <SiJavascript color='#ffdf00' className='mx-auto text-4xl' />,
    PrimeFaces: <i className='pi pi-prime mx-auto text-4xl text-blue-400'></i>,
    MySql: <GrMysql className='mx-auto text-4xl text-blue-900' />,
    Python: <FaPython className='mx-auto text-4xl text-yellow-600' />,
    FrontEnd: <AiOutlineDesktop className='mx-auto text-4xl text-rose-600' />,
    BackEnd: <BsCodeSlash className='mx-auto text-4xl text-rose-600' />,
    "Ui UX Design": <FaPaintBrush className='mx-auto text-4xl text-rose-600' />,
    DataBase: <FiDatabase className='mx-auto text-4xl text-rose-600' />,
    Content: <BiBookContent className='mx-auto text-4xl text-rose-600' />,
    Animation: <MdAnimation className='mx-auto text-4xl text-rose-600' />,
  }[Name]
  return icons
}
