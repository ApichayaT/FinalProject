import React, {useState} from 'react'
import Blogg from '../components/Blogpage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const BlogPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(isOpen);
    }

  return (
    <>
        <Navbar toggle={toggle} />
        <Blogg />
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default BlogPage