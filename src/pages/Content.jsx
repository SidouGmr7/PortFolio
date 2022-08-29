import CardProfile from './CardProfile'
import Skills from './Skills'
import ContactMe from './Contact'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'
import Services from './Services'


const Content = () => {
  const { dark } = useContext(DarkMode)

  return (
    <div
      className={`py-10 sm:px-5 bg-white-100 overflow-hidden dark ${
        dark ? 'bg-gray-900' : 'bg-gradient-to-r from-slate-200 to-cyan-50'
      }`}>
      <CardProfile />
      <Services />
      <Skills />
      <ContactMe />
    </div>
  )
}

export default Content
