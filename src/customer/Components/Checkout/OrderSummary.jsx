import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';
import CartItem from '../Cart/CartItem';
import Cart from '../Cart/Cart';

function OrderSummary() {
  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-mb border'>
          <AddressCard/>
          <Cart/>

        </div>
    </div>
  );
}

export default OrderSummary;
