import React, { useState } from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/InfoSection3';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/InfoSection2/Data';
import { homeObjThree} from '../components/InfoSection3/Data';
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
        <InfoSection3 {...homeObjThree}/>
        <Services />
        {/* <InfoSection {...homeObjThree}/> */}
        <Footer />
    </>
  )
}

export default HomePage