import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    BlogBtn 
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Blog</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >READ MORE</BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >READ MORE</BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >READ MORE</BlogBtn>
            </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >READ MORE</BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >READ MORE</BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >READ MORE</BlogBtn>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services