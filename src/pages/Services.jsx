import Scroll from '../components/Scroll'
import ServiceItem from '../components/ServiceItem'

const Services = () => {
  return (
    <div
      className='relative max-w-4xl lg:h-screen mx-auto  py-28'
      id='service'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-4'>
        My Services
      </p>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center pt-10'>
        <ServiceItem
          Name='FrontEnd'
          About='Create Web Application using React or Angular framework'
        />
        <ServiceItem
          Name='BackEnd'
          About='Create Backend with nodeJs Java Spring Boot or Firebase'
        />
        <ServiceItem
          Name='Ui UX Design'
          About='Design Web Application with Tailwin ,Materiel UI, PrimeFaces'
        />
        <ServiceItem
          Name='DataBase'
          About='Manage DataBase with MySql or Firestore DatBase'
        />
      </div>
      <Scroll selector='#tech' bottom='0' />
    </div>
  )
}

export default Services
