import React from 'react'
import {FooterSection, Row1, Row2, Container,
   Heading, Desc, NavIconLink, Text, SocialList, 
   NavLink, List, Span, Icon, IntroRow, IntroContainer, 
   Title, TopText,Quality, FcMark} from './FooterElements'
import * as AiIcons from  'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io'
import * as FaIcons from 'react-icons/fa'
import footer from './FooterData';
import './Footer.css';



function FooterElement() {
  return (
    <>
        <FooterSection>
            <IntroRow>
              <IntroContainer>
                <Title>
                  <TopText>
                    Do you want to scale faster?
                  </TopText>
                  My Skills will help drive your
                  vision.
                </Title>

                <Quality>
                    {footer.map(el=>(
                      <List key={el.id} className='list'>
                      <FcMark></FcMark>
                      {el.desc}
                    </List>
                    ))}
                </Quality>

                
              </IntroContainer>
            </IntroRow>
            <Row1>
                <Container>
                  <Icon>
                    <FaIcons.FaTelegramPlane/>
                  </Icon>
                    <Text>
                        <Heading>HIRE ME FOR YOUR AWESOME PROJECT.</Heading>
                        <Desc>I am available for freelance projects that depends on your project value.<br/> Hire me and get your project done!</Desc>
                    </Text>
                    <NavLink href='https://wa.me/2348178653884' target='_blank'>HIRE ME</NavLink>
                </Container>
            </Row1>
            <Row2>
            <SocialList>
            <List>
              <NavIconLink href="https://twitter.com/OpeoluwaBello1?+=bTMh3ObLhcmOYAN2OXZVDQ&s=09" target='_blank' className='socials'>
                <AiIcons.AiOutlineTwitter/>
              </NavIconLink>
            </List>
            <List>
              <NavIconLink href="mailto:opeoluwabello44@gmail.com" target='_blank' className='socials'>
                <MdIcons.MdEmail/>
              </NavIconLink>
            </List>
            <List>
              <NavIconLink href="https://wa.me/2348178653884" target='_blank' className='socials'>
                <IoIcons.IoLogoWhatsapp/>
              </NavIconLink>
            </List>
            <List>
              <NavIconLink href="https://github.com/opeoluwa44" target='_blank' className='socials'>
                <FaIcons.FaGithubSquare/>
              </NavIconLink>
            </List>
            <List>
              <NavIconLink href="https://linkedin.com/in/opeoluwa-bello-1a7850115" target='_blank' className='socials'>
                <FaIcons.FaLinkedin/>
              </NavIconLink>
            </List>
          </SocialList>
          <Span>created by 0pUX</Span>
        </Row2>
        </FooterSection>

    </>
  )
}

export default FooterElement