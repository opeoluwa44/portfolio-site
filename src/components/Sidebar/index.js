import React from 'react'
import {SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink, Line} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    const handleToggle =()=>{
       toggle()
    }
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleToggle}>
        <SidebarWrapper>
            <Line></Line>
            <SidebarMenu>
                <SidebarLink to="home" onClick={handleToggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="about" onClick={handleToggle}>
                    About Me
                </SidebarLink>
                <SidebarLink to="experience" onClick={handleToggle}>
                    My Experience
                </SidebarLink>
                <SidebarLink to="projects" onClick={handleToggle}>
                    My Projects
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar