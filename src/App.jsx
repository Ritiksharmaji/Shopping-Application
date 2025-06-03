
import './App.css'
import React from 'react'
import Navigation from './customer/Components/Navbar/Navigation'
import Homepage from './customer/Pages/Homepage'
import Product from './customer/Product/Product'
import Footer from './customer/Components/Footer/Footer'

function App() {
 
  return (
    <>
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        <Product/>
      </div>
    
      {/* <Footer/> */}
      <Footer/>
    </>
  )
}

export default App
