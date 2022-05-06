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
  NavLinks,
  NavBtn,
  NavBtnLink
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
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome} className='logo' >
            <img src={logo} alt=""/ >
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaAlignLeft className='berger-icon' color='#000' />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="search1"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Search</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="calculator1"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Calculator</NavLinks>
            </NavItem>
             <NavItem>
              <NavLinks to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >Blog</NavLinks>
            </NavItem> 
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;