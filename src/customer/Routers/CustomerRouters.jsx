import React from 'react';
import Homepage from '../Pages/Homepage';
import Cart from '../Components/Cart/Cart';
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/Navbar/Navigation';
import Product from '../Product/Product';
import OrderDetails from '../Components/Order/OrderDetails';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import Checkout from '../Components/Checkout/Checkout';
import Order from '../Components/Order/Order';

function CustomerRouters() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/login' element={<Homepage />} />
        <Route path='/register' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />} /> */}
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />

        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/account/order' element={<Order/>}/>
        
        <Route path='/account/order-details/:id' element={<OrderDetails />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default CustomerRouters;
