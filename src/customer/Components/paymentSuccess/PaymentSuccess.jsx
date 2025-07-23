import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from "../../../State/Customers/Payment/Action";
import { Alert, AlertTitle, Typography, Card, CardContent, Grid } from "@mui/material";
import { getOrderById } from "../../../State/Customers/Order/Action";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const { orderId } = useParams();
  const jwt = localStorage.getItem("jwt");

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId && paymentStatus === "paid") {
      const data = { orderId, paymentId, jwt };
      dispatch(updatePayment(data));
      dispatch(getOrderById(orderId));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <Alert variant="filled" severity="success" sx={{ width: "100%", maxWidth: "500px" }}>
          <AlertTitle>Payment Successful</AlertTitle>
          Congratulations! Your order has been placed successfully.
        </Alert>

        <Typography variant="h5" className="font-bold text-purple-700">
          Order Summary
        </Typography>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {order?.order?.orderItems?.map((item) => (
          <Card key={item._id} className="shadow-lg hover:shadow-xl transition duration-300">
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                
                {/* Product Image */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <img
                    className="w-28 h-28 object-cover rounded-md"
                    src={item?.product?.imageUrl}
                    alt={item?.product?.title}
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between flex-grow space-y-2">
                  <Typography variant="h6" className="font-semibold">
                    {item?.product?.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Color: Pink | Size: {item?.size}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    Seller: {item?.product?.brand}
                  </Typography>
                  <Typography variant="h6" className="text-primary font-bold mt-2">
                    ₹{item?.price}
                  </Typography>
                </div>

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PaymentSuccess;
