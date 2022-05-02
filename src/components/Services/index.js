import React from 'react'
import Icon1 from '../../images/service1.jpg'
import Icon2 from '../../images/svg-2.svg'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    BlogBtn, 
    BlogBtnLink
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>บทความ เกร็ดความรู้ต่าง ๆ</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog1">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog2">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog3">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
        </ServicesWrapper>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog4">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog5">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Work From Home ในช่วง COVID-19 กับน้ำหนักที่เพิ่มขึ้น</ServicesH2>
                <ServicesP>จากสถานการณ์การระบาดของไวรัส COVID-19 ทำให้หลายคน มีโอกาสที่จะอยู่บ้านกันมากขึ้น ทั้งการถูกกักตัวหรือแม้แต่ Work From Home (WFH) ก็ตาม…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog6">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services