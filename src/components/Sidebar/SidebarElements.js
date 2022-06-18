import styled from "styled-components";
import { Link as scroll } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:5;
    width:100%;
    height:270px;
    background:#132128;
    display: grid;
    align-items:center;
    top:0;
    left:0;
    opacity:${({isOpen})=>(isOpen?'100%':'0')};
    top: ${({isOpen})=>(isOpen?'0%':'-100%')};
    transition:0.3s ease-in-out;
   
`
/* */
export const SidebarWrapper = styled.div`
    color:#fff;
    padding-top:3.3em;
    display:flex;
    flex-direction:column;
`

export const Line = styled.div`
    background:#B0D6CE;
    width:92%;
    height:.08px;
    margin:0 auto;
`

export const SidebarMenu = styled.ul`
    display:block;
    margin:0;
`
export const SidebarLink = styled(scroll)`
    display:flex;
    align-items:center;
    justify-content: flex-start;
    margin-block:1rem;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    color:#fff;
    cursor:pointer;

    &:hover{
        color:#56C870;
        transition: 0.2s ease-in-out;
    }

`


/* */ 