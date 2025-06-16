import React from "react";

function HomeSectionCard({ item }) {
  const { image, brand, title, selling_price, price, disscount } = item;

  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden
    w-[15rem] mx-3 
    border border-black"
    >
      <div className="h-[12rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={image}
          alt="Product"
        />
      </div>

      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{brand}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">{selling_price}</p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
