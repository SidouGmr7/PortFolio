import CardProfile from './CardProfile'
import Skills from './Skills'
import ContactMe from './Contact'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'
import Services from './Services'
import Projects from './Projects'

const Content = () => {
  const { dark } = useContext(DarkMode)

  return (
    <div
      className={`py-10 sm:px-5 overflow-hidden scrollbar-hide dark ${dark ? 'bg-slate-900' : 'bg-slate-100'} `}>
      <CardProfile />
      <Services />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Content
