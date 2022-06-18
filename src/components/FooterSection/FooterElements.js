import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import * as FcIcons from 'react-icons/fc'




export const FooterSection = styled.div`
    width:100%
    max-width:1180px;
`
export const IntroRow = styled.div`
    width:100%;
    background:#fff;
    display:flex;
    padding:.5em 10px;
    text-align:center;

    
`
export const IntroContainer = styled.div`
    margin:0 auto;
    padding:1em 0;
    
`
export const Title = styled.div`
   font-size:40px;
   line-height:1;
`
export const TopText = styled.h3`
   font-size:18px;
   margin:0 0 .5em 0;
`
export const Quality = styled.ul`
    text-align:left;
    line-height:1.5;
    margin-left:2.5em;

    @media screen and (max-width:450px){
        margin-left:.8em;
      
     }
   
`
export const FcMark = styled(FcIcons.FcCheckmark)`
   margin:5px 10px 0 10px;
   display:none;
`

export const Container = styled.div`
    background:#B0D6CE;
    padding:.5em 10px;
    text-align:center;
    
    @media screen and (min-width:760px){
       display:flex;
       align-items:flex-start;
       justify-content:center;
       gap:2em;
     
    }

`
export const Row1 = styled.div`
    background:#000;
    height:fit-content;

`
export const Text = styled.div`

`
export const Heading = styled.h3`
    font-size:20px;
    margin:15px 0 5px 0;
    padding;0;

`
export const Desc = styled.p`
    font-size:18px;
    margin:0 0 15px 0;

`
export const NavLink = styled.a`
    text-decoration:none;
    padding:24px 40px;
    color:#173B3F;
    border:1px solid #173B3F;
    border-radius:48px;
    font-size:18px;
    display:inline-block;
    margin:1em;
    transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
    }

`
export const NavIconLink = styled.a`
    color:#000;
    background:#173B3F;
    font-size:25px;
    display:flex;
    &:hover{
        transform:scale(1.1);
        
    }
`
export const Row2 = styled.div`
    background:#183b3f;
    height:fit-content;
    padding:1em 0;
`

export const Span = styled.span`
    display:flex;
    align-items:baseline;
    justify-content:center;
    color:#000;
    font-size:14px;

`
export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor:pointer;
    font-size:.6em;
    display:flex;
    align-items:center;
    margin-left:10px;
    font-weight:bold;
    text-decoration: none;
`
export const SocialList = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.5em;
    margin-block:1em;

`
export const List = styled.li`
    list-style:none;
    position:relative;
`
export const Icon = styled.div`
    font-size:48px;
    margin-top:.3em;
`