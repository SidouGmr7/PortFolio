import CardProfile from './CardProfile'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'
import Services from './Services'
import Projects from './Projects'

const Content = () => {
  const { dark } = useContext(DarkMode)

  return (
    <div
      className={`py-10 sm:px-5 overflow-hidden scrollbar-hide dark bg-opacity-90  ${dark ? 'bg-slate-900' : 'bg-slate-100'} `}>
      <CardProfile />
      <Services />
      <Projects />
    </div>
  )
}

export default Content
