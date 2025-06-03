import React from "react";
import "./ProductCard.css"; // Assuming you have a CSS file for styles

function ProductCard({ product }) {
  const { image, brand, title, selling_price, price, disscount } = product;
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          // src="https://th.bing.com/th/id/OIP.Q6_bOWeSy35ETkY9YieAswHaJQ?r=0&w=1600&h=2000&rs=1&pid=ImgDetMain"
          src={image}
          alt="Product"
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      {/* <div className='flex flex-col justify-between p-2'>
            <h1 className='text-lg font-semibold'>Product Name</h1>
            <p className='text-sm text-gray-600'>Short description of the product goes here.</p>
            <div className='flex justify-between items-center'>
                <span className='text-lg font-bold text-red-500'>₹999</span>
                <button className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors'>Add to Cart</button>
            </div>
        </div>
        <div className='flex justify-between items-center p-2 border-t'>
            <span className='text-sm text-gray-500'>Rating: 4.5</span>
            <span className='text-sm text-gray-500'>Reviews: 120</span>     
        </div>
        <div className='flex justify-between items-center p-2 border-t'>
            <span className='text-sm text-gray-500'>Category: Clothing</span>
            <span className='text-sm text-gray-500'>Stock: Available</span>
        </div>
        <div className='flex justify-between items-center p-2 border-t'>
            <span className='text-sm text-gray-500'>Brand: Brand Name</span>
            <span className='text-sm text-gray-500'>SKU: 123456</span>
        </div>
        <div className='flex justify-between items-center p-2 border-t'>
            <span className='text-sm text-gray-500'>Color: Red</span>
            <span className='text-sm text-gray-500'>Size: M</span>
        </div>
        <div className='flex justify-between items-center p-2 border-t'>
            <span className='text-sm text-gray-500'>Discount: 10%</span>
            <span className='text-sm text-gray-500'>Offer: Buy 1 Get 1</span>
        </div> */}

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{brand}</p>
          <p className="">{title}</p>
        </div>

        <div className="flex items-center spacex-2">
          <p className="font-semibold">{selling_price}</p>
          <p className="opacity-50 line-through">{price}</p>
          <p className="text-green-600 font-semibold">{disscount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
