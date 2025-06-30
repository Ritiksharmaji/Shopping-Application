import React, { useEffect } from 'react';
import { LocationOn, Phone } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Customers/Order/Action';
import { useLocation } from 'react-router-dom';

function AddressCard() {
  const dispatch = useDispatch();
  const { order } = useSelector(store => store.order);
  console.log(`order in AddressCard page`, order);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); 
  const orderId = searchParams.get("order_id");
  console.log(`orderId in AddressCard.jsx :`, orderId);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId]);

  const shippingAddress = order?.shippingAddress;

  return (
    <div className="border border-gray-200 p-5 rounded-md shadow-sm bg-white hover:shadow-md transition-all">
      {shippingAddress ? (
        <div className="space-y-2">
          <p className="font-semibold text-lg text-gray-800">
            {shippingAddress.firstName} {shippingAddress.lastName}
          </p>

          <div className="flex items-start gap-2 text-gray-600">
            <LocationOn fontSize="small" />
            <p>
              {shippingAddress.streetAddress}, {shippingAddress.city}, {shippingAddress.state} - {shippingAddress.zipCode}
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <Phone fontSize="small" />
            <div>
              <p className="text-sm font-medium">Phone Number</p>
              <p className="text-sm">{shippingAddress.mobile}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading address details...</p>
      )}
    </div>
  );
}

export default AddressCard;
