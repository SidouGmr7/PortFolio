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
      <Content />
      <Footer />
    </DarkModeProvider>
  )
}
export default App
