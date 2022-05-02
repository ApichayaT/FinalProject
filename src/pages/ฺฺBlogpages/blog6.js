import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Blog6 from '../../components/ฺBlogItem/indexB6'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const BlogPage6 = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Blog6 />
      <Footer />
      <ScrollToTop />
      
    </>
  )
}

export default BlogPage6




