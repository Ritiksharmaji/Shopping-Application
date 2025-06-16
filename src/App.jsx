
import './App.css'
import React from 'react'
import Navigation from './customer/Components/Navbar/Navigation'
import Homepage from './customer/Pages/Homepage'
import Product from './customer/Product/Product'
import Footer from './customer/Components/Footer/Footer'
import ProductDetails from './customer/Components/ProductDetails/ProductDetails'
import Cart from './customer/Components/Cart/Cart'
import Checkout from './customer/Components/Checkout/Checkout'

function App() {
 
  return (
    <>
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
    
      {/* <Footer/> */}
      <Footer/>
    </>
  )
}

export default App
