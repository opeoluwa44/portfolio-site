import styled from "styled-components";



export const AboutContainer = styled.div`
    background:#fff;
    min-height:100vh;
    width:100%
    max-width:1180px;
    margin-inline:auto;
    padding:5% 0;
`
export const HeaderText = styled.p`
    color:#173B3F;
    font-size:30px;
    line-height:1;
    text-align:center;
`
export const ContentContainer = styled.div`
  display:grid;
`
export const Span = styled.span`
  font-weight:700;
  font-size:40px;

`

export const Main = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
    margin:3em auto;
    width:80%;


    @media screen and (max-width:760px){
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:2em;
    }
`
export const ImageContainer = styled.div`
    width:300px;
    grid-column: span 1;
    margin:0 auto;
`
export const ImageFrame = styled.div`
    width:190px;
    height:320px;
    border-radius:50%;
    position:relative;
`

export const Image = styled.img`
    width:100%;
    height:100%;
    border-radius:10%;
    position: absolute;
    z-index:3;
`

export const Border = styled.div`
    width:100%;
    height:100%;
    border-radius:10%;
    position: absolute;
    top:-35px;
    left:30px;
    border: 5px solid #173B3F;
    z-index:2;
  
`


    
export const TextContainer = styled.div`
    grid-column: span 1;
    width:300px
    max-height:300px;
    font-size:20px;

    @media screen and (max-width:760px){
    font-size:16px;

    }
`

export const Paragraph = styled.p`
    color:#132128;
    font-size:18px;
    font-family: 'Inter',sans-serif;
    line-height: 28px;
    font-weight: 300;

  
`
export const MainSkill = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:2em;
    overflow-x:scroll;
    padding-bottom:2em;

    &::-webkit-scrollbar{
        display:none;
    
    }

`

export const SkillContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, 300px);
    width:100%;
    gap:1em;
    justify-content:center;
    align-items:center;
    

    @media screen and (max-width:640px){
        display:flex;
        gap:1em;
        justify-content:center;
        overflow-x:scroll;
        padding-bottom:-1em;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar{
            width: 12px;
            height: 3px;
            border-radius:10px;
            background:#fff;
        
        }

        &::-webkit-scrollbar-thumb{
            width: 5px;
            background: #173B3F;
            border-radius:10px;
            border: solid 2px transparent;
        }
    }
  
`
export const SkillBox = styled.div`
   text-align:center;
   width:100%;
   min-width:200px;
   border-radius:10px;
   display: inline-block;

   

   @media screen and (max-width:640px){
    width:100%;
   }
`
export const Rate = styled.p`
    color:#132128;
    font-size:60px;
    font-family: 'Inter',sans-serif;
    line-height: 1px;
    font-weight: 300;
`
export const FrameWork = styled.p`
    color:#132128;
    font-style:italic;
`

