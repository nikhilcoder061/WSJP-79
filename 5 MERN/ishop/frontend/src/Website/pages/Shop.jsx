import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../Context/Context'
import { useSearchParams } from 'react-router-dom';

export default function Shop() {

  const { toastNotify, fetchAllCategory, fetchAllColor, fetchAllProduct, allColor, allCategory, allProduct,
    API_BASE_URL, CATEGORY_URL, COLOR_URL, PRODUCT_URL } = useContext(MainContext);

  const [limit, setLimit] = useState(5);
  const [serachParams, setSearchParams] = useSearchParams();

  useEffect(
    () => {
      fetchAllCategory();
      fetchAllColor();

      if (serachParams.get('limit')) {
        setLimit(serachParams.get('limit'));
      }

    }, []
  )

  useEffect(
    () => {
      setSearchParams({ "limit": limit });
      fetchAllProduct(null, limit);
    }, [limit]
  )

  return (
    <div className='grid grid-cols-6 max-w-7xl mx-auto'>
      <div className=' p-4'>
        <div>
          <h1 className='text-lg font-bold'>Category</h1>
          <div>
            <ul>
              {
                Array.isArray(allCategory) &&
                allCategory.map(
                  (category, index) => {
                    return (
                      <li key={index} className=' hover:bg-gray-200 rounded-md p-2 m-1 cursor-pointer'>{category.categoryName}</li>
                    )
                  }
                )
              }
            </ul>
          </div>
          <h1 className='text-lg font-bold'>Color</h1>
          <div>
            <ul>
              {
                Array.isArray(allColor) &&
                allColor.map(
                  (color, index) => {
                    return (
                      <li key={index} className=' hover:bg-gray-200 rounded-md p-2 m-1 cursor-pointer flex justify-between items-center'>
                        <span className='block'>{color.colorName}</span>
                        <span className='w-4 h-4 block rounded-full' style={{ background: color.colorCode }}></span>
                      </li>
                    )
                  }
                )
              }
            </ul>
          </div>
        </div>
      </div>
      <div className='col-span-5 p-4 '>
        <div>
          <select name="" id="" className='border px-4' onChange={(e) => setLimit(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <div className='flex flex-wrap justify-between gap-5'>
            {
              Array.isArray(allProduct)
              &&
              allProduct.map(
                (product, index) => {
                  return (
                    <ProductCard product={product} index={index} key={index} API_BASE_URL={API_BASE_URL} />
                  )
                }
              )
            }
          </div>

        </div>

      </div>
    </div>
  )
}

function ProductCard({ product, index, API_BASE_URL }) {
  return (
    <div className="w-[300px]  bg-white rounded-2xl shadow-lg overflow-hidden p-4">
      {/* Product Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={API_BASE_URL + `/images/product/` + product.main_image}
          alt="Product"
          className="object-contain h-full"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500 line-through">${product.original_price}</span>
          <span className="text-lg font-bold text-green-600">${product.final_price}</span>
          <span className="text-sm text-red-500 font-medium">({product.discount_percentage}% OFF)</span>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}