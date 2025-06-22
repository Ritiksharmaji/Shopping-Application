import React from 'react';
import {
  CheckCircleIcon,
  MapPinIcon,
  StarIcon,
  TruckIcon,
} from '@heroicons/react/24/solid';

// Stepper Component
const Stepper = ({ currentStep }) => {
  const steps = ['Order Placed', 'Shipped', 'Out for Delivery', 'Delivered'];
  return (
    <div className="w-full">
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center w-full">
            <div
              className={`rounded-full w-10 h-10 mx-auto flex items-center justify-center text-white ${
                index <= currentStep ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              {index < currentStep ? (
                <CheckCircleIcon className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            <p className="text-sm mt-2 text-gray-700">{step}</p>
          </div>
        ))}
      </div>
      <div className="h-1 w-full bg-gray-200 relative">
        <div
          className="absolute top-0 left-0 h-full bg-purple-600 transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

// Delivery Card
const DeliveryDetails = () => (
  <div className="bg-gradient-to-br from-purple-100 to-white p-6 rounded-xl shadow-lg">
    <div className="flex items-start gap-4">
      <div className="bg-purple-600 text-white p-3 rounded-full">
        <MapPinIcon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Delivered to: Ram Ram</h3>
        <p>Mumbai, Gokul Dham Market, 4001</p>
        <p className="text-sm mt-1 text-gray-600">Phone: 8125625828</p>
      </div>
    </div>
  </div>
);

// Delivered Card
const DeliveredProductCard = ({ title, price, size, date }) => (
  <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-xl transition-all">
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <img
          src="https://cdn.shopify.com/s/files/1/1997/7263/products/LV115198-196BLSKDO-N2000x3000_300-FRONT_1afad24c-8e70-4710-bdb0-34b06c9b0c75_530x@2x.jpg"
          alt={title}
          className="w-20 h-24 object-cover rounded-md"
        />
        <div className="space-y-1">
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">Size: {size}</p>
        </div>
      </div>
      <div className="text-right space-y-1">
        <p className="font-semibold">₹{price}</p>
        <p className="text-green-600 text-sm font-medium">Delivered on {date}</p>
        <p className="text-gray-400 text-xs">Your item has been delivered</p>
        <button className="mt-1 text-purple-600 text-sm hover:underline">Rate Now</button>
      </div>
    </div>
  </div>
);

// Ongoing Order Card
const OngoingOrderCard = ({ title, price, size, step }) => (
  <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-xl transition-all space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <img
          src="https://cdn.shopify.com/s/files/1/1997/7263/products/LV115198-196BLSKDO-N2000x3000_300-FRONT_1afad24c-8e70-4710-bdb0-34b06c9b0c75_530x@2x.jpg"
          alt={title}
          className="w-20 h-24 object-cover rounded-md"
        />
        <div className="space-y-1">
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-600">Size: {size}</p>
          <p className="text-purple-700 font-semibold text-sm">₹{price}</p>
        </div>
      </div>
      <div className="text-right text-sm text-gray-500">
        <TruckIcon className="w-6 h-6 text-purple-600 mx-auto mb-1" />
        <p>Ongoing</p>
      </div>
    </div>
    <Stepper currentStep={step} />
  </div>
);

// Main Page
export default function OrderDetailsPage() {
  return (
    <div className="p-6 lg:p-10 space-y-8">
      {/* Header Stepper for primary order */}
      <Stepper currentStep={3} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Delivery details */}
        <div className="lg:col-span-1">
          <DeliveryDetails />
        </div>

        {/* Order product cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ongoing order */}
          <OngoingOrderCard
            title="Premium Black Denim"
            price="1499"
            size="L"
            step={2} // Shipped
          />

          {/* Delivered Orders */}
          <DeliveredProductCard
            title="Men Sim Mid Rise Black Jeans"
            price="1099"
            size="M"
            date="Mar 03"
          />
          <DeliveredProductCard
            title="Classic White Cotton Shirt"
            price="899"
            size="L"
            date="Mar 03"
          />
        </div>
      </div>
    </div>
  );
}
