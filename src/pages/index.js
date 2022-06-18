import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from '../components/HeroSection'
import './Home.css';
import AboutSection from '../components/AboutSection';
import Experience from '../components/ExperienceSection';
import Project from '../components/ProjectSection';
import Footer from '../components/FooterSection';
import ToolSection from '../components/ToolSection';

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
     <div className='homepage'>
        <Sidebar isOpen={isOpen} toggle={handleToggle}/>
        <Navbar isOpen={isOpen} toggled={handleToggle}/>
        <HeroSection/>
        <ToolSection/>
        <AboutSection/>
        <Experience/>
        <Project/>
        <Footer/>
     </div>
    </>
  )
}

export default Home