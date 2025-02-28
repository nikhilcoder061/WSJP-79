import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/MainContext'
import { Link } from 'react-router-dom';

export default function Cart() {

    const { cart, setCart, toast } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((cartData, cartIndex) => {
            total = total + (cartData.price * cartData.qty)
        });
        setTotalPrice(total);
    }

    useEffect(
        () => {
            getTotalPrice()
        }, [cart]
    )

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Side: Cart Items */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                <div className="space-y-4">
                    {
                        cart.length == 0 ?
                            <h1 className='text-xl text-center'> Not item found</h1>
                            :
                            cart.map(
                                (cartData, cartIndex) => {
                                    return (
                                        <CartRow toast={toast} key={cartIndex} cartData={cartData} cartIndex={cartIndex} cart={cart} setCart={setCart} />
                                    )
                                }
                            )
                    }
                </div>
            </div>
            {/* Right Side: Summary */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Tax</span>
                    <span>${(totalPrice * 10 / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>${(totalPrice + (totalPrice * 10 / 100)).toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600">
                    Checkout
                </button>
            </div>
        </div>

    )
}


function CartRow({ cartData, cartIndex, cart, setCart, toast }) {


    const qtyChange = (event, index) => {
        const newQty = event.target.value;
        if (newQty > 0) {
            const oldCart = [...cart]
            oldCart[index].qty = newQty;
            setCart(oldCart);
        }
    }


    const deleteCartItem = (indexNum) => {

        const oldData = [...cart];
        oldData.splice(indexNum, 1);
        setCart(oldData);
        toast.success("Cart item Removed");
    }


    return (
        <div className="flex items-center justify-between border my-1 p-2 rounded-lg">
            <img
                src={cartData.thumbnail}
                alt="Product"
                className="w-20 h-20 rounded"
            />
            <div className="flex-1 ml-4">
                <Link to={`/productdetail/${cartData.id}`}>
                    <h3 className="font-semibold">{cartData.title}</h3>
                </Link>
                <p className="text-sm text-gray-600">Category: {cartData.category}</p>
                <p className="text-sm text-gray-600">Price: {cartData.price}</p>
                <div className="mt-2 flex items-center">
                    <label htmlFor="qty" className="mr-2 text-sm">
                        Qty:
                    </label>
                    <input
                        type="number"
                        id="qty"
                        value={cartData.qty}
                        className="w-12 px-2 py-1 border rounded text-center"
                        onChange={(event) => qtyChange(event, cartIndex)}
                    />
                </div>
            </div>
            <button onClick={() => deleteCartItem(cartIndex)} className="text-red-500 hover:text-red-700">Remove</button>
        </div>
    )
}