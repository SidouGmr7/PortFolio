import ServiceItem from '../components/CardItem'
import { servicesIcons, skillsIcons } from '../data/icons'
import { SectionWrapper } from '../components/SectionWrapper'

const Services = () => {
    const icons = skillsIcons()
    return (
        <>
            <SectionWrapper
                id='service'
                title='My Services'
                selector='#tech'
                className='lg:h-screen'
            >
                <div className='flex flex-wrap p-4 justify-center md:pt-10'>
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
            </SectionWrapper>
            <SectionWrapper
                id='tech'
                title='Tech I Use'
                selector='#projectsc'
                className='lg:h-screen'
            >
                <div className='flex flex-wrap p-4 justify-center pt-10'>
                    {Object.keys(icons).map((name, index) => (
                        <ServiceItem
                            title={name}
                            index={index}
                            key={index}
                            icon={icons[name]}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </>
    )
}

export default Services
