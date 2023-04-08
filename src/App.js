import { DarkModeProvider } from './context/DarkMode'
import Content from './pages/Content'
import Home from './pages/Home'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import ContactMe from './pages/Contact'

function App() {
  return (
    <DarkModeProvider>
    <div className='overflow-hidden'>
      <Navbar />
      <Home />
      <Content />
      <ContactMe />
      <Footer />
    </div>
    </DarkModeProvider>
  )
}
export default App
