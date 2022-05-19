import React, {useEffect, useState} from 'react'
import { FaAlignLeft } from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib';
import logo from '../../images/logo.svg'
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavRoute,
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome} >
            <img src={logo} alt=""/ >
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaAlignLeft className='berger-icon' color='#000' />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavRoute to="/" onClick={toggleHome}>Home</NavRoute>
            </NavItem>
            <NavItem>
              <NavRoute to="/search"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Search</NavRoute>
            </NavItem>
            <NavItem>
              <NavRoute to="/calculator"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Calculator</NavRoute>
            </NavItem>
            <NavItem>
              <NavRoute to="/daily"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Daily</NavRoute>
            </NavItem> 
            <NavItem>
              <NavRoute to="/blog"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Blog</NavRoute>
            </NavItem> 
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    
  )
}

export default Navbar