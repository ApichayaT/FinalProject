import React, {useState} from 'react'
import Calculator from '../components/Calculator'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop';

const CalculatorPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(isOpen);
    }

  return (
    <>
        <Navbar />
        <Calculator />
        <Footer />
        <ScrollToTop/>
    </>
  )
}

export default CalculatorPage