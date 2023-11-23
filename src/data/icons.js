import { FaReact, FaAngular, FaPaintBrush, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiFirebase, SiTailwindcss } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { BsCodeSlash } from 'react-icons/bs'
import { FiDatabase } from 'react-icons/fi'
import { AiOutlineDesktop } from 'react-icons/ai'
import { MdAnimation } from 'react-icons/md'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiNodejsSmall } from 'react-icons/di'

const style = 'mx-auto md:text-[4rem] text-4xl text-primary'

export const servicesIcons = {
    FrontEnd: {
        icon: <AiOutlineDesktop className={style} />,
        about: 'Create Web Application using React or Angular framework',
    },
    BackEnd: {
        icon: <BsCodeSlash className={style} />,
        about: 'Create Backend with nodeJs, Python(flask) or use Firebase',
    },
    'Ui UX': {
        icon: <FaPaintBrush className={style} />,
        about: 'Design Web Application with Tailwind ,Materiel UI, PrimeFaces',
    },
    DataBase: {
        icon: <FiDatabase className={style} />,
        about: 'Manage DataBase with Sql, noSql or Firestore DataBase',
    },
    Animation: {
        icon: <MdAnimation className={style} />,
        about: 'Animate you website with framer motion',
    },
}

export const skillsIcons = (props) => {
    return {
        React: <FaReact color='#2196f3' className={style} {...props} />,
        NextJS: <TbBrandNextjs color='#080808' className={style} {...props} />,
        Javascript: <SiJavascript color='#ffdf00' className={style} {...props} />,
        NodeJS: <DiNodejsSmall color='#90c245' className={style} {...props} />,
        Firebase: <SiFirebase color='#ffa500' className={style} {...props} />,
        Angular: <FaAngular color='#9f1239' className={style} {...props} />,
        Tailwind: <SiTailwindcss color='#00C0A3' className={style} {...props} />,
        Python: <FaPython color='#ca8a04' className={style} {...props} />,
        Git: <FaGitAlt color='#f87171' className={style} {...props} />,
        MySql: <GrMysql color='#6366f1' className={style} {...props} />,
    }
}
