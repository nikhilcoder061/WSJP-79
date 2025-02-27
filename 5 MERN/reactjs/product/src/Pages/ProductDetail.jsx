import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/MainContext';

export default function ProductDetail() {
    const { productId } = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const { cart, setCart } = useContext(Context);

    const getProductDetail = () => {
        axios.get(`https://dummyjson.com/products/${productId}`).then(
            (success) => {
                setCurrentProduct(success.data);
                console.log(success.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(
        () => {
            getProductDetail();
        }, []
    )

    return (
        <>
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Images */}
                    <div>
                        <img
                            id="mainImage"
                            src={currentProduct.thumbnail}
                            alt="Product Image"
                            className="w-full h-96 object-cover rounded-lg"
                        />
                        <div className="flex gap-2 mt-4">
                            {
                                currentProduct?.images?.map(
                                    (imgData, imgIndex) => {
                                        return (
                                            <img
                                                key={imgIndex}
                                                src={imgData}
                                                className="w-20 h-20 object-cover cursor-pointer border rounded-lg"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    {/* Product Details */}
                    <div>
                        <h2 className="text-2xl font-bold">{currentProduct.title}</h2>
                        <p className="text-gray-600 text-lg mt-2">${currentProduct?.price}</p>
                        {/* Rating */}
                        <div className="flex items-center mt-2">
                            <p className="ml-2 text-gray-600">Rating: {currentProduct.rating}/5 (120 Reviews)</p>
                        </div>
                        <p className="mt-4 text-gray-700">
                            {currentProduct.description}
                        </p>
                        {/* Add to Cart Button */}
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
                {/* Reviews Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold">John Doe</p>
                        <p className="text-yellow-500">★★★★☆</p>
                        <p className="text-gray-700 mt-1">Great product! Loved the quality.</p>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold">Jane Smith</p>
                        <p className="text-yellow-500">★★★★★</p>
                        <p className="text-gray-700 mt-1">Highly recommend! Worth every penny.</p>
                    </div>
                </div>
            </div>

        </>

    )
}
