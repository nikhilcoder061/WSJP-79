import React, { useEffect, useContext } from 'react';
import { FaEdit, FaTrashAlt, FaEye, FaImages, FaStar, FaCheckCircle } from 'react-icons/fa';
import { MainContext } from '../../../Context/Context';
import { ImCross } from "react-icons/im";
import axios from 'axios';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import ReactDOMServer from 'react-dom/server';

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

    // pop up view product start

    const viewProduct = (productData) => {

        const productDetails = ReactDOMServer.renderToString(<ProductPopUp productData={productData} API_BASE_URL={API_BASE_URL} />);

        Swal.fire({
            title: "<strong>Product Details</strong>",
            html: productDetails,
            showCloseButton: true,
        });
    }

    // pop up view product end


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
                        Array.isArray(allProduct)
                        &&
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
                                            <Link to={`/admin/product/edit/${productData._id}`}>
                                                <button className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                            <button onClick={() => viewProduct(productData)} className="p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600">
                                                <FaEye />
                                            </button>
                                            <Link to={`/admin/product/multipleimages/${productData._id}`}>
                                                <button className="p-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600">
                                                    <FaImages />
                                                </button>
                                            </Link>
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

function ProductPopUp({ productData, API_BASE_URL }) {

    return (
        <table className="table-auto w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th className="text-left px-4 py-2 border border-gray-300">Heading</th>
                    <th className="text-left px-4 py-2 border border-gray-300">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-4 py-2 border">Id</td>
                    <td className="px-4 py-2 border">{productData._id}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Name</td>
                    <td className="px-4 py-2 border">{productData.name}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Slug</td>
                    <td className="px-4 py-2 border">{productData.slug}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Short Description</td>
                    <td className="px-4 py-2 border">{productData.short_description}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Long Description</td>
                    <td className="px-4 py-2 border">
                        {productData.long_description}
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Original Price</td>
                    <td className="px-4 py-2 border">${productData.original_price}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Discount</td>
                    <td className="px-4 py-2 border">{productData.discount_percentage}%</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Final Price</td>
                    <td className="px-4 py-2 border">${productData.final_price}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Category Name</td>
                    <td className="px-4 py-2 border">Electronics</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Colors</td>
                    <td className="px-4 py-2 border">Red, Blue, Black</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Main Image</td>
                    <td className="px-4 py-2 border">
                        <img
                            src={API_BASE_URL + `/images/product/${productData.main_image}`}
                            alt="Main Image"
                            className="w-20 h-20 object-cover"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Other Images</td>
                    <td className="px-4 py-2 border">
                        <div className="flex gap-2">
                            {
                                productData.other_image.map(
                                    (image, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src={API_BASE_URL + `/images/product/${image}`}
                                                alt="Other Image 1"
                                                className="w-16 h-16 object-cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Stock</td>
                    <td className="px-4 py-2 border">50</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Status</td>
                    <td className="px-4 py-2 border">Active</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Top Selling</td>
                    <td className="px-4 py-2 border">Yes</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Created At</td>
                    <td className="px-4 py-2 border">2025-04-09</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border">Updated At</td>
                    <td className="px-4 py-2 border">2025-04-09</td>
                </tr>
            </tbody>
        </table>

    )
}