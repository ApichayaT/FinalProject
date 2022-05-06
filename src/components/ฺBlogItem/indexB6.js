import React  from 'react'
import { BlogpostContainer ,Blogcard ,PostTitle, PostedBy,PostImage,Contentp,Contentheader,ContentConclusion} from './BlogElements' 
import { BsPersonCircle ,BsCalendar} from "react-icons/bs";
import fat1 from '../../images/fat1.jpg'
import fat2 from '../../images/fat2.jpg'
import fat3 from '../../images/fat3.jpg'
import fat4 from '../../images/fat4.jpg'
import fat5 from '../../images/fat5.jpg'
import fat6 from '../../images/fat6.jpg'

const Blog6 = () => {
  return (
    <>
        <BlogpostContainer >
            <Blogcard>
            <PostTitle>อ้วน หรือเปล่า? วิธีเช็คง่ายๆก่อนสายเกินแก้</PostTitle>
            <PostedBy>
              <BsPersonCircle class="iconperson"/> By: Calories 
              <BsCalendar class="iconcalendar" /> Updated: เมษายน 24, 2022
            </PostedBy>
            <PostImage src={fat1}/>
                <Contentp>อ้วน แล้วหรือยัง? คำถามสั้นๆเกี่ยวกับร่างกายตัวเองที่ใครหลายคนไม่กล้าถาม ความอ้วน เป็นสิ่งที่เกิดขึ้นได้ง่ายและต้องใช้ความพยายามมากในการจะกำจัดไปให้ได้ 
                  หลายคนยังคงสับสนว่ารูปร่างแบบตัวเองนี่ถือว่า อ้วน แล้วหรือเปล่า ซึ่งความจริงอาจจะยังไม่อ้วน หรือบางคนอาจจะอ้วนจนถึงเวลาสมควรที่จะต้องลดได้แล้ว 
                  วันนี้เราจะมาพูดถึงเรื่องของความอ้วนกันว่าความอ้วนคืออะไร วิธีดูว่าตัวเองอ้วนหรือไม่ และวิธีเช็คความอ้วนก่อนสายเกินแก้
                </Contentp>
            <Contentheader>ความอ้วนคืออะไร ทำไมใครๆก็กลัว อ้วน</Contentheader>
                <Contentp>โความอ้วนคือภาวะที่ร่างกายสะสมไขมันไว้ใต้ชั้นผิวหนังมากเกินความจำเป็นหรือมากผิดปกติ ความอ้วนสามารถส่งผลต่อสุขภาพได้หลายอย่างเช่น โรคหัวใจ โรคเบาหวาน ความดันโลหิตสูง 
                  นอนกรน หายใจติดขัด ฯลฯ ซึ่งความอ้วนเกิดได้จากหลายสาเหตุ อาทิเช่น
                </Contentp>

            <Contentheader>1. กรรมพันธุ์</Contentheader>
                <PostImage src={fat2}/>
                <Contentp>
                จากการศึกษาพบว่าความ อ้วน ของพ่อแม่มีผลถึงร้อยละ 80 ต่อความอ้วนของลูก
                </Contentp>
            
            <Contentheader>2. อายุและเพศ</Contentheader>
                <PostImage src={fat3}/>
                <Contentp>ปฏิเสธไม่ได้ว่าในคนอายุมากมีโอกาสที่จะอ้วนขึ้นมากกว่าคนที่อายุน้อย เนื่องจากระบบต่างๆในร่างกายทำงานช้าลงและเริ่มไม่มีประสิทธิภาพ และยิ่งในเพศหญิงยิ่งมีโอกาสอ้วนได้ง่ายกว่าผู้ชาย</Contentp>
            <Contentheader>3. ไลฟ์สไตล์</Contentheader>
            <PostImage src={fat4}/>
              <Contentp>ไม่ว่าจะเป็นพฤติกรรมการกินแป้งกับน้ำตาลเป็นจำนวนมากหรือไลฟ์สไตล์แบบนั่งๆ นอนๆ ไม่ยอมออกกำลังกายก็สามารถทำให้เราอ้วนขึ้นได้ทั้งนั้น</Contentp>
                <Contentheader>4. ต่อมไร้ท่อ</Contentheader>
            <PostImage src={fat5}/>
              <Contentp>ในบางคนนั้นมีภาวะ อ้วน เพราะการทำงานของต่อมไร้ท่อผิดปกติ คนที่อ้วนด้วยสาเหตุนี้ต้องได้รับการรักษาที่ต้นเหตุ</Contentp>
                <Contentheader>5. โรคและการรักษา</Contentheader>
            <PostImage src={fat6}/>
              <Contentp>เบางโรคและการรักษาอาจมีผลข้างเคียงที่ทำให้อ้วนขึ้นได้ เช่นการใช้ยาคลายเครียดในผู้ป่วยโรคซึมเศร้า หรือการกินยาคุมกำเนิด เป็นต้น</Contentp>
                
                <Contentheader>โภชนาการทำให้อ้วนได้ยังไง</Contentheader>
                <Contentp>การกินอาหารนั้นหากเราไม่คำนึงถึงสิ่งที่ได้รับเข้าไปหรือสัดส่วนของสารอาหารอาจทำให้เกิดผลกระทบที่ร้ายแรงตามมาได้ เช่น ความดัน โรคเบาหวาน การเจริญเติบโตผิดปกติ 
                  หรืออาจทำให้ร่างกายเกิดความผิดปกติ เช่น การกินสารอาหารที่ให้พลังงานอย่างคาร์โบไฮเดรตมากเกินไปในขณะที่ร่างกายไม่ได้ใช้พลังงานในแต่ละวันเลยจะทำให้เกิดไขมันสะสมต่างอวัยวะต่างๆ ได้และหากมีมากๆ อาจเป็นสาเหตุหนึ่งของโรคต่างๆ ตามมาได้</Contentp>
                  <h4>&nbsp;</h4>
            <ContentConclusion>
              บทสรุป ความอ้วนเกิดได้จากหลายสาเหตุ ทั้งปัจจัยภายนอกและปัจจัยภายใน
            </ContentConclusion>
            <Contentheader>อ้วน แล้วทำยังไงดี?</Contentheader>
            <Contentp> เมื่อเรารู้ตัวว่าอ้วนขึ้นแล้ว สิ่งที่เราควรจะทำคือควบคุมน้ำหนักให้อยู่ในเกณฑ์ที่เหมาะสม ด้วยวิธีการต่อไปนี้
                  <li className="bulltesH"><b className="bulltesp">อย่าอดอาหาร</b> <br></br></li>
                  <li className="bulltesH"><b className="bulltesp">เน้นโปรตีนและไฟเบอร์</b> <br></br></li>
                  <li className="bulltesH"><b className="bulltesp">อ่านฉลากก่อนซื้อของกิน</b> <br></br></li>
                  <li className="bulltesH"><b className="bulltesp">ลดแอลกอฮอล์</b> <br></br></li>
                  <li className="bulltesH"><b className="bulltesp">ลดคาร์โบไฮเดรต</b> <br></br></li>
                  <li className="bulltesH"><b className="bulltesp">เลี่ยงของหวานและเครื่องดื่มที่มีน้ำตาล</b> <br></br></li>
                  <li className="bulltesH"><b className="bulltesp">นอนหลับให้เพียงพอ</b> <br></br></li>
                  <li className="bulltesH"><b className="bulltesp"> หลีกเลี่ยงไขมันทรานส์</b> <br></br></li>
                </Contentp>
                <h4>&nbsp;</h4>
            <ContentConclusion>
              บทสรุป การควบคุมน้ำหนักสามารถทำได้ด้วยการคุมอาหารเป็นหลัก ควบคู่ไปกับการออกกำลังกายและอาจจะใช้อาหารเสริมเป็นตัวช่วยให้การควบคุมน้ำหนักมีประสิทธิภาพยิ่งขึ้นด้วย
            </ContentConclusion>
              </Blogcard>
        </BlogpostContainer>
    </>
  )
}

export default Blog6
