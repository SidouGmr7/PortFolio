import { DarkModeProvider } from './context/DarkMode'
import Content from './pages/Content'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
