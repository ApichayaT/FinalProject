import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'
import Blog5 from '../../components/ฺBlogItem/indexB5'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const BlogPage5 = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Blog5 />
      <Footer />
      <ScrollToTop />
      
    </>
  )
}

export default BlogPage5




