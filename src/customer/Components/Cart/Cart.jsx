import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Customers/Cart/Action';

function Cart() {
  const navigate = useNavigate();
  const { cart, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  console.log('Cart in Cart Page:', cart);
  console.log('CartItems in Cart Page:', cartItems);

return(

   <div className="w-full">
  <div className="lg:grid grid-cols-3 lg:px-16 gap-6 relative">

    {/* Left: Cart Items */}
    <div className="col-span-2 space-y-5">
      {/* <CartItem /> */}
      {cartItems?.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item._id} item={item} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>

    {/* Right: Price Details */}
    <div className="px-5 lg:px-0 mt-5 lg:mt-0 sticky top-5 h-fit">
      <div className="border p-5 rounded-lg shadow-md bg-white">
        <p className="uppercase font-bold text-gray-500 pb-4 border-b">Price Details</p>
        
        <div className="space-y-4 pt-4 font-semibold text-sm">
          <div className="flex justify-between">
            <span>Price</span>
            <span>${cart?.totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">- ${cart?.discounte}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charge</span>
            <span>$40</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-base">
            <span>Total Amount</span>
            <span className="text-purple-600 font-bold">${cart?.totalDiscountedPrice}</span>
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

