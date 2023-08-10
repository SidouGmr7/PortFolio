import Scroll from "../components/Scroll"
import ServiceItem from "../components/CardItem"
import { servicesIcons, skillsIcons } from "../data/icons"

const Services = () => {
  return (
    <>
      <div className='relative w-full lg:h-screen md:pt-20 pt-12' id='service'>
        <p className='headerTitle'>My Services</p>
        <div className='flex flex-wrap p-4 justify-center pt-10'>
          {Object.keys(servicesIcons).map((name, index) => (
            <ServiceItem
              title={name}
              index={index}
              key={index}
              about={servicesIcons[name].about}
              icon={servicesIcons[name].icon}
            />
          ))}
        </div>
        <Scroll selector='#tech' />
      </div>
      <div className='relative w-full lg:h-screen md:pt-20 pt-12' id='tech'>
        <p className='headerTitle'>Tech I Use</p>
        <div className='flex flex-wrap p-4 justify-center pt-10'>
          {Object.keys(skillsIcons).map((name, index) => (
            <ServiceItem title={name} index={index} key={index} icon={skillsIcons[name]} />
          ))}
        </div>
        <Scroll selector='#projectsc' />
      </div>
    </>
  )
}

export default Services
