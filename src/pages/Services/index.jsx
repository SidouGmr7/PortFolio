import Scroll from "../../components/Scroll"
import ServiceItem from "../components/CardItem"
import serviceData from "../../data/serviceData.json"
import skillsData from "../../data/skillsData.json"

const Services = () => {
  return (
    <>
      <div
        className='relative max-w-[90%] lg:h-screen mx-auto  py-28'
        id='service'>
        <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
          My Services
        </p>
        <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 justify-center pt-10'>
          {serviceData.map((itemData) => (
            <ServiceItem {...itemData} />
          ))}
        </div>
        <Scroll selector='#tech' bottom='0' />
      </div>
      <div className='relative max-w-4xl lg:h-screen mx-auto py-12' id='tech'>
        <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
          Tech I Use
        </p>
        <div className='grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  pt-10'>
          {skillsData.map((itemData) => (
            <ServiceItem {...itemData} />
          ))}
        </div>
        <Scroll selector='#projects' bottom='0' x={200} y={200} />
      </div>
    </>
  )
}

export default Services
