import styled from "styled-components";



export const ExperienceContainer = styled.div`
    min-height:100vh;
    width:100%
    max-width:1180px;
    padding:0 24px;
    margin-inline:auto;
    display:flex;
    flex-direction: column;
    overflow:hidden;

`
export const ExperienceContent = styled.div`
    padding:40px 0;
    text-align:center;
    margin:0 auto;

    @media screen and (max-width:450px){
        margin-left:-1em;
    }
`
export const Empty = styled.div`
   height:92.5px;
   weight:30px;

`
export const Content = styled.div`
    color:#fff;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:space-around;
    position:relative;
    max-width:380px;
    gap:2.5em;
    @media screen and (max-width:390px){
        font-size:16px;
    }

`

export const BigContent = styled.div`
    color:#fff;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    gap:2em;
    position:relative;
    max-width:390px;

`
export const MainText = styled.div`
    padding-inline:1em;
    min-width:130px;
    margin-left:1.2em;
    max-height:100px;
    font-weight:400;
    align-self:flex-start;

    @media screen and (max-width:390px){
        margin-left:.5em;
    }

`
export const Heading = styled.h5`
    text-align:left;
    line-height:1.5;

`

export const Line = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align:center;
    position:absolute;
    top:0;

`
export const Text = styled.p`
    text-align:left;
    min-width:100px;
    align-self:flex-end;

`
export const SpanCircle = styled.span`
    width:4em;
    height:4em;
    display:inline-block;
    border:1.2px solid #fff;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:23px;

`
export const SpanCircleSm= styled.span`
    width:2em;
    height:2em;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1.2px solid #fff;
    border-radius:50%;

`
export const Dot= styled.span`
    width:10px;
    height:10px;
    display:inline-block;
    background:#fff;
    border-radius:50%;
    box-shadow: 0 0 5px var(--primary-clr),
    0 0 10px var(--primary-clr),
    0 0 15px var(--primary-clr),
    0 0 20px var(--primary-clr),
    0 0 25px var(--primary-clr),
    0 0 30px var(--primary-clr);

`
export const SpanLine = styled.span`
    width:1px;
    height:83px;
    background:#fff;
`
export const Title = styled.p`
   color:#fff;
   font-size:30px;
   line-height:1.2;

   @media screen and (max-width:760px){
    font-size:20px;
    line-height:1.3;
  }

`
export const Main = styled.div`
    display:flex;
    align-items:center;
    margin:0 auto;
    gap:min(5em, 5vw);
    justify-content:space-between;
    margin-top:5em;

    @media screen and (max-width:845px){
        display:grid;
        margin:3em 1em;
        justify-content:center;
    }
`
export const SmallText = styled.div`
    color:#fff;
    line-height:1.2;

    @media screen and (max-width:760px){
        line-height:1.3;
    }
`
export const Span = styled.span`
    font-weight:700;
    font-size:40px;
`
export const TopLine = styled.div`
max-width:400px;
width:50%;
min-width:250px;
@media screen and (max-width:360px){
    margin:0 auto;
}
    
`
export const CallBtn = styled.a`
    margin:2em 0;
    text-decoration:none;
    font-size:18px;
    font-weight:600;
    padding:24px 40px;
    display:inline-block;
    color:#173B3F;
    border:1px solid #56C870;
    border-radius: 48px;
    background:#56C870;
    width:20%;
    min-width:200px;
    text-align:center;

    transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
        color:#fff;
    }

    @media screen and (max-width:390px){
        padding:14px 20px;
    }
    
   
`

