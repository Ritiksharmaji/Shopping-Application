import React from 'react'
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

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
  ],
  sizes: [
    // { name: 'XXS', inStock: false },
    // { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    // { name: '2XL', inStock: true },
    // { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white lg:px-15">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
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
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>


        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

        {/* Image gallery */}
        {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8"> */}
         
        <div className="flex flex-col items-center">
           <div className='overflow-hidden rounded-lg max-w-[30rem] max-h[35rem]'>
             <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
            />
           </div>
          <div className='flex flex-wrap space-x-5 justify-center'>
           {product.images.map((image)=>{
            return(
                <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 '>
                 <img
                    alt={image.alt}
                    src={image.src}
                    className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                />
            </div>
            )
           })}
          </div>
        </div>

        {/* Product info */}
        <div className='lg:col-span-1 maxt-w-2xl px-4 pb-16 sx:px-6 lg:max-w-7xl lg:px-8
        lg:pb-24'>
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
            </h1>
            <h1 className='text-lg lg-text-xl text-gray-900 opacity-60 pt-1'>UniversaloutFit</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
           <div className='flex space-x-5 items-center text-lg lg:text-xl text-gay-900 mt-6 '>
            <p className='font-semibold'>
                $199
            </p>
            <p className='opacity-50 line-through'>
                $211
            </p>

            <p className='text-green-600 font-semibold'>
                5% off
            </p>

           </div>
            {/* Reviews */}
            <div className="mt-6">
              {/* <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div> */}
              {/* this is for rating */}
               <div className='flex items-center space-x-3'>
                <Rating name="read-only" value={3.5} readOnly />
                <p className='opacity-50 text-sm'>56540 Ratings</p>
                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                    380 Reviews
                </p>
                
               </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              {/* <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <div className="flex items-center gap-x-3">
                    {product.colors.map((option, optionIdx) => (
                      <div key={optionIdx} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                          defaultValue={option.id}
                          defaultChecked={option.id === product.colors[0].id}
                          name="color-choice"
                          type="radio"
                          aria-label={option.name}
                          className={classNames(
                            option.classes,
                            'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div> */}

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

               <Button variant='contained' sx={{px:"2rem", py:"1rem", bgcolor:"#9155fd"}} >
                Add to bag
             </Button>
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
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
        </section>
        
        {/*section for rating and reviews */}
       <section className="w-full px-5">
        <h1 className='py-5 text-xl font-bold'>Rating and Review</h1>
       <div className="flex flex-col md:flex-row justify-between gap-8 border p-5">
        {/* LEFT: Reviews */}
        <div className="w-full md:w-7/12 space-y-6">
          {[1, 2, 3].map((_, i) => (
            <ProductReviewCard key={i} />
          ))}
        </div>

        {/* RIGHT: Product Ratings */}
        <div className="w-full md:w-5/12">
          <h2 className="text-xl font-semibold pb-2">Product Ratings</h2>

          <div className="flex items-center gap-3 mb-6">
            <Rating value={4.5} precision={0.5} readOnly />
            <p className="text-gray-500">54890 Ratings</p>
          </div>

          {/* Example Rating Row */}
          {[
            { label: 'Excellent', value: 70, color: 'success' },
            { label: 'Good', value: 50, color: 'primary' },
            { label: 'Average', value: 30, color: 'warning' },
            { label: 'Poor', value: 10, color: 'error' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 mb-4">
              <p className="w-24">{item.label}</p>
              <div className="flex-1">
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  color={item.color}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </div>
              <p className="w-12 text-right text-sm text-gray-500">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* similar products */}
          {/* <SimilarProductsSection/>  */}
          <section className='pt-10'>
            <h1 className='py-5 text-xl font-bold'>Similar Product</h1>
            <div className='flex flex-wrap space-y-5'>
              {mens_kurta.map((item)=> <HomeSectionCard item={item}/>)}
            </div>
          </section>
      </div>
    </div>
  )
}

