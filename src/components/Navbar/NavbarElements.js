import styled from 'styled-components';
import { Link as scroll} from 'react-scroll'
import * as GoCloudIcons from  'react-icons/go'
import * as MdIcons from  'react-icons/md'


export const Nav = styled.nav`
 background: ${({show})=>(show ?'#132128':'none')};
 height:65px;
 display:flex;
 justify-content: center;
 align-items: center;
 font-size:1rem;
 width:100%;
 position: fixed;
 top:0;
 z-index: 300;

 @media screen and (max-width:980px){
    transition:0.8s all ease;
 }
 @media screen and (max-width:350px){
  background:#191919;
  overflow:hidden;
 }
`

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items:center;
 z-index:1;
 width:100%;
 padding:10px 10px;
 max-width:1200px;
 overflow:hidden;
`

export const NavLogo = styled(scroll)`
 justify-self: flex-start;
 cursor:pointer;
 font-size:32px;
 display:flex;
 align-items:center;
 margin-left:24px;
 font-weight:bold;
 text-decoration: none;

 @media screen and (max-width:450px){
  font-size: 25px;
  
}
`

export const NavMenu = styled.ul`
 display: flex;
 align-items:center;
 justify-self:flex-start;
 list-style:none
 text-align: center;
 margin-right:-22px;

 @media screen and (max-width:760px){
     display:none
 }
`
export const NavItem = styled.li`
 height:80px;
 display: flex;
 align-items:center;
 padding:0 1rem;
 cursor:pointer;

`

export const NavLinks = styled(scroll)`
color:#fff;
text-decoration:none;
font-size:18px;
padding:1em 0;
display:inline-block;
border-bottom-left-radius: 2px;
border-bottom-right-radius:2px ;

  
  &.active {
    border-bottom: 3px solid #56C870;
    color:#56C870;
  }

`

export const DownloadBtn = styled.a`
  text-decoration:none;
  font-size:18px;
  font-weight:700;
  padding:5px 20px;
  display:inline-block;
  color:#173B3F;
  border:1px solid #fff;
  border-radius: 48px;
  color:#fff;
  margin:0 1rem;

  transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
    }

  @media screen and (max-width:1000px){
    display:none
  }
    
`
export const Cloud = styled(GoCloudIcons.GoCloudDownload)`
    margin-right:5px;
    font-size:20px;
    color:#fff;
    
  @media screen and (max-width:760px){
    display:none
  }
`

export const Wave = styled(MdIcons.MdWavingHand)`
  margin-left:5px;
  font-size:20px;
  color:#173B3F;
 

`

export const ItemLinks = styled.a`
text-decoration:none;
font-size:18px;
font-weight:700;
padding:5px 40px;
display:inline-block;
color:#173B3F;
background:#56C870;
border-radius: 48px;
margin:0 1rem;

transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
        
    }



@media screen and (max-width:1000px){
  display:none
}

`
 
