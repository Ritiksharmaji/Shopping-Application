
import './App.css'
import React from 'react'
import Navigation from './customer/Components/Navbar/Navigation'
import Homepage from './customer/Pages/Homepage'
import Product from './customer/Product/Product'
import Footer from './customer/Components/Footer/Footer'
import ProductDetails from './customer/Components/ProductDetails/ProductDetails'

function App() {
 
  return (
    <>
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        {/* <Product/> */}
        <ProductDetails/>
      </div>
    
      {/* <Footer/> */}
      <Footer/>
    </>
  )
}

export default App
