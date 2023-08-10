import ScrollIntoView from "react-scroll-into-view"
import { FaChevronDown } from "react-icons/fa"

const Scroll = ({ selector }) => {
  return (
    <ScrollIntoView selector={selector} className='absolute inset-x-0 bottom-0 hidden md:flex'>
      <div className='mx-auto pb-0'>
        <FaChevronDown className='animate-bounce mx-auto text-4xl text-primary' />
      </div>
    </ScrollIntoView>
  )
}

export default Scroll
