import React from 'react'

export default function ProductCard({ product, index }) {


    return (
        <div className="col-md-3">
            <div className="card">
                <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt="Product Image"
                />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="text-muted">Category: {product.category}</p>
                    <p className="fw-bold">Price: ${product.price}</p>
                    <p className="text-warning">⭐⭐⭐⭐☆ ({product.rating})</p>
                    <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
