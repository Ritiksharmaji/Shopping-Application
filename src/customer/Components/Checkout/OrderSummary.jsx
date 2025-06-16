import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';
import CartItem from '../Cart/CartItem';
import Cart from '../Cart/Cart';

function OrderSummary() {
  return (
    // <Box className="border rounded-md p-6 shadow-md bg-white w-full max-w-md">
    //   <Typography variant="h6" className="font-semibold mb-4">
    //     Order Summary
    //   </Typography>

    //   <Box className="space-y-3">
    //     <Box className="flex justify-between">
    //       <Typography>Subtotal</Typography>
    //       <Typography>$456</Typography>
    //     </Box>
    //     <Box className="flex justify-between">
    //       <Typography>Discount</Typography>
    //       <Typography className="text-green-600">- $23</Typography>
    //     </Box>
    //     <Box className="flex justify-between">
    //       <Typography>Delivery Charges</Typography>
    //       <Typography>$40</Typography>
    //     </Box>
    //     <Divider className="my-3" />
    //     <Box className="flex justify-between font-semibold text-lg">
    //       <Typography>Total</Typography>
    //       <Typography>$473</Typography>
    //     </Box>
    //   </Box>

    //   <Button
    //     variant="contained"
    //     fullWidth
    //     sx={{
    //       mt: 4,
    //       bgcolor: 'rgb(145, 85, 253)',
    //       '&:hover': { bgcolor: 'rgb(125, 65, 230)' },
    //     }}
    //   >
    //     Proceed to Checkout
    //   </Button>
    // </Box>
    <div>
        <div className='p-5 shadow-lg rounded-s-mb border'>
          <AddressCard/>
          <Cart/>

        </div>
    </div>
  );
}

export default OrderSummary;
