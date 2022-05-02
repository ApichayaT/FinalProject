import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Blog3 from '../../components/ฺBlogItem/indexB3'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const BlogPage3 = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Blog3 />
      <Footer />
      <ScrollToTop />
      
    </>
  )
}

export default BlogPage3




