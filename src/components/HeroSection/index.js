import React from 'react'
import {HeroContainer, Desc, HeroWrapper, Title, 
  Subtitle, NavMenu, DownloadBtn, 
  ItemLinks, Cloud, Wave} from './HeroElement'
import Download from '../../images/Resume_ope.pdf'


function HeroSection() {
  return (
    <>
      <HeroContainer id="home">
        <HeroWrapper className='container'>
            <Title>Hello!</Title>
            <Subtitle> I'm Bello Opeoluwa</Subtitle>
           
            <Desc className='desc'>
              I am a Frontend developer and Javascript engineer equipped with extensive
              experience, in delivering engaging and visually compelling projects.
            </Desc>

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
          
        </HeroWrapper>

        
      </HeroContainer>
    </>
  )
}

export default HeroSection

