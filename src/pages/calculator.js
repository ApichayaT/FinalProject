import React, {useState} from 'react'
import Calculator from '../components/Calculator'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const CalculatorPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }
  

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Calculator />
        <Footer />
    </>
  )
}

export default CalculatorPage