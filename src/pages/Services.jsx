import Scroll from '../components/Scroll'
import ServiceItem from '../components/ServiceItem'

const Services = () => {
  return (
    <div className='relative max-w-4xl lg:h-screen mx-auto  py-28' id='service'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
        My Services
      </p>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center pt-10'>
        <ServiceItem
          Name='FrontEnd'
          About='Create Web Application using React or Angular framework'
          bol={true}
        />
        <ServiceItem
          Name='BackEnd'
          About='Create Backend with nodeJs Java Spring Boot or Firebase'
          bol={true}

        />
        <ServiceItem
          Name='Ui UX Design'
          About='Design Web Application with Tailwind ,Materiel UI, PrimeFaces'
          bol={true}
        />
        <ServiceItem
          Name='DataBase'
          About='Manage DataBase with MySql or Firestore DatBase'
          bol={true}
        />
      </div>
      <Scroll selector='#tech' bottom='0' />
    </div>
  )
}

export default Services
