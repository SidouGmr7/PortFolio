import Scroll from '../components/Scroll'
import ProjectCart from '../components/ProjectCart'
import Food from '../images/Food.bmp'
import Kanaghaz from '../images/Kanaghaz.bmp'
import House from '../images/House.bmp'
import Chat from '../images/Chat.png'

const Projects = () => {
  return (
    <div
      className='relative max-w-4xl lg:h-screen mx-auto  py-20'
      id='projects'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center  relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
        My Projects
      </p>
      <div className='grid md:grid-cols-2 pt-10 sm:gap-y-8 sm:gap-x-10 '>
        <ProjectCart
          img={Food}
          url='https://deliveryfoodgmr.vercel.app/'
          github='https://github.com/SidouGmr7/DeliveryApp'
        />
        <ProjectCart
          img={Kanaghaz}
          url='https://kanaghazdemo-bc29d.web.app'
          github='https://github.com/SidouGmr7/ControleInvestissement'
        />
        <ProjectCart
          img={House}
          url='https://house-gmr.vercel.app/'
          github='https://github.com/SidouGmr7/HouseMarketPlace'
        />
        <ProjectCart img={Chat} bol={true} />
      </div>
      <Scroll selector='#contact' bottom='0' />
    </div>
  )
}

export default Projects
