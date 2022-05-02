import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Blog1 from '../../components/ฺBlogItem/indexB1'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const BlogPage1 = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Blog1 />
      <Footer />
      <ScrollToTop />
      
    </>
  )
}

export default BlogPage1




