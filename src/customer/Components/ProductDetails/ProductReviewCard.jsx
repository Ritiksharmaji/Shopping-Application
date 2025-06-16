import { Avatar, Box, Rating } from '@mui/material';
import React from 'react';
import './prograa.css';

function ProductReviewCard() {
  return (
    <div className="left-side">
      <div className="flex gap-4 items-start">
        {/* Avatar */}
        <Box>
          <Avatar
            className="text-white"
            sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
          >
            R
          </Avatar>
        </Box>

        {/* User Details and Review */}
        <div className="flex flex-col space-y-2">
          <div>
            <p className="font-semibold text-lg">Ram</p>
            <p className="text-gray-500 text-sm">April 5, 2023</p>
          </div>
          <Rating value={4.5} name="half-rating" precision={0.5} readOnly />
          <p>nice product this is super se bhi upper</p>
        </div>
      </div>
    </div>
  );
}

export default ProductReviewCard;
