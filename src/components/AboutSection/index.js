import React from 'react'
import {AboutContainer, ContentContainer, ImageContainer, 
ImageFrame, TextContainer, Paragraph, Image, Border, 
Main, HeaderText, Span, SkillContainer, SkillBox,Rate, FrameWork, MainSkill} from './AboutElements'
import ImageSm from '../../images/ope-ab.jpg'
import skill from './SkillData';
import './About.css';




function AboutSection() {
  return (
    <>
        <AboutContainer id="about">
            <ContentContainer>
                <HeaderText>All That You need to know <br/><Span>About Me</Span></HeaderText>

                <Main>
                    <ImageContainer>
                        <ImageFrame>
                            <Border></Border>
                            <Image src={ImageSm} alt='ope'/>
                        </ImageFrame>
                    
                    </ImageContainer>

                    <TextContainer>
                        <Paragraph>
                            I am Bello Opeoluwa, Amazing Frontend developer and 
                            Javascript engineer equipped with an in-depth experience 
                            of all stages of the web development cycle for dynamic 
                            web application projects. Having an in-depth knowledge including advanced
                            HTML5, CSS3. Javascript, and React.js. A Team player, Fun-loving, 
                            Creative, Innovative, Pro-active, Assertive, and Efficient guy. 
                            And also a lover of good music.
                        </Paragraph>
                    </TextContainer>
                </Main>

                <MainSkill>
                    <HeaderText>All That You need to know <br/><Span>About My Skill</Span></HeaderText>
                    <SkillContainer>
                        {skill.map(el=>(
                            <SkillBox key={el.id} className={el.color}>
                                <Rate>{el.rate}</Rate>
                                <FrameWork>{el.name}</FrameWork>
                            </SkillBox>
                        ))}
                    </SkillContainer>
                </MainSkill>
            </ContentContainer>
        </AboutContainer>

    </>
  )
}

export default AboutSection