import React from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const dummyProducts = [
  {
    id: 1,
    name: 'Noise Smart Watch',
    image: 'https://via.placeholder.com/80',
    rating: 4.2,
    price: '₹3,299',
  },
  {
    id: 2,
    name: 'JBL Earbuds',
    image: 'https://via.placeholder.com/80',
    rating: 4.5,
    price: '₹2,099',
  },
];

function Cart() {
  const navigate = useNavigate();
return(

   <div className="w-full">
  <div className="lg:grid grid-cols-3 lg:px-16 gap-6 relative">

    {/* Left: Cart Items */}
    <div className="col-span-2 space-y-5">
      <CartItem />
      <CartItem />
    </div>

    {/* Right: Price Details */}
    <div className="px-5 lg:px-0 mt-5 lg:mt-0 sticky top-5 h-fit">
      <div className="border p-5 rounded-lg shadow-md bg-white">
        <p className="uppercase font-bold text-gray-500 pb-4 border-b">Price Details</p>
        
        <div className="space-y-4 pt-4 font-semibold text-sm">
          <div className="flex justify-between">
            <span>Price</span>
            <span>$456</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">- $23</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charge</span>
            <span>$40</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-base">
            <span>Total Amount</span>
            <span className="text-purple-600 font-bold">$123456</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button onClick={()=>navigate('/checkout/?step=2')}
          className="w-full mt-6 bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</div>

)

}

export default Cart;
