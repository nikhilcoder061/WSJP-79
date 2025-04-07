import React, { useEffect, useContext } from 'react';
import { FaEdit, FaTrashAlt, FaEye, FaImages, FaStar, FaCheckCircle } from 'react-icons/fa';
import { MainContext } from '../../../Context/Context';
import { ImCross } from "react-icons/im";
import axios from 'axios';
import { FaRegStar } from "react-icons/fa";

export default function ViewProducts() {

    const { API_BASE_URL, toastNotify, allProduct, fetchAllProduct, PRODUCT_URL } = useContext(MainContext);

    const updateProduct = (id, flag) => {
        axios.patch(API_BASE_URL + PRODUCT_URL + `/update/${id}`, { flag }).then(
            (success) => {
                toastNotify(success.data.msg, success.data.status);
                if (success.data.status == 1) {
                    fetchAllProduct();
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }


    useEffect(
        () => {
            fetchAllProduct();
        }, []
    )

    return (
        <div className="overflow-x-auto bg-gray-100 p-6">
            <table className="min-w-full bg-white shadow-lg rounded-lg table-auto">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Price</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Category</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Color</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Image</th>
                        <th className="px-4 py-2 text-left text-sm font-medium">Stock</th>
                        <th className="px-4 py-2 text-center text-sm font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProduct.map(
                            (productData, productIndex) => {
                                return (
                                    <tr key={productIndex} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-1 text-sm text-gray-700">{productData.name}</td>
                                        <td className="px-4 py-1 text-sm text-gray-700">
                                            {productData.final_price} <span className="text-gray-500 line-through">${productData.original_price}</span>{' '}
                                            <span className="text-green-600">({productData.discount_percentage}% off)</span>
                                        </td>
                                        <td className="px-4 py-1 text-sm text-gray-700">{productData.category_id.categoryName}</td>
                                        <td className="px-4 py-1 text-sm text-gray-700">
                                            {
                                                productData.color.map(
                                                    (colorData, colorIndex) => {
                                                        return (
                                                            <span key={colorIndex}>{colorData.colorName}, </span>
                                                        )
                                                    }
                                                )
                                            }
                                        </td>
                                        <td className="px-4 py-1">
                                            <img
                                                src={API_BASE_URL + `/images/product/${productData.main_image}`}
                                                alt="Product 2"
                                                className="w-12 h-12 object-cover rounded-full"
                                            />
                                        </td>
                                        <td className="px-4 py-1 text-sm text-gray-700">
                                            {
                                                productData.stock == true ?
                                                    <button onClick={() => updateProduct(productData._id, 1)} className="px-4 py-2 text-sm font-semibold rounded-lg bg-green-500 text-white hover:bg-green-600">
                                                        In
                                                    </button>
                                                    :
                                                    <button onClick={() => updateProduct(productData._id, 1)} className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-500 text-white hover:bg-green-600">
                                                        Out
                                                    </button>
                                            }
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600 flex justify-center space-x-2">
                                            {
                                                productData.status == true ?
                                                    <button onClick={() => updateProduct(productData._id, 2)} className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
                                                        <FaCheckCircle />
                                                    </button>
                                                    :
                                                    <button onClick={() => updateProduct(productData._id, 2)} className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
                                                        <ImCross />
                                                    </button>
                                            }

                                            <button onClick={() => updateProduct(productData._id, 3)} className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
                                                {
                                                    productData.top_selling == true
                                                        ?
                                                        <FaStar />
                                                        :
                                                        <FaRegStar />
                                                }
                                            </button>
                                            <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                                                <FaEdit />
                                            </button>
                                            <button className="p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600">
                                                <FaEye />
                                            </button>
                                            <button className="p-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600">
                                                <FaImages />
                                            </button>
                                            <button className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
