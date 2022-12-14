import ProjectCart from '../components/ProjectCart'
import Food from '../images/Food.jpg'
import Kanaghaz from '../images/Kanaghaz.jpg'
import House from '../images/House.jpg'
import Chat from '../images/Chat.png'
import Digital from '../images/Digital.jpg'
import Event from '../images/Event.jpg'
import Foot from '../images/FootState.jpg'

const Projects = () => {
  return (
    <div
      className='overflow-hidden scrollbar-hide pb-20 relative'
      id='projects'>
      <p className='text-2xl text-rose-600 md:text-4xl font-bold text-center pt-20 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-rose-600'>
        My Projects
      </p>
      <div className='flex flex-col pt-24'>
        <ProjectCart
          img={Event}
          url='organisationevents.vercel.app'
          github='github.com/SidouGmr7/OrganisationEvents'
          name='Event Organitation'
          desc='A web site Event organitation'
          style={`md:flex-row`}
        />
        <ProjectCart
          img={Food}
          url='deliveryfoodgmr.vercel.app'
          github='github.com/SidouGmr7/DeliveryApp'
          name='Delivery App'
          desc='if you want food this is the best way to deliver food'
          style={`md:flex-row-reverse`}
        />
        <ProjectCart
          img={Digital}
          url='dgitalmarketing.vercel.app'
          github='github.com/SidouGmr7/DigitalMarketingPresentation'
          name='Digital Marketing'
          desc='A digital marketing presentation page'
          style={`md:flex-row`}
        />
        <ProjectCart
          img={Kanaghaz}
          url='kanaghazdemo-bc29d.web.app'
          github='github.com/SidouGmr7/ControleInvestissement'
          name='Controle Investissements'
          desc='web application to control investment decisions for a company of KANAGHAZ support by artificial intelligence'
          style={`md:flex-row-reverse`}
        />
        <ProjectCart
          img={House}
          url='house-gmr.vercel.app'
          github='github.com/SidouGmr7/HouseMarketPlace'
          name='House Market Place'
          desc='If you want to buy and rent a house, this site is the best to meet your requests'
          style={`md:flex-row`}
        />
        <ProjectCart
          img={Chat}
          url='chat-gmr.vercel.app'
          github='github.com/SidouGmr7/ChatGmr'
          name='Chat Messenger'
          desc='A chatting app between friends'
          style={`md:flex-row-reverse`}
        />
        <ProjectCart
          img={Foot}
          url='footballstategmr.vercel.app'
          github='github.com/SidouGmr7/FootballState'
          name='FootBall State'
          desc='A FootBall Statistics app'
          style={`md:flex-row`}
        />
      </div>
    </div>
  )
}

export default Projects
