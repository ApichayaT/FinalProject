import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Blog4 from '../../components/ฺBlogItem/indexB4'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const BlogPage4 = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Blog4 />
      <Footer />
      <ScrollToTop />
      
    </>
  )
}

export default BlogPage4




