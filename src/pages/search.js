import React, { useState } from 'react'
import Search from '../components/Search'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


const SearchPage = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
      <Navbar toggle={toggle} />
      <Search/>
      <Footer />
    </>
  )
}

export default SearchPage