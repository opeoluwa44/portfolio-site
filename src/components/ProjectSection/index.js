import React, {useState} from 'react'
import {ProjectContainer, Title, BtnContainer, ProjectBox, 
    BoxContent, Desc, LinkContain, NavLink, Title1, ImgFm} from './ProjectElements'
import './Project.css';
import data from './DataPro';




function Project() {

    const [active, setActive] = useState({
        activeObject:{id:0, name:'All'},
        Objects: [{id:0, name:'All'}, {id:1, name:'Recent'}]
    });

    const toggleInactive=(index)=>{
        const newActive = {...active}
        const arr = newActive.Objects
        let current = arr.find(c=>c.id===index)
        newActive.activeObject = current
        if(newActive.activeObject.name==='All'){
            data[0].Recent=true
            data[1].Recent=true
            data[2].Recent=true
        }else {
            data[0].Recent=false
            data[1].Recent=false
            data[2].Recent=false

        }
        setActive(newActive)
    }

    const toggleActiveStyles=(index)=>{
        if(active.Objects[index].id === active.activeObject.id){
            return "btn activate"

        }else{
            return "btn inactivate"
        }
    }

  return (
    <>
        <ProjectContainer id="projects">
            <Title1>
                <Title>Check out some of my Works </Title><br/>
                <Desc>I believe programming can only be mastered by doing, 
                so I am constantly learning to improve myself by building 
                projects for learning.
                </Desc>
            </Title1>
            <BtnContainer>
                {active.Objects.map((c, index)=>(
                    <button key={index} className={toggleActiveStyles(index)} 
                    onClick={()=>{toggleInactive(index)}}>{c.name}</button>
                ))}
            </BtnContainer>
            <ProjectBox>
                {data.map(el=>(
                   el.Recent&&<BoxContent key={el.id}>
                   <Title>{el.title}</Title>
                   <ImgFm className={el.cName}></ImgFm>
                   <Desc>{el.desc}</Desc>
                   <LinkContain>
                       <NavLink href={el.code} target='_blank'>Code</NavLink>
                       <NavLink href={el.demo} target='_blank'>Demo</NavLink>
                   </LinkContain>
               </BoxContent>
               ))}

            </ProjectBox>
        </ProjectContainer>
    </>
  )
}

export default Project