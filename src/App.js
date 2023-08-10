import { DarkModeProvider } from "./context/DarkMode"
import Home from "./pages/Home"
import Navbar from "./Layout/Navbar"
import Footer from "./Layout/Footer"
import ContactMe from "./pages/Contact"
import CardProfile from "./pages/CardProfile"
import Services from "./pages/Services"
import MyProjects from "./pages/MyProjects"

function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
      <div className='sm:px-28 bg-opacity-80 bg-slate-900'>
        <CardProfile />
        <Services />
        <MyProjects />
      </div>
      <ContactMe />
      <Footer />
    </DarkModeProvider>
  )
}
export default App
