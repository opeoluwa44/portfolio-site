import styled from "styled-components";



export const ToolsContainer = styled.div`
    background:#B0D6CE;
    min-height:25vh;
    width:100%
    max-width:1180px;
    margin-inline:auto;
    padding:2em 1em;
`


export const ToolList = styled.ul`
    list-style:none;
    width:100%;
    display:flex;
    gap:2em;
    overflow-x:scroll;
    padding-bottom:2em;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar{
        width: 12px;
        height: 14px;
        border-radius:10px;
        background:#f2f2f2;
    
    }

    &::-webkit-scrollbar-thumb{
        width: 150px;
        background: #173B3F;
        border-radius:10px;
        border: solid 2px #fff;
    }

`
export const List = styled.li`
    color:#173B3F;
`

export const CallContainer = styled.div`
    background:#183b3f;
    min-height:25vh;
    width:100%
    max-width:1180px;
    margin-inline:auto;
    padding:1em 0;

`

export const CallWrapper = styled.div`
    padding:.1em .8em;
    display:flex;
    flex-direction:column;

`

export const HeadSection = styled.p`
    color:${({Color})=>(Color ?'#173B3F':'#fff')};
    font-size:30px;
    line-height:1.3;
    text-align:center;
    margin:auto;
`

export const CallBtn = styled.a`
    margin:2em auto;
    text-decoration:none;
    font-size:18px;
    font-weight:600;
    padding:24px 40px;
    display:inline-block;
    color:#173B3F;
    border:1px solid #56C870;
    border-radius: 48px;
    background:#56C870;
    transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
        color:#fff;
    }
   
`
export const CallIcon = styled.div`
    
`
