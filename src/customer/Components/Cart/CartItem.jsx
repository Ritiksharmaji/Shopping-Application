import React, { useEffect, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem, getCart } from '../../../State/Customers/Cart/Action';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const{cart} = useSelector((store)=>store.cart)
  const [loading, setLoading] = useState({
    update: false,
    remove: false
  });

  const handleUpdateCartItem = async (num) => {
    setLoading({...loading, update: true});
    try {
      const data = {
        data: { quantity: item.quantity + num },
        cartItemId: item._id
      };
      await dispatch(updateCartItem(data));
      await dispatch(getCart());
    } finally {
      setLoading({...loading, update: false});
    }
  };
   
  const handleRemoveCartItem = async () => {
    setLoading({...loading, remove: true});
    try {
      await dispatch(removeCartItem(item._id));
      await dispatch(getCart()); 
    } finally {
      setLoading({...loading, remove: false});
    }
  };

  // useEffect(()=>{
  //   dispatch(getCart())
  // },[cart.deleteCartItems, cart.updateCartItem])


  return (
    <div className="p-5 shadow-lg border rounded-md">
      {/* Top Row: Image & Details */}
      <div className="flex items-center">
        {/* Product Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt="Product"
          />
        </div>

        {/* Product Details */}
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">{item.product.brand}</p>

          {/* Price Info */}
          <div className="flex space-x-5 items-center text-gray-900 mt-6">
            <p className="font-semibold">${item.price}</p>
            <p className="opacity-50 line-through">${item.discountedPrice}</p>
            <p className="text-green-600 font-semibold">{item.discountPersent ?item.discountPersent: 0 }% off</p>
          </div>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="pt-4 lg:flex items-center lg:space-x-10 ">
        <div className="flex items-center space-x-4">
         <IconButton 
          onClick={() => handleUpdateCartItem(-1)} 
          disabled={item.quantity <= 1 || loading.update}
        >
          <RemoveCircleOutlineIcon />

          </IconButton>
          <span className="py-1 px-6 border rounded-sm text-sm">
          {item.quantity}
        </span>
        <IconButton 
          onClick={() => handleUpdateCartItem(1)}
          disabled={loading.update}
        >
          <AddCircleOutlineIcon />
        </IconButton>
        </div>

        <div>
             <Button 
        onClick={handleRemoveCartItem}
        disabled={loading.remove}
      >
        {loading.remove ? 'Removing...' : 'Remove'}
      </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
