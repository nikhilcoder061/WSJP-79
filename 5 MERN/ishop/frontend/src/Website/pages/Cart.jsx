import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom'
import { lsGetdata } from '../../redux/reducers/CartSlice';

export default function Cart() {

  const { API_BASE_URL, fetchAllProduct, allProduct } = useContext(MainContext);
  const cartData = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  console.log(cartData);

  const verifyLogin = () => {
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/userlogin?ref=cart');
    }
  }


  useEffect(
    () => {
      fetchAllProduct();
      dispatch(lsGetdata());
    }, []
  )


  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 ">
      {/* Left: Cart Items */}
      <div className="w-full md:w-2/3 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {/* Cart Item */}
        {
          cartData.data.map(
            (cartItem, cartIndex) => {
              const availableCartData = allProduct.find((product) => product._id == cartItem.product_id);

              return (
                <div key={cartIndex} className="flex items-center bg-white p-4 rounded-lg shadow-md border">
                  <img
                    src={API_BASE_URL + `/images/product/${availableCartData?.main_image}`}
                    alt="Product"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold">{availableCartData?.name}</h3>
                    <p className="text-sm text-gray-600">Category: {availableCartData?.category_id?.categoryName}</p>
                    <p className="text-md font-bold mt-1">${availableCartData?.final_price}</p>
                    <div className="flex items-center mt-2">
                      <label htmlFor="quantity" className="mr-2 text-sm">
                        Qty:
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        min={1}
                        defaultValue={cartItem?.qty}
                        className="w-16 px-2 py-1 border rounded"
                      />
                    </div>
                  </div>
                  <button className="ml-4 text-red-500 hover:text-red-700 font-semibold">
                    Remove
                  </button>
                </div>
              )
            }
          )
        }

        {/* Repeat Cart Items as needed */}
      </div>
      {/* Right: Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal Before Discount</span>
            <span>${cartData.totalOriginalPrice}</span>
          </div>
          <div className="flex justify-between text-green-500 font-bold">
            <span> Discount</span>
            <span>${cartData.totalOriginalPrice - cartData.totalFinalPrice}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${cartData.totalFinalPrice}</span>
          </div>
        </div>
        <button onClick={verifyLogin} className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>

  )
}
