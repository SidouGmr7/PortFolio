import ScrollIntoView from 'react-scroll-into-view'

const NavbarItem = ({ Selector, Name, dark }) => {
  return (
    <ScrollIntoView selector={Selector}>
      <li
        className={`text-lg hover:scale-110 transition cursor-pointer hover:text-rose-600 ${
          dark ? 'text-white ' : 'text-black'
        }`}>
        {Name}
      </li>
    </ScrollIntoView>
  )
}

export default NavbarItem
