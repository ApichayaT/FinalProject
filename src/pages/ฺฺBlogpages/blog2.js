import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Blog2 from '../../components/ฺBlogItem/indexB2'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const BlogPage2 = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Blog2 />
      <ScrollToTop />
      <Footer />
      
    </>
  )
}

export default BlogPage2




