import { DarkModeProvider } from './context/DarkMode'
import Content from './pages/Content'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactMe from './pages/Contact'

function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
      <Content />
      <ContactMe />
      <Footer />
    </DarkModeProvider>
  )
}
export default App
