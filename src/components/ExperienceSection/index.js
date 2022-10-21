import React from 'react'
import {ExperienceContainer, ExperienceContent, Title, 
  BigContent, Content, MainText, Heading, Line, Text, 
  SpanCircle, SpanLine, SpanCircleSm, Dot, Empty, Main, 
  Span, SmallText, CallBtn, TopLine} from './ExperienceElement'
import * as GiIcons from  'react-icons/gi'
import './Experience.css';


function Experience() {
  return (
    <>
        <ExperienceContainer className='experience' id='experience'>
            <Main>
              <TopLine>
                <Title>I've had quite an <Span>Experience</Span><br/>in this space 
                  that makes me qualified to deliver you the best results.
                </Title>
                <SmallText>
                  Brilliant minds come together to build the future. 
                  Lets build one together.
                </SmallText>
                <CallBtn href="https://wa.me/2348178653884">
                  Chat Me Now
                </CallBtn>
              </TopLine>
              <ExperienceContent>
                <BigContent>
                    <Line>
                      <SpanCircle><GiIcons.GiGraduateCap/></SpanCircle>
                    </Line>
                </BigContent>
                <Empty></Empty>
                  
                  <Content>
                    
                    <Line>
                      <SpanLine></SpanLine>
                      <SpanCircleSm><Dot></Dot></SpanCircleSm>
                    </Line>
                  </Content>

                  <Content>
                    <MainText>
                      <Heading>Bachelor of Science<br/>Mathematics</Heading>
                    </MainText>
                  
                    <Text>
                      University of Lagos<br/>
                        2017-2022
                    </Text>

                    <Line>
                      <SpanLine></SpanLine>
                    </Line>
                  </Content>

                  <Content>
                    <MainText>
                      <Heading>Advanced React Patterns</Heading>
                    </MainText>
                  
                    <Text>
                      Udemy Academy <br/>
                      2022
                    </Text>

                    <Line>
                      <SpanLine></SpanLine>
                      <SpanCircleSm><Dot></Dot></SpanCircleSm>
                    </Line>
                  </Content>

                  <Content>
                    <MainText>
                      <Heading>Responsive Web Design</Heading>
                    </MainText>
                  
                    <Text>
                      Devchallenges<br/>
                      2022
                    </Text>

                    <Line>
                      <SpanLine></SpanLine>
                      <SpanCircleSm><Dot></Dot></SpanCircleSm>
                    </Line>
                  </Content>

              </ExperienceContent>

            </Main>
            
        </ExperienceContainer>
    </>
  )
}

export default Experience