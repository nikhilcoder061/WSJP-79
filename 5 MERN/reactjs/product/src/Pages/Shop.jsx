import React from 'react'
import Filter from '../Components/Filter'
import Products from '../Components/Products'
import { useParams } from 'react-router-dom'

export default function Shop() {

    const { slug } = useParams();


    return (
        <div className='grid grid-cols-6'>
            <div className='col-span-1'>
                <Filter slug={slug} />
            </div>
            <div className='col-span-5'>
                <Products slug={slug} />
            </div>
        </div>
    )
}
