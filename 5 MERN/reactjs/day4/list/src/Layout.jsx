import React from 'react'
import ProductData from './ProductData'
import ProductCard from './ProductCard';

export default function Layout() {


    return (
        <div className="container mt-5">
            <div className="row">

                {
                    ProductData.map(
                        (product, index) => {
                            return (
                                <ProductCard product={product} key={index} index={index} />
                            )
                        }
                    )
                }


            </div>
        </div>

    )
}

