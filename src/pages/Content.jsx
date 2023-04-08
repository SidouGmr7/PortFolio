import CardProfile from "./CardProfile"
import { useContext } from "react"
import DarkMode from "../context/DarkMode"
import Services from "./Services"
import MyProjects from "./Projects/MyProjects"

const Content = () => {
    const { dark } = useContext(DarkMode)

    return (
        <div className={`py-10 sm:px-5 overflow-hidden scrollbar-hide bg-opacity-50  ${dark ? "bg-gray-900" : "bg-slate-100"} `}>
            <CardProfile />
            <Services />
            <MyProjects />
        </div>
    )
}

export default Content
