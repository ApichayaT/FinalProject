import React, {useState}  from 'react'
import { BlogpostContainer ,Blogcard ,PostTitle, PostedBy} from './BlogElements'
import { FaAlignLeft } from 'react-icons/fa' 
import { BsPersonCircle } from "react-icons/bs";


const Blog1 = () => {
  return (
    <>
        <BlogpostContainer id="services">
            <Blogcard>
            <PostTitle>ผลวิจัยเผย กักตัวอยู่บ้านเป็นสาหตุที่ทำให้น้ำหนักเพิ่มต่อเนื่อง</PostTitle>
            <PostedBy>
            <BsPersonCircle/>By : Calories 
            <FaAlignLeft  />Last Updated: เมษายน 24, 2021
            </PostedBy>
    
            </Blogcard>
        </BlogpostContainer>
    </>
  )
}

export default Blog1
