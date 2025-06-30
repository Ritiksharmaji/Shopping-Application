import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../State/Customers/Order/Action';
import { useNavigate } from 'react-router-dom';

export default function DeliveryAddressForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const addressData = {};

        for (let [key, value] of formData.entries()) {
            addressData[key] = value;
        }

        const orderData = {addressData, navigate};
        console.log('Address Data:', addressData);
        dispatch(createOrder(orderData));

};



  return (
    <div className="px-4 py-6">
      <Typography variant="h5" className="font-semibold mb-6">
        Select Delivery Address
      </Typography>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Address Card List */}
        <div className="lg:col-span-5">
          <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-auto">
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard />
              <Button
                sx={{ mt: 2, bgcolor: 'rgb(145, 85, 253)' }}
                size="large"
                variant="contained"
                fullWidth
              >
                Deliver Here
              </Button>
            </div>
          </Box>
        </div>

        {/* RIGHT: New Address Form */}
        <div className="lg:col-span-7">
          <Box className="border rounded-md shadow-md p-6 bg-white">
            <Typography variant="h6" className="font-semibold mb-4">
              Add New Address
            </Typography>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextField
                    required
                    id="address"
                    name="streetAddress"
                    label="Full Address"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="shipping address"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                  />
                </div>

                 <div>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                  />
                </div>

                <div>
                  <TextField
                    required
                    id="zip"
                    name="zipCode"
                    label="Zip / Postal Code"
                    fullWidth
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextField
                    required
                    id="phone"
                    name="mobile"
                    label="Phone Number"
                    fullWidth
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 1,
                      bgcolor: 'rgb(145, 85, 253)',
                      '&:hover': { bgcolor: 'rgb(125, 65, 230)' },
                    }}
                    fullWidth
                  >
                    Save & Continue
                  </Button>
                </div>
              </div>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
}
