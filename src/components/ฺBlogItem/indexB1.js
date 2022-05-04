import React  from 'react'
import { BlogpostContainer ,Blogcard ,PostTitle, PostedBy,PostImage,Contentp,Contentheader,ContentConclusion} from './BlogElements' 
import { BsPersonCircle ,BsCalendar} from "react-icons/bs";
import pizza from '../../images/pizza.jpg'
import WFH from '../../images/WFH.jpg'
import salad from '../../images/salad.jpg'

const Blog1 = () => {
  return (
    <>
        <BlogpostContainer id="services">
            <Blogcard>
            <PostTitle>ผลวิจัยเผย กักตัวอยู่บ้านเป็นสาหตุที่ทำให้น้ำหนักเพิ่มขึ้นต่อเนื่อง</PostTitle>
            <PostedBy>
              <BsPersonCircle class="iconperson"/> By: Calories 
              <BsCalendar class="iconcalendar" /> Updated: เมษายน 24, 2022
            </PostedBy>
            <PostImage src={pizza}/>
                <Contentp>การกักตัว อยู่บ้านนาน ๆ ในช่วงสถานการณ์ COVID-19 ทำให้วิถีชีวิตและกิจวัตรประจำวันหลายคนเปลี่ยนไป ทั้งเรื่องอาหารและการจัดการเวลาต่าง ๆ รวมถึงการเคลื่อนไหวที่น้อยลงด้วย 
              ทั้งหมดนี้ล้วนส่งผลกระทบต่อสุขภาพทั้งทางตรงและทางอ้อม จนก่อให้เกิด ‘ภาวะน้ำหนักเพิ่ม’
                </Contentp>
            <Contentheader>ผลวิจัยเผย "กักตัว อยู่บ้านทำให้น้ำหนักเพิ่มขึ้นจริง"</Contentheader>
                <Contentp>แม้เราจะคิดในใจไปแล้วว่าการกักตัว อยู่บ้านนาน ๆ ช่วงสถานการณ์ COVID-19 ไม่ได้มีผลกับน้ำหนักเลย แต่หากลองสังเกตและนับสถิติการกิน รวมถึงการทำกิจวัตรประจำวันแล้ว 
              เชื่อเถอะว่าทุกอย่างมีผลทำให้น้ำหนักเพิ่มขึ้นจริง ซึ่งพิสูจน์ได้จากงานวิจัยของ มหาวิทยาลัยแคลิฟอร์เนียซานฟรานซิสโก (UCSF) ที่ได้เผยข้อเท็จจริงให้เราเห็นกันชัด ๆ เกี่ยวกับประเด็นนี้
                </Contentp>
                <Contentp>โดยงานวิจัยได้ศึกษาจากกลุ่มตัวอย่าง จำนวน 269 คน จาก 37 รัฐ และวอชิงตันดิสตริกต์ออฟโคลัมเบีย ซึ่งผลลัพธ์เผยว่า จากกลุ่มตัวอย่างที่เข้าร่วม มีน้ำหนักตัวเพิ่มขึ้นอย่างต่อเนื่องเฉลี่ย 
              0.27 กิโลกรัม ทุก 10 วัน หรือ สรุปได้ว่า ในทุก 1 เดือนนั้น น้ำหนักจะเพิ่มขึ้นเกือบ 1 กิโลกรัมเลยทีเดียว
                </Contentp>
            <PostImage src={WFH}/>
            <Contentheader>กักตัวช่วง COVID-19 มีผลให้น้ำหนักเพิ่มอย่างไร?</Contentheader>
                <Contentp>น้ำหนักเพิ่ม...เพราะความเครียด ความกังวลเกี่ยวกับสถานการณ์ COVID-19 ที่มักวนเวียนในหัวหลาย ๆ คน คือเรื่องสุขภาพ ปัญหาการเงิน และยังรวมไปถึงการอยู่ในสภาพแวดล้อมเดิม ๆ 
                  ซึ่งความเครียดเหล่านี้ส่งผลให้น้ำหนักตัวเพิ่มขึ้น โดยก่อนที่จะพูดถึงที่มาที่ไประหว่างความเครียดและน้ำหนักนั้น ควรทำความรู้จักกับสองฮอร์โมนที่มีบทบาทกับน้ำหนักตัว นั่นคือ เลปติน หรือ ฮอร์โมนความอิ่ม 
                  ทำหน้าที่ควบคุมความอยากอาหาร และ เกรลิน หรือ ฮอร์โมนความหิว ทำหน้าที่กระตุ้นความหิว
                </Contentp>
                <Contentp>
                  ซึ่งหากคุณตกอยู่ในสภาวะเครียด จะส่งผลให้ประสิทธิภาพการทำงานของเลปตินลดลง ทำให้อยากอาหารมากกว่าปกติ ทำให้คุณกินเท่าไหร่ก็ไม่รู้จักอิ่ม และในขณะเดียวกันเกรลินถูกหลั่งออกมามากกว่าปกติ 
                  ทำให้รู้สึกหิวง่าย หิวบ่อย อยากกินตลอดเวลา นอกเหนือจากนี้ ความเครียดยังส่งผลต่อพฤติกรรมต่าง ๆ ที่มีผลกระทบต่อการเปลี่ยนแปลงของน้ำหนักด้วย
                </Contentp>
                <Contentp>ไลฟ์สไตล์เปลี่ยน...น้ำหนักจึงเปลี่ยน เรื่องเล็ก ๆ น้อย ๆ ในชีวิตประจำวันก็มีผลทำให้น้ำหนักเพิ่มได้ ซึ่งเป็นจุดเล็ก ๆ ที่บางทีเราก็มองข้าม รู้ตัวอีกทีน้ำหนักก็เพิ่มอย่างก้าวกระโดดแบบคาดไม่ถึง 
                  พฤติกรรมประจำวันแบบไหนบ้างที่เป็นตัวการของเรื่องนี้
                </Contentp>
            <h4>&nbsp;</h4>
            <ContentConclusion>
              บทสรุป งานวิจัยนั้นเผย จากกลุ่มตัวอย่างชาวอเมริกันที่กักตัวอยู่บ้าน มีน้ำหนักตัวเพิ่มขึ้นอย่างต่อเนื่อง เฉลี่ย 0.27 กิโลกรัม ทุก 10 วัน โดยสาเหตุที่ทำให้ช่วงกักตัว นั้นทำให้มีน้ำหนักเพิ่มขึ้นมาจากความเครียด 
              ซึ่งลดประสิทธิภาพการทำงานของฮอร์โมนเลปตินและเกรลิน ทำให้หิวบ่อย อยากอาหารมากกว่าปกติ
            </ContentConclusion>
            <PostImage src={salad}/>
            <Contentheader>กักตัวอยู่บ้านอย่างไรไม่ให้อ้วน?</Contentheader>
                <Contentp> 
                  <li className="bulltesH"><b className="bulltesp">ดื่มน้ำให้เพียงพอ</b> <br></br>
                    ช่วยลดปริมาณแคลอรี่ที่ได้รับในแต่ละวัน และยังส่งเสริมให้ระบบย่อยอาหารทำงานอย่างมีประสิทธิภาพ</li>
                  <li className="bulltesH"><b className="bulltesp">พักผ่อนให้เหมาะสม</b> <br></br>
                  เลี่ยงการนอนดึก เพราะทำให้ร่างกายเกิดความอยากอาหารผิดเวลา และยังมีผลต่อระบบเผาผลาญ ทำให้น้ำหนักเพิ่ม</li>
                  <li className="bulltesH"><b className="bulltesp">จัดตารางเวลาให้ชัดเจน</b> <br></br>
                  กักตัวอยู่บ้านนานทำให้กิจวัตรประจำวันเปลี่ยน ควรจัดระเบียบตัวเองให้ชัด เช่น เวลาทานอาหาร, เวลาพักผ่อน, รวมถึงตารางทำงานบ้านเล็ก ๆ น้อย และการออกกำลังกาย</li>
                  <li className="bulltesH"><b className="bulltesp">เลือกอาหารที่มีประโยชน์ให้ตัวเองบ้าง </b> <br></br>
                  เพราะอยู่บ้านใช้พลังงานน้อย การกินจึงต้องสมดุลกับพลังงานที่ใช้ในแต่ละวันด้วย เลี่ยงอาหารประเภทของทอด มัน และของหวาน</li>
                  <li className="bulltesH"><b className="bulltesp">หากิจกรรมทำให้รู้สึกคลายเครียด</b> <br></br>
                  ใจดีกับตัวเองบ้าง ยืดหยุ่นและให้อิสระกับตัวเอง อาจใช้เวลาว่างเพื่อทำกิจกรรมที่ชื่นชอบ ไม่จำเป็นต้องหมกมุ่นหรือตึงเครียดกับเรื่องใดเรื่องหนึ่งมากเกินไป</li>
                </Contentp>
                <h4>&nbsp;</h4>
            <ContentConclusion>
              บทสรุป วิธีดูแลน้ำหนักไม่ให้เพิ่มในช่วงกักตัวอยู่บ้านที่ดี คือ การรักษาสมดุลของร่างกาย เพื่อให้ฮอร์โมนและระบบต่าง ๆ ในร่างกายที่มีส่วนเกี่ยวข้องทำงานอย่างมีประสิทธิภาพ นั่นคือ รักษาสมดุลการกิน, 
              การพักผ่อน, การใช้พลังงานหรือออกกำลังกาย
            </ContentConclusion>
              </Blogcard>
        </BlogpostContainer>
    </>
  )
}

export default Blog1
