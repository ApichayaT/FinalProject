import React from 'react'
import { 
    SidebarContainer,
    Icon, 
    CloseIcon ,
    SidebarWrapper,
    SidebarMenu,
    SidebarRoute,
    
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarRoute to="/" onClick={toggle}> Home</SidebarRoute>
                <SidebarRoute to="/search" onClick={toggle}> Search</SidebarRoute>
                <SidebarRoute to="/calculator" onClick={toggle}> Calculator</SidebarRoute> 
                <SidebarRoute to="/daily" onClick={toggle}> Daily</SidebarRoute> 
                <SidebarRoute to="/blog/" onClick={toggle}> Blog</SidebarRoute> 
            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar