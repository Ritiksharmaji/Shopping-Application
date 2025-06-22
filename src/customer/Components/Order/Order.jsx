import React from 'react';
import OrderCard from './OrderCard';

function Order() {
  const orderStatus = [
    { Label: 'On The Way', value: 'on_the_way' },
    { Label: 'Delivered', value: 'delivered' },
    { Label: 'Cancelled', value: 'cancelled' },
    { Label: 'Return', value: 'returned' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-6 bg-gray-50 min-h-screen">
      {/* Sidebar Filter */}
      <div className="w-full lg:w-[20%]">
        <div className="h-auto shadow-lg bg-white p-5 rounded-md sticky top-5">
          <h1 className="font-bold text-lg">Filter</h1>

          <div className="space-y-4 mt-10">
            <h2 className="font-semibold text-sm text-gray-800">ORDER STATUS</h2>
            {orderStatus.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={option.value}
                  type="checkbox"
                  value={option.value}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={option.value} className="ml-3 text-sm text-gray-600">
                  {option.Label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:flex-1 space-y-4">
        {/* Example: Show multiple orders */}
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default Order;
