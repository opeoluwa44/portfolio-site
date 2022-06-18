import React from 'react'
import {ExperienceContainer, ExperienceContent, Title, 
  BigContent, Content, MainText, Heading, Line, Text, 
  SpanCircle, SpanLine, SpanCircleSm, Dot, Empty, Main, 
  Span, SmallText, CallBtn, TopLine, SubMain, SlideFrame, 
  Frame, ExpBox, ExpHeader, ExpContent, List, Desc} from './ExperienceElement'
import * as GiIcons from  'react-icons/gi'
import './Experience.css';
import experience from './ExperienceData';


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
            <SubMain>
              <SlideFrame>
                <Frame>
                  {experience.map(el=>(
                  <ExpBox key={el.id} className={el.color}>
                    <ExpHeader>{el.title}<br/>
                    <Desc>{el.desc}</Desc>
                  </ExpHeader>
                    
                    <ExpContent>
                      <List className='spark-list'>
                        {el.list1}
                      </List>
                      <List className='spark-list'>
                        {el.list2}
                      </List>
                      <List className='spark-list'>
                        {el.list3}
                      </List>
                    </ExpContent>

                  </ExpBox>
                  ))}
                </Frame>
              </SlideFrame>
            </SubMain>
        </ExperienceContainer>
    </>
  )
}

export default Experience