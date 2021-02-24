import { React, useRef } from 'react'
import '../css/navbar.css'
import logo from '../images/logoimg.PNG'
import menuicon from '../images/menuicon.PNG'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const menuref = useRef('')
  const togglemenu = () => {
    menuref.current.classList.toggle('displaymenu')
  }
  return (
    <div className='nav'>
      <Link to='/' className='navlinks'>
        <img src={logo} alt={logo} className='logo' />
      </Link>

      <img
        src={menuicon}
        alt={menuicon}
        className='menuicon'
        onClick={() => togglemenu()}
      />
      <div className='menuitems' ref={menuref}>
        <Link to='/aboutpage' className='navlinks'>
          <h6>About</h6>
        </Link>

        <Link to='/workpage' className='navlinks'>
          <h6>Work</h6>
        </Link>
        <Link to='/contactpage' className='navlinks'>
          <h6>Contact</h6>
        </Link>
        <button className='hireme'>
          <a
            href='https://www.upwork.com/o/profiles/users/~013da0d1e136a43cdd/'
            rel='noreferrer'
            target='_blank'
            className='btnlink'
          >
            Hire Now !
          </a>
        </button>
      </div>
    </div>
  )
}

export default Navbar
