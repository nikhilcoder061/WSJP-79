import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Filter() {

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

    useEffect(
        () => {
            getCategory()
        }, []
    )

    return (
        <>
            {/* filter by category start  */}
            <div className='mx-2'>
                <h1 className='text-2xl my-3'>Filter by Category</h1>
                <div className='py-2 border px-4 my-2 rounded-lg cursor-pointer bg-blue-500 text-white'>
                    All Categories
                </div>
                <div>
                    {
                        category.map(
                            (categoryData, categoryIndex) => {
                                return (
                                    <Link to={`/shop/${categoryData.slug}`}>
                                        <div className='py-2 border px-4 my-2 rounded-lg cursor-pointer'>
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
