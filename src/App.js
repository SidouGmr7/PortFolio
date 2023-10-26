import { DarkModeProvider } from './context/DarkMode'
import Home from './pages/Home'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import ContactMe from './pages/Contact'
import CardProfile from './pages/CardProfile'
import Services from './pages/Services'
import MyProjects from './pages/MyProjects'
import TimeLine from './pages/TimeLine'

function App() {
    return (
        <DarkModeProvider>
            <div className='overflow-hidden'>
                <Navbar />
                <Home />
                <div className='sm:px-40 bg-opacity-95 bg-[#111827] overflow-hidden scrollbar-hide'>
                    <CardProfile />
                    <TimeLine />
                    <Services />
                    <MyProjects />
                </div>
                <ContactMe />
                <Footer />
            </div>
        </DarkModeProvider>
    )
}
export default App
