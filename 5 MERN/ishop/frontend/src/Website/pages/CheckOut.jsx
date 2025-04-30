import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { MainContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const user = useSelector((state) => state.user.data);
  const cart = useSelector((state) => state.cart);
  const { API_BASE_URL } = useContext(MainContext);
  const navigate = useNavigate();

  console.log(user);

  const paymentModes = [
    "Cash on Delivery (COD)",
    "Online Payment"
  ];


  const orderPlace = () => {
    axios.post(API_BASE_URL + "/order/order-place",
      {
        user_id: user._id,
        order_total: cart.totalFinalPrice,
        payment_mode: selectedPayment,
        shipping_details: user?.shipping_address[selectedAddress]
      }
    ).then(
      (success) => {
        if (success.data.status == 1) {
          navigate(`/thankyou/${success.data.order_id}`);
        }
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg flex flex-col lg:flex-row p-6 gap-8">

        {/* Left Side */}
        <div className="flex-1 space-y-8">

          {/* Select Address */}
          <div>
            <h2 className="text-xl font-bold mb-4">Select Address</h2>
            <div className="grid gap-4">
              {user?.shipping_address?.map((address, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedAddress(index)}
                  className={`cursor-pointer p-4 border rounded-lg ${selectedAddress === index ? "border-blue-500 bg-blue-50" : "border-gray-300"
                    }`}
                >
                  <p>{address.addressLine1}</p>
                  {address.addressLine2 && <p>{address.addressLine2}</p>}
                  <p>{address.city}, {address.state} {address.postalCode}</p>
                  <p>{address.country}</p>
                </div>
              ))}
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add New Address
              </button>
            </div>
          </div>

          {/* Select Payment Mode */}
          <div>
            <h2 className="text-xl font-bold mb-4">Select Payment Mode</h2>
            <div className="grid gap-4">
              {paymentModes.map((mode, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPayment(index)}
                  className={`cursor-pointer p-4 border rounded-lg ${selectedPayment === index ? "border-green-500 bg-green-50" : "border-gray-300"
                    }`}
                >
                  {mode}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner space-y-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Total Amount</span>
              <span>${cart.totalOriginalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className='text-green-500 font-bold'>-${cart.totalOriginalPrice - cart.totalFinalPrice}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Final Amount</span>
              <span>${cart.totalFinalPrice}</span>
            </div>
          </div>

          <button onClick={orderPlace} className="w-full mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Place Order
          </button>
        </div>

      </div>
    </div>

  )
}
