import React, { useState } from 'react'
import{ToolsContainer, ToolList, List, CallContainer, CallWrapper, HeadSection, CallBtn, CallIcon} from './ToolElement'
import * as SiIcons from  'react-icons/si'
import * as FaIcons from  'react-icons/fa'
import './ToolSection.css';



function ToolSection() {
  const [Color] = useState(true)
  return (
    <>
      <CallContainer>
        <CallWrapper>
          <HeadSection>
            I have never been more Excited to discuss your Projects, I'm Just a phone call away.
          </HeadSection>
          <CallBtn href="tel:+2348178653884">
              <CallIcon></CallIcon>
                Call Me Now
          </CallBtn> 
        </CallWrapper>
      </CallContainer>

      <ToolsContainer>
        <HeadSection Color={Color}>
              I Only use the Best and Latest Tools.
        </HeadSection>

        <ToolList>
            <List>
              <SiIcons.SiStorybook className='icon'/>
            </List>
            <List>
              <FaIcons.FaSass className='icon'/>
            </List>
            <List>
              <SiIcons.SiCss3 className='icon'/>
            </List>
            <List>
              <SiIcons.SiJavascript className='icon'/>
            </List>
            <List>
              <SiIcons.SiTypescript className='icon'/>
            </List>
            <List>
              <FaIcons.FaReact className='icon'/>
            </List>
            <List>
              <FaIcons.FaNodeJs className='icon'/>
            </List>
            <List>
              <FaIcons.FaNpm className='icon'/>
            </List>
            <List>
              <FaIcons.FaGithub className='icon'/>
            </List>
            <List>
              <FaIcons.FaBootstrap className='icon'/>
            </List>
            <List>
              <SiIcons.SiFirebase className='icon'/>
            </List>
            <List>
              <SiIcons.SiTailwindcss className='icon'/>
            </List>
        </ToolList>

      </ToolsContainer>

    </>
  )
}

export default ToolSection