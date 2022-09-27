import Scroll from '../components/Scroll'
import ProjectCart from '../components/ProjectCart'
import Food from '../images/Food.bmp'
import Kanaghaz from '../images/Kanaghaz.bmp'
import House from '../images/House.bmp'
import Chat from '../images/Chat.png'
import Digital from '../images/Digital.PNG'

const Projects = () => {
  return (
    <div className='overflow-hidden scrollbar-hide relative' id='projects'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-20 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
        My Projects
      </p>
      <div className='flex flex-col pt-24'>
        <ProjectCart
          img={Food}
          url='deliveryfoodgmr.vercel.app'
          github='github.com/SidouGmr7/DeliveryApp'
          name='Delivery App'
          desc='if you want food this is the best way to deliver food'
          style='flex-row-reverse'
        />
        <ProjectCart
          img={Kanaghaz}
          url='kanaghazdemo-bc29d.web.app'
          github='github.com/SidouGmr7/ControleInvestissement'
          name='Controle Investissements'
          desc='web application to control investment decisions for a company of KANAGHAZ support by artificial intelligence'
          style='flex-row'
        />
        <ProjectCart
          img={House}
          url='house-gmr.vercel.app'
          github='github.com/SidouGmr7/HouseMarketPlace'
          name='House Market Place'
          desc='If you want to buy and rent a house, this site is the best to meet your requests'
          style='flex-row-reverse'
        />
        <ProjectCart
          img={Chat}
          url='chat-gmr.vercel.app'
          github='github.com/SidouGmr7/ChatGmr'
          name='Chat Messenger'
          desc='A chatting app between friends'
          style='flex-row'
        />
        <ProjectCart
          img={Digital}
          url='digital-marketing-ebon.vercel.app'
          github='github.com/SidouGmr7/digitalmarketing'
          name='Digital Marketing'
          desc='A digital marketing presentation page'
          style='flex-row-reverse'
        />
      </div>
    </div>
  )
}

export default Projects
