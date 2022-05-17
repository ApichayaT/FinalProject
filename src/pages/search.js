import React, { useState } from 'react'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const SearchPage = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Search />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default SearchPage