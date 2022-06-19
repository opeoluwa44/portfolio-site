import styled from "styled-components";




export const ProjectContainer = styled.div`
    background:#edeff1;
    min-height:100vh;
    width:100%
    max-width:1180px;
    padding:3em 24px 0 24px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`

export const Title = styled.h2`
    margin-inline:auto;
    color: #173B3F;
    font-weight:800;

    @media screen and (max-width:760px){
        font-size:30px;
        margin:0;
    }

`

export const Title1 = styled.h1`
    color:#173B3F;
    font-size:30px;
    line-height:1;
    text-align:center;
    margin:0 auto;

    @media screen and (max-width:760px){
        font-size:20px;
    }
   
    
`
export const BtnContainer = styled.div`
    display:flex;
    place-items:center;
    margin-inline:auto;
    margin-top:2em;
    width:250px;
    border-bottom:1px solid #173B3F;
    height:fit-content;
`


export const ProjectBox = styled.div`
    display:grid;
    place-items:center;
    margin-block:2em;
    gap:1em;
    height:fit-content;

`
export const BoxContent = styled.div`
    width:100%;
    max-width:300px;
    height:fit-content;
    padding:1em;
    text-align:center;
    background:#fff;
    border-radius:15px;
    border:1px solid #f8f8f8;
    display:flex;
    flex-direction:column;
    justify-content:center;

`
export const ImgFm = styled.div`
    width:30%;
    height:50px;   
    background-size: contain;
    background-position:top bottom;
    background-repeat: no-repeat;
    object-fit: contain; 
    margin:2em auto 0 auto;
    
`
export const Desc = styled.p`
    color: #173B3F;
    font-size:20px;
    max-width:800px;
    line-height:1.3;

    @media screen and (max-width:760px){
        font-size:18px;
    }
`
export const LinkContain = styled.div`
    display: flex;
    justify-content:center;
    gap:20px;

`
export const NavLink = styled.a`
    text-decoration:none;
    border: 1px solid #173B3F;
    padding:5px 10px;
    color:#173B3F;
    border-radius:40px;
    padding:0 24px;
    transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
    }

`
