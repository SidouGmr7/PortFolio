import Scroll from "../components/Scroll"
import ServiceItem from "./components/CardItem"
import { servicesIcons, skillsIcons } from "./components/icons"

const Services = () => {
    return (
        <>
            <div className='relative w-full md:h-screen md:pt-20 pt-12' id='service'>
                <p className='headerTitle'>My Services</p>
                <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-center pt-10'>
                    {Object.keys(servicesIcons).map((name, index) => (
                        <ServiceItem title={name}  index={index} key={index} about={servicesIcons[name].about} icon={servicesIcons[name].icon} />
                    ))}
                </div>
                <Scroll selector='#tech' bottom='0' />
            </div>
            <div className='relative w-full md:h-screen md:pt-20 pt-12' id='tech'>
                <p className='headerTitle'>Tech I Use</p>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center pt-10'>
                    {Object.keys(skillsIcons).map((name, index) => (
                        <ServiceItem title={name} index={index} key={index} icon={skillsIcons[name]} />
                    ))}
                </div>
                <Scroll selector='#projects' bottom='0' />
            </div>
        </>
    )
}

export default Services
