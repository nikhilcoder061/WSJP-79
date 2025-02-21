import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products({ slug }) {

    const [products, setProducts] = useState([]);

    console.log(slug);

    const getProducts = () => {

        let productApiUrl
        if (slug == undefined) {
            productApiUrl = 'https://dummyjson.com/products';
        } else {
            productApiUrl = `https://dummyjson.com/products/category/${slug}`
        }

        axios.get(productApiUrl).then(
            (succcess) => {
                setProducts(succcess.data.products);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(
        () => {
            getProducts();
        }, [slug]
    )

    return (
        <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products.map(
                    (productData, productIndex) => {
                        return (
                            <ProductCard productData={productData} key={productIndex} />
                        )
                    }
                )
            }
        </main>
    )
}

function ProductCard({ productData }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 border">
            <img src={productData.thumbnail} alt="Product" className="w-full h-52 object-cover rounded" />
            <h2 className="text-lg font-bold mt-2">{productData.title}</h2>

            <p className="text-gray-700 font-semibold">${productData.price} <span className='text-gray-500 text-sm font-normal' >({productData.rating}/5)</span></p>
            <p className="text-sm text-gray-500">Category: {productData.category}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Add to Cart</button>
        </div>
    )
}