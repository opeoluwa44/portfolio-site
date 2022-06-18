import styled from "styled-components";
import * as GoCloudIcons from  'react-icons/go'
import * as MdIcons from  'react-icons/md'


export const HeroContainer = styled.div`
    width:100%;
    max-width:1180px;
    margin-inline:auto;
    padding-top: 80px;
    min-height: 100vh;
    display:flex;
    color:#fff;
    overflow:hidden;

`

export const HeroWrapper = styled.div`
    list-style:none;
    margin:8em 1.5em;
    overflow:hidden;

    @media screen and (max-width:760px){
      margin:5em 1.5em;
   }
`
export const Title = styled.h1`
    font-size: max(5rem, 8vw);
    font-weight: 400;
    font-style: italic;
    color:#fff;

    @media screen and (max-width:760px){
      font-size: max(4rem, 6vw);
   }

  
`

export const Subtitle = styled.h2`
    font-weight: 500;
    font-style: italic;
  
`
export const Desc = styled.p`
    font-size: 20px;
    max-width:500px;
    font-weight:400;
    font-family: 'Inter',sans-serif;

    @media screen and (max-width:760px){
      font-size: 16px;
   }
  
`

export const NavMenu = styled.div`

 @media screen and (max-width:909px){
    display: flex;
    gap:1em;
 }

 @media screen and (max-width:380px){
    flex-direction:column;
 }
`

export const DownloadBtn = styled.a`
  display:none;

  @media screen and (max-width:1000px){
    text-decoration:none;
    font-size:18px;
    font-weight:700;
    padding:5px 40px;
    display:flex;
    color:#173B3F;
    border:1px solid #fff;
    border-radius: 48px;
    color:#fff;
    margin-left:0;
    text-align:center;

    transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
    }

    @media screen and (max-width:390px){
      display:inline-block;
      justify-content:center;
      padding:5px 10px;

    }
  }
    
`
export const Cloud = styled(GoCloudIcons.GoCloudDownload)`
  @media screen and (max-width:909px){
    margin-right:5px;
    font-size:20px;
    color:#fff;
  }
`
export const Wave = styled(MdIcons.MdWavingHand)`
  @media screen and (max-width:909px){
    margin-left:5px;
    font-size:20px;
    color:#173B3F;
}
`

export const ItemLinks = styled.a`
    display:none;
    @media screen and (max-width:1000px){
        text-decoration:none;
        font-size:18px;
        font-weight:700;
        padding:10px 40px;
        display:inline-block;
        color:#173B3F;
        background:#56C870;
        border-radius: 48px;
        text-align:center;
        transition:all .25s ease-in-out;

    &:hover{
        transform:scale(1.05);
    }

    }

    @media screen and (max-width:390px){
      display:inline-block;
      justify-content:center;
    }
`
