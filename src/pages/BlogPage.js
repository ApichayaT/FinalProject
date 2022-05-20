import React, {useState} from 'react'
import Blogg from '../components/Blogpage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Sidebar from '../components/Sidebar'
const BlogPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>  
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Blogg />
        <Footer />
        <ScrollToTop />
    </div>
  )
}

export default BlogPage