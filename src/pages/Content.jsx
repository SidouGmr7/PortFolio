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
    style={{
      background: `${dark ? '#1b2a4e' : '#f9fbfd' } `,
     
    }}      className={`py-10 sm:px-5 bg-white-100 overflow-hidden dark'
      }`}>
      <CardProfile />
      <Services />
      <Skills />
      <ContactMe />
    </div>
  )
}

export default Content
