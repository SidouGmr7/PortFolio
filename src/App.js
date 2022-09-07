import { DarkModeProvider } from './context/DarkMode'
import Content from './pages/Content'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
      <div className='z-10 relative'>
        <Content />
      </div>
      <div className='z-10 relative'>
        <Footer />
      </div>
   
    </DarkModeProvider>
  )
}
export default App
