import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

const Scroll = ({ selector, bottom }) => {
  return (
    <ScrollIntoView selector={selector} className='absolute inset-x-0 bottom-0'>
      <div class={`mx-auto pb-${bottom}`}>
        <FaChevronDown class='animate-bounce mx-auto text-4xl text-rose-600' />
      </div>
    </ScrollIntoView>
  )
}

export default Scroll
