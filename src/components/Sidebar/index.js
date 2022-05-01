import React from 'react'
import { 
    SidebarContainer,
    Icon, 
    CloseIcon ,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}> Home</SidebarLink>
                <SidebarLink to="search1" onClick={toggle}> Search</SidebarLink>
                <SidebarLink to="calculator1" onClick={toggle}> Calculator</SidebarLink>
                <SidebarLink to="services" onClick={toggle}> Blog</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar