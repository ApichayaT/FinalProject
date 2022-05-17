import React, { useState } from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/InfoSection2/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection2 {...homeObjTwo}/>
        <Services />
        {/* <InfoSection {...homeObjThree}/> */}
        <Footer />
    </>
  )
}

export default HomePage