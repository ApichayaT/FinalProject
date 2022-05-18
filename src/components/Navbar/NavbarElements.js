import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
 

export const Nav = styled.nav`
    /*background: ${({scrollNav}) => (scrollNav ? '#000' : 'transpaarent')}*/
    background:#fff;
    color:#000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    position: sticky;
    top: 30px;
    margin-left: 200px;
    margin-right: 200px;
    z-index: 10;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    border-radius: 30px;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
    @media screen and (max-width: 480px) {
    margin-left: 50px;
    margin-right: 50px;
	}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    height: 80px;
    z-index: 1;
    width: 100%; 
    padding: 0 40px;  
    max-width: 1000px;

`


export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer; 
    display: flex;
    align-items: center;
    /* margin-left: 22px;
    margin-top:auto;
    margin-bottom:auto;  */
    @media screen and (max-width: 480px) {
    margin-left: 5px;
	}
`


export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 1.8rem;
        cursor: pointer; 
    }
`


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 70px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.ul`
    height: 80px;
`

/*export const NavLinks = styled(LinkS)`
    color: #010606;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin-top: 0.5rem;
    height: 100%;
    cursor: pointer;
    letter-spacing: 1px;
    &.active {
        border-bottom: 4px solid #01bf71; 
        color: #01bf71;
    }
`*/
export const NavRoute = styled(LinkR)`
    color: #010606;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin-top: 0.5rem ;
    height: 100%;
    cursor: pointer;
    letter-spacing: 1px;
    &.active {
        border-bottom: 5px solid #01bf71; 
        color: #14D685;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 18px;
    display: flex;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #14D685;
        color: #010606 !important;
    }
`
export const NavBtnRouter = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 18px;
    display: flex;
    color: #010606!important;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #14D685;
        color: #010606!important;
    }
`


