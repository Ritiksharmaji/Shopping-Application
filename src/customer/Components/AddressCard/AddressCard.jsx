import React from 'react';
import { LocationOn, Phone } from '@mui/icons-material';

function AddressCard() {
  return (
    <div className="border border-gray-200 p-5 rounded-md shadow-sm bg-white hover:shadow-md transition-all">
      <div className="space-y-2">
        {/* Name */}
        <p className="font-semibold text-lg text-gray-800">Ram Ram</p>

        {/* Address */}
        <div className="flex items-start gap-2 text-gray-600">
          <LocationOn fontSize="small" />
          <p>Mumbai, Gokul Dham Market, 4001</p>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <Phone fontSize="small" />
          <div>
            <p className="text-sm font-medium">Phone Number</p>
            <p className="text-sm">8125625828</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
