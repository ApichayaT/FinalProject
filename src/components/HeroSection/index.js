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
                Sign up for a new account today and recieve $250 in credits towards your next payment.
            </HeroP>
            
            <SignInBtnLink to="/signin"
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