import React from 'react';
import { Rating } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta'
// const similarProducts = [
//   {
//     id: 1,
//     name: 'Wireless Headphones',
//     image: 'https://via.placeholder.com/150',
//     rating: 4.5,
//     price: '₹2,499',
//   },
//   {
//     id: 2,
//     name: 'Bluetooth Speaker',
//     image: 'https://via.placeholder.com/150',
//     rating: 4,
//     price: '₹1,999',
//   },
//   {
//     id: 3,
//     name: 'Smart Watch',
//     image: 'https://via.placeholder.com/150',
//     rating: 4.2,
//     price: '₹3,499',
//   },
//   {
//     id: 4,
//     name: 'Gaming Mouse',
//     image: 'https://via.placeholder.com/150',
//     rating: 4.8,
//     price: '₹799',
//   },
// ];
const similarProducts = mens_kurta;

export default function SimilarProductsSection() {
  return (
    <section className="w-full px-5 py-10">
      <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <Rating value={product.rating} precision={0.5} readOnly size="small" />
              <span className="text-sm text-gray-500">{product.rating}</span>
            </div>
            <p className="text-purple-600 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
