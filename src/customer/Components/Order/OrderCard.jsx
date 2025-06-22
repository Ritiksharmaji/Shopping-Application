import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function OrderCard() {
    const navigater = useNavigate();

  return (
    <div onClick={()=>navigater(`/account/order-details/${2}`)}
    className="flex justify-between  items-start border p-4 rounded-md shadow-sm bg-white hover:shadow-md transition-all">
      {/* Left: Image */}
      <div className="w-20 h-24 flex-shrink-0 cursor-pointer">
        <img
          className="w-full h-full object-cover object-top rounded"
          src="https://cdn.shopify.com/s/files/1/1997/7263/products/LV115198-196BLSKDO-N2000x3000_300-FRONT_1afad24c-8e70-4710-bdb0-34b06c9b0c75_530x@2x.jpg?v=1551294643"
          alt="Product"
        />
      </div>

      {/* Middle: Product Details */}
      <div className="flex-1 px-4">
        <p className="text-base font-semibold">Men Sim Mid Rise Black Jeans</p>
        <p className="text-sm text-gray-500 pt-1">Size: M</p>
      </div>

      {/* Price */}
      <div className="text-base font-semibold text-gray-800 px-4">
        ₹1099
      </div>

      {/* Right: Delivery Info */}
      <div className="text-right">
        <div className="flex items-center text-green-600 font-medium text-sm">
          <CheckCircle fontSize="small" className="mr-1" />
          Expected Delivery On Mar 03
        </div>
        <p className="text-xs text-gray-500 mt-1">Your item has been delivered</p>
      </div>
    </div>
  );
}

export default OrderCard;
