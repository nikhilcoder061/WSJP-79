import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context/MainContext';

export default function Products({ slug, rating, price }) {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [loading, setLoading] = useState(false);
    const { cart, setCart, toast } = useContext(Context);

    const getProducts = () => {

        let productApiUrl
        if (slug == undefined) {
            productApiUrl = `https://dummyjson.com/products?limit=${limit}`;
        } else {
            productApiUrl = `https://dummyjson.com/products/category/${slug}?limit=${limit}`
        }

        axios.get(productApiUrl).then(
            (succcess) => {

                const finalData = succcess.data.products.filter(
                    (productData, productIndex) => {
                        if (productData.rating >= rating && productData.price >= price.from && productData.price <= price.to) {
                            return true;
                        }
                    }
                )
                setProducts(finalData);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(
        () => {
            setLoading(true);
            getProducts();

            setTimeout(() => {
                setLoading(false);
            }, 1000);

        }, [slug, limit, rating, price]
    )

    return (
        <>
            <h2 className='m-3'>Total Products: {products.length} </h2>
            <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    products.map(
                        (productData, productIndex) => {
                            return loading == true ?
                                (
                                    <div className="max-w-sm w-full p-4 border border-gray-200 rounded-2xl shadow-md bg-white animate-pulse">
                                        <div className="h-40 bg-gray-300 rounded-lg"></div>
                                        <div className="mt-4 space-y-3">
                                            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                            <div className="h-4 bg-gray-300 rounded w-full"></div>
                                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                                            <div className="h-10 bg-gray-300 rounded w-1/4"></div>
                                        </div>
                                    </div>
                                )
                                : (
                                    <ProductCard productData={productData} key={productIndex} setCart={setCart} cart={cart} toast={toast} />
                                )
                        }
                    )
                }
            </main>
            <div className='text-center'>
                <button onClick={() => setLimit(limit + 10)} className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>Load More</button>
            </div>
        </>
    )
}

function ProductCard({ productData, cart, setCart, toast }) {

    const addToCart = () => {

        const { id, title, category, price, thumbnail } = productData;
        const productDetail = { id, title, category, price, thumbnail, qty: 1 };

        const matchCartData = cart.filter(  // 1 ,2
            (cartData, cartIndex) => {
                return cartData.id == productDetail.id
            }
        )

        if (matchCartData.length == 0) {
            const finalData = [...cart, productDetail];
            setCart(finalData)
            toast.success("Product Added in Cart");
        } else {
            toast.error("Product already in Cart");
        }
    }


    return (
        <div className="bg-white shadow-lg rounded-lg p-4 border">
            <Link to={`/productdetail/${productData.id}`}>
                <img src={productData.thumbnail} alt="Product" className="w-full h-52 object-cover rounded" />
                <h2 className="text-lg font-bold mt-2">{productData.title}</h2>

                <p className="text-gray-700 font-semibold">${productData.price} <span className='text-gray-500 text-sm font-normal' >({productData.rating}/5)</span></p>
                <p className="text-sm text-gray-500">Category: {productData.category}</p>
            </Link>
            <button onClick={addToCart} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Add to Cart</button>
        </div>
    )
}