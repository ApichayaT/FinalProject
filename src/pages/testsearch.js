import React, {useState} from 'react'
import TestSearch from '../components/TestSearch'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TestSearchPage = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <TestSearch />
        <Footer />
    </>
  )
}

export default TestSearchPage