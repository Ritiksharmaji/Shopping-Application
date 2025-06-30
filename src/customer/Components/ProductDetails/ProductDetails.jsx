import React, { useEffect } from 'react'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
  }
  ```
*/
'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Box, Button, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import './prograa.css';
import SimilarProductsSection from './SimilarProductsSection'
import { mens_kurta } from '../../../Data/mens_kurta'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../State/Customers/Product/Action'
import { addItemToCart, getCart } from '../../../State/Customers/Cart/Action'
// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
//     { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
//     { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
//   ],
//   sizes: [
//     // { name: 'XXS', inStock: false },
//     // { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     // { name: '2XL', inStock: true },
//     // { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((store) => ({
    product: store.product.product,
    loading: store.product.loading,
    error: store.product.error
  }));

  const [selectedSize, setSelectedSize] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    if (params.productId) {
      dispatch(findProductById({ productId: params.productId }));
    }
  }, [params.productId]);

  // Set first available size as default
  useEffect(() => {
    if (product?.sizes?.length > 0) {
      const firstAvailableSize = product.sizes.find(size => size.quantity > 0);
      if (firstAvailableSize) {
        setSelectedSize(firstAvailableSize);
      }
    }
  }, [product]);

  const handleAddtoCart = async () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    setAddingToCart(true);
    try {
      const cartData = {
        productId: params.productId,
        size: selectedSize.name,
        quantity: 1
      };
      
      await dispatch(addItemToCart(cartData));
      await dispatch(getCart());
      navigate('/cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setAddingToCart(false);
    }
  };


// Proper loading/error states
  if (loading) return <div className="text-center p-8">Loading product details...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center p-8">Product not found</div>;
  // return (
  //   <div className="container mx-auto px-4 py-8">
  //     <div className="flex flex-col md:flex-row gap-8">
  //       {/* Product Image */}
  //       <div className="md:w-1/2">
  //         <img 
  //           src={product.imageUrl} 
  //           alt={product.title} 
  //           className="w-full rounded-lg shadow-lg"
  //         />
  //       </div>

  //       {/* Product Details */}
  //       <div className="md:w-1/2">
  //         <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
  //         <p className="text-gray-600 mb-4">{product.brand}</p>

  //         <div className="flex items-center gap-4 mb-4">
  //           <span className="text-2xl font-bold">₹{product.discountedPrice}</span>
  //           {product.discountPersent > 0 && (
  //             <>
  //               <span className="text-gray-500 line-through">₹{product.price}</span>
  //               <span className="text-green-600 font-medium">
  //                 {product.discountPersent}% off
  //               </span>
  //             </>
  //           )}
  //         </div>

  //         <div className="mb-6">
  //           <h2 className="text-lg font-semibold mb-2">Description</h2>
  //           <p className="text-gray-700">{product.description}</p>
  //         </div>

  //         {/* Color */}
  //         <div className="mb-4">
  //           <h3 className="text-lg font-semibold mb-2">Color</h3>
  //           <div className="flex items-center gap-2">
  //             <div 
  //               className="w-8 h-8 rounded-full border border-gray-300"
  //               style={{ backgroundColor: product.color.toLowerCase() }}
  //               title={product.color}
  //             />
  //             <span>{product.color}</span>
  //           </div>
  //         </div>

  //         {/* Sizes */}
  //         <div className="mb-6">
  //           <h3 className="text-lg font-semibold mb-2">Available Sizes</h3>
  //           <div className="flex flex-wrap gap-2">
  //             {product.sizes.map((size) => (
  //               <button
  //                 key={size.name}
  //                 className={`px-4 py-2 border rounded-md ${
  //                   size.quantity > 0 
  //                     ? "border-gray-300 hover:bg-gray-100" 
  //                     : "border-gray-200 text-gray-400 cursor-not-allowed"
  //                 }`}
  //                 disabled={size.quantity <= 0}
  //                 title={size.quantity <= 0 ? "Out of stock" : ""}
  //               >
  //                 {size.name} {size.quantity <= 0 && "(Out of stock)"}
  //               </button>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Quantity in Stock */}
  //         <div className="mb-6">
  //           <p className="text-gray-700">
  //             <span className="font-semibold">Availability:</span> 
  //             {product.quantity > 0 
  //               ? ` In Stock (${product.quantity} available)` 
  //               : " Out of Stock"}
  //           </p>
  //         </div>

  //         {/* Category */}
  //         <div className="mb-6">
  //           <p className="text-gray-700">
  //             <span className="font-semibold">Category:</span> {product.category?.name}
  //           </p>
  //         </div>

  //         {/* Buttons */}
  //         <div className="flex gap-4">
  //           <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
  //             Add to Cart
  //           </button>
  //           <button className="border border-black px-6 py-3 rounded-md hover:bg-gray-100 transition">
  //             Buy Now
  //           </button>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Reviews Section */}
  //     <div className="mt-12">
  //       <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
  //       {product.reviews && product.reviews.length > 0 ? (
  //         <div className="space-y-4">
  //           {product.reviews.map((review) => (
  //             <div key={review._id} className="border-b pb-4">
  //               <div className="flex items-center gap-2 mb-2">
  //                 <span className="font-semibold">{review.user?.name || "Anonymous"}</span>
  //                 <div className="flex">
  //                   {[...Array(5)].map((_, i) => (
  //                     <span key={i}>
  //                       {i < review.rating ? "★" : "☆"}
  //                     </span>
  //                   ))}
  //                 </div>
  //               </div>
  //               <p>{review.comment}</p>
  //               <p className="text-sm text-gray-500 mt-1">
  //                 {new Date(review.createdAt).toLocaleDateString()}
  //               </p>
  //             </div>
  //           ))}
  //         </div>
  //       ) : (
  //         <p>No reviews yet. Be the first to review!</p>
  //       )}
  //     </div>
  //   </div>
  // );


console.log(product.category?.name);

 return (
    <div className="bg-white lg:px-15">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm">
              <a href="/" className="font-medium text-gray-500 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
                <a href={`/category/${product.category?._id}`} className="ml-2 text-sm font-medium text-gray-900">
                  {product.category?.name}
                </a>
              </div>
            </li>
            <li className="text-sm">
              <div className="flex items-center">
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-500" aria-current="page">
                  {product.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className='overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]'>
              <img
                alt={product.title}
                src={product.imageUrl}
                className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
              />
            </div>
            <div className='flex flex-wrap space-x-5 justify-center'>
              {/* Assuming product has multiple images */}
              {[product.imageUrl, product.imageUrl, product.imageUrl].map((image, index) => (
                <div key={index} className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4'>
                  <img
                    alt={`${product.title} ${index + 1}`}
                    src={image}
                    className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className='lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24'>
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>{product.brand}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>
                  ₹{product.discountedPrice}
                </p>
                <p className='opacity-50 line-through'>
                  ₹{product.price}
                </p>
                <p className='text-green-600 font-semibold'>
                  {product.discountPersent}% off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className='flex items-center space-x-3'>
                  <Rating name="read-only" value={product.ratings?.average || 50} readOnly />
                  <p className='opacity-50 text-sm'>{product.numRatings || 50} Ratings</p>
                  <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                    {product.reviews?.length || 50} Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.sizes.map((size) => (
                        <button
                          key={size.name}
                          type="button"
                          onClick={() => setSelectedSize(size)}
                          disabled={size.quantity <= 0}
                          className={`group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase 
                            ${size.quantity > 0 
                              ? 'cursor-pointer bg-white text-gray-900 hover:bg-gray-50' 
                              : 'cursor-not-allowed bg-gray-50 text-gray-200'}
                            ${selectedSize?.name === size.name ? 'ring-2 ring-indigo-500' : ''}
                          `}
                        >
                          {size.name}
                          {size.quantity <= 0 && (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 flex items-center justify-center"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="h-full w-full stroke-2 text-gray-200"
                              >
                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <button 
                  type="button" 
                  onClick={handleAddtoCart}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {[
                      "Hand cut and sewn locally",
                      "Dyed with our proprietary colors",
                      "Pre-washed & pre-shrunk",
                      "Ultra-soft 100% cotton"
                    ].map((highlight, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rating and reviews section */}
        <section className="w-full px-5">
          <h1 className='py-5 text-xl font-bold'>Rating and Review</h1>
          <div className="flex flex-col md:flex-row justify-between gap-8 border p-5">
            {/* LEFT: Reviews */}
            <div className="w-full md:w-7/12 space-y-6">
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <div key={review._id} className="border-b pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold">{review.user?.name || "Anonymous"}</span>
                      <Rating value={review.rating} readOnly size="small" />
                      <span className="text-sm text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet. Be the first to review!</p>
              )}
            </div>

            {/* RIGHT: Product Ratings */}
            <div className="w-full md:w-5/12">
              <h2 className="text-xl font-semibold pb-2">Product Ratings</h2>
              <div className="flex items-center gap-3 mb-6">
                <Rating value={product.ratings?.average || 0} precision={0.5} readOnly />
                <p className="text-gray-500">{product.numRatings || 0} Ratings</p>
              </div>

              {/* Rating distribution */}
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-4 mb-2">
                  <p className="w-8">{stars} star{stars !== 1 ? 's' : ''}</p>
                  <div className="flex-1">
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-500" 
                        style={{ width: `${(product.ratings?.distribution?.[stars] || 0) / (product.numRatings || 1) * 100}%` }}
                      />
                    </div>
                  </div>
                  <p className="w-12 text-right text-sm text-gray-500">
                    {Math.round((product.ratings?.distribution?.[stars] || 0) / (product.numRatings || 1) * 100)}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Similar products */}
        <section className='pt-10 px-5'>
          <h1 className='py-5 text-xl font-bold'>Similar Products</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {/* Replace with actual similar products data */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border rounded-lg p-4">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="font-medium">Similar Product {item}</h3>
                <p className="text-gray-600">₹{item * 1000}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );


 
// return (
//     <div className="bg-white lg:px-15">
//       <div className="pt-6">
//         {/* Breadcrumbs */}
//         <nav aria-label="Breadcrumb">
//           <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//             <li className="text-sm">
//               <a href="/" className="font-medium text-gray-500 hover:text-gray-600">
//                 Home
//               </a>
//             </li>
//             <li>
//               <div className="flex items-center">
//                 <svg className="h-5 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
//                 </svg>
//                 <a href={`/category/${product.category?._id}`} className="ml-2 text-sm font-medium text-gray-900">
//                   {product.category?.name || 'Category'}
//                 </a>
//               </div>
//             </li>
//           </ol>
//         </nav>

//         {/* Product Content */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
//           {/* Image Gallery */}
//           <div className="flex flex-col items-center">
//             <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
//               <img
//                 src={product.imageUrl}
//                 alt={product.title}
//                 className="h-full w-full object-cover object-center"
//               />
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
//             <div className="lg:col-span-2">
//               <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//                 {product.title}
//               </h1>
//               <p className="text-lg text-gray-900 opacity-60 pt-1">{product.brand}</p>
//             </div>

//             {/* Price */}
//             <div className="mt-4 lg:row-span-3 lg:mt-0">
//               <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
//                 <p className="font-semibold">₹{product.discountedPrice}</p>
//                 <p className="opacity-50 line-through">₹{product.price}</p>
//                 <p className="text-green-600 font-semibold">
//                   {product.discountPersent}% off
//                 </p>
//               </div>

//               {/* Description */}
//               <div className="mt-10">
//                 <h3 className="text-sm font-medium text-gray-900">Description</h3>
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-600">{product.description}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );

}



