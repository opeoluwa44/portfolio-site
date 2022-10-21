import React, {useState, useEffect} from 'react'
import {Nav, NavbarContainer, NavLogo, NavMenu, NavLinks, NavItem,DownloadBtn, ItemLinks, Cloud, Wave} from './NavbarElements'
import './Navbar.css';
import Download from '../../images/CV_ope.pdf'


function Navbar({isOpen, toggled}) {

    const [show, handleShow] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>=150){
                handleShow(true)

            }else handleShow(false)
            return ()=> {
                //once the use effect is fired up remove event listener b4 another fire up. 
                // so we dont have too much event listener active
                window.removeEventListener("scroll")
            }
        });
       
    }, [])

    const handleToggle=()=>{
        toggled()
    }

  return (
    <>
        <Nav show={show} isOpen={isOpen}>
            <NavbarContainer>
                <NavLogo to='home'>
                    <h3 className='logo'>0<span className={show? 'less-glow':""}>p</span><span className={show? 'more-glow': ""}>UX</span></h3>
                </NavLogo>
                <div className='toggle' onClick={handleToggle}>
                    <span className={isOpen? "col col1 active": "col col1"}></span>
                    <span className={isOpen? "col col2 active": "col col2"}></span>
                    <span className={isOpen? "col active": "col"}></span>
                </div>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" activeClass="active" spy={true} smooth={true} offset={-40}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" activeClass="active" spy={true} smooth={true} offset={-40}>About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="experience" activeClass="active" spy={true} smooth={true} offset={-40}>My Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" activeClass="active" spy={true} smooth={true} offset={-40}>My Projects</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavMenu>
                    <DownloadBtn href={Download} download="ope_resume">
                        <Cloud></Cloud>
                        My Resume
                    </DownloadBtn>
                    
                    <ItemLinks href="https://wa.me/2348178653884">
                        Say hi
                        <Wave></Wave>
                    </ItemLinks>

                </NavMenu>
                
            </NavbarContainer>
        </Nav>

    </>
  )
}

export default Navbar