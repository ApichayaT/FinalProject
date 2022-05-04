import React from 'react'
import Icon1 from '../../images/service1.jpg'
import Icon2 from '../../images/service2.jpg'
import Icon3 from '../../images/service3.jpg'
import Icon4 from '../../images/service4.jpg'



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
        <ServicesH1>บทความ</ServicesH1>
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
                <ServicesH2>คีโตไดเอท คืออะไร ลดน้ำหนักแบบคีโตเจนิค ไดเอท</ServicesH2>
                <ServicesP>ปัจจุบันมีหลากหลายวิธี ที่เป็นที่นิยมกันอย่างแพร่หลาย สำหรับการลดน้ำหนักด้วยวิธีการต่างๆ สำหรับสาวๆ หรือหนุ่มๆ ที่ชื่นชอบการไดเอท เพื่อลดความอ้วน…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog2">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>ไดเอทแบบมีความสุข อยากกินต้องได้กิน</ServicesH2>
                <ServicesP>ใครว่าการไดเอทคือการต้องอดหรือต้องหยุดกินสิ่งที่อยากกิน นั้นไม่จริงเลย เพราะวิธีไดเอทที่ถูกต้องคือการเลือกกินสิ่งที่มีคุณภาพในปริมาณที่เหมาะสม…</ServicesP>
                <BlogBtn >
                    <BlogBtnLink to="/blog3">READ MORE</BlogBtnLink>
                </BlogBtn>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4} />
                <ServicesH2>วิตามิน ‘บำรุงสายตา’ เพิ่มการมองเห็น ป้องกันตาเสื่อมก่อนวัย</ServicesH2>
                <ServicesP>‘วิตามินบำรุงสายตา’ ณ ช่วงเวลานี้คงมีหลายคนที่กำลังต้องการอาหารเสริมหรือวิตามินบำรุงสายตาอยู่ไม่น้อย เพราะไลฟ์สไตล์การใช้ชีวิต...</ServicesP>
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