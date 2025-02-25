import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter({ slug, rating, setRating, price, setPrice }) {

    const [category, setCategory] = useState([]);

    const getCategory = () => {
        axios.get('https://dummyjson.com/products/categories').then(
            (succcess) => {
                setCategory(succcess.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    const fromPrice = (event) => {
        setPrice({ ...price, from: event.target.value });
    }

    const toPrice = (event) => {
        setPrice({ ...price, to: event.target.value });
    }

    useEffect(
        () => {
            getCategory()
        }, []
    )

    return (
        <>
            {/* filter by Rating start  */}
            <div className='mx-2'>
                <h1 className='text-2xl my-3'>Filter by Rating</h1>
                <div onClick={() => setRating(4)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 4 ? 'bg-blue-500 text-white' : ''}  `}>
                    4⭐  & Above
                </div>
                <div onClick={() => setRating(3)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 3 ? 'bg-blue-500 text-white' : ''} `}>
                    3⭐  & Above
                </div>
                <div onClick={() => setRating(2)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 2 ? 'bg-blue-500 text-white' : ''} `}>
                    2⭐  & Above
                </div>
                <div onClick={() => setRating(1)} className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${rating == 1 ? 'bg-blue-500 text-white' : ''} `}>
                    1⭐  & Above
                </div>
            </div>
            {/* filter by Rating end  */}
            <div className='mx-2'>
                <h1 className='text-2xl my-3'>Filter by Price</h1>
                <div className='flex justify-between items-center w-60'>
                    <input onChange={fromPrice} type="number" placeholder='from' className='border rounded-lg w-20 p-2' value={price.from} />
                    to
                    <input onChange={toPrice} type="number" placeholder='to' className='border rounded-lg w-20 p-2' value={price.to} />
                </div>
            </div>

            {/* filter by category start  */}
            <div className='mx-2'>
                <h1 className='text-2xl my-3'>Filter by Category</h1>
                <Link to={'/shop'}>
                    <div className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${slug == undefined ? 'bg-blue-500 text-white' : ''} `}>
                        All Categories
                    </div>
                </Link>
                <div>
                    {
                        category.map(
                            (categoryData, categoryIndex) => {
                                return (
                                    <Link to={`/shop/${categoryData.slug}`} key={categoryIndex}>
                                        <div className={`py-2 border px-4 my-2 rounded-lg cursor-pointer ${categoryData.slug == slug ? 'bg-blue-500 text-white' : ''}  `}>
                                            {categoryData.name}
                                        </div>
                                    </Link>
                                )
                            }
                        )
                    }

                </div>
            </div>
            {/* filter by category end  */}
        </>
    )
}
