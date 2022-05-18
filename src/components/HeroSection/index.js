import React, {useState} from 'react';
import Video from '../../videos/video.mp4';

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    SignInBtnLink,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Better body, Better life.</HeroH1>
            <HeroP>
            ให้เว็บไซต์ของเราเป็นตัวช่วยให้คุณมีสุขภาพที่ดีขึ้นได้ คุณสามารถค้นหาจำนวนแคลอรี่ของอาหารในและ<br></br>รับประทานให้เหมาะสมในทุกๆวันของคุณ
            </HeroP>
            
            <SignInBtnLink to="/search"
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            >Get started{hover ? <ArrowForward /> : <ArrowRight />}</SignInBtnLink> 
           
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;