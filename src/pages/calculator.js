import React, {useState} from 'react'
import Calculator from '../components/Calculator'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    </>
  )
}

export default CalculatorPage