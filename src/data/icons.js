import { FaReact, FaAngular, FaPaintBrush, FaPython, FaGitAlt } from "react-icons/fa"
import { SiJavascript, SiFirebase, SiTailwindcss } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { BsCodeSlash } from "react-icons/bs"
import { FiDatabase } from "react-icons/fi"
import { AiOutlineDesktop } from "react-icons/ai"
import { MdAnimation } from "react-icons/md"
import { TbBrandNextjs } from "react-icons/tb"
import { DiNodejsSmall } from "react-icons/di"

const style = 'mx-auto md:text-[4rem] text-4xl text-primary'

export const servicesIcons = {
  FrontEnd: {
    icon: <AiOutlineDesktop className={style} />,
    about: "Create Web Application using React or Angular framework",
  },
  BackEnd: {
    icon: <BsCodeSlash className={style} />,
    about: "Create Backend with nodeJs, Python(flask) or use Firebase",
  },
  "Ui UX": {
    icon: <FaPaintBrush className={style} />,
    about: "Design Web Application with Tailwind ,Materiel UI, PrimeFaces",
  },
  DataBase: {
    icon: <FiDatabase className={style} />,
    about: "Manage DataBase with Sql, noSql or Firestore DataBase",
  },
  Animation: {
    icon: <MdAnimation className={style} />,
    about: "Animate you website with framer motion",
  },
}

export const skillsIcons = {
  React: <FaReact color='#2196f3' className={style} />,
  Javascript: <SiJavascript color='#ffdf00' className={style} />,
  Firebase: <SiFirebase color='orange' className={style} />,
  Angular: <FaAngular className={`${style} text-rose-800`} />,
  Tailwind: <SiTailwindcss color='#00C0A3' className={style} />,
  Python: <FaPython className={`${style} text-yellow-600`} />,
  Bootstrap: <DiNodejsSmall className={`${style} text-green-500`} />,
  Git: <FaGitAlt className={`${style} text-red-400`} />,
  MySql: <GrMysql className={`${style} text-blue-900`} />,
  NextJS: <TbBrandNextjs className={`${style} text-black`} />,
}
