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
      style={{ background: `${dark ? '#111111' : '#f9fbfd'} ` }}
      className={`py-10 sm:px-5 bg-white-100 overflow-hidden scrollbar-hide dark'}`}>
      <CardProfile />
      <Services />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Content
