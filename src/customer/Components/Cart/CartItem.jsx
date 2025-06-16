import React from 'react';
import { Button, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      {/* Top Row: Image & Details */}
      <div className="flex items-center">
        {/* Product Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://cdn.shopify.com/s/files/1/1997/7263/products/LV115198-196BLSKDO-N2000x3000_300-FRONT_1afad24c-8e70-4710-bdb0-34b06c9b0c75_530x@2x.jpg?v=1551294643"
            alt="Product"
          />
        </div>

        {/* Product Details */}
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slip Rise Bloac</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller: ILA Enterprises</p>

          {/* Price Info */}
          <div className="flex space-x-5 items-center text-gray-900 mt-6">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through">$211</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="pt-4 lg:flex items-center lg:space-x-10 ">
        <div className="flex items-center space-x-4">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-6 border rounded-sm text-sm">3</span>
          <IconButton sx={{ color: 'rgb(145, 85, 253)' }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
            <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
