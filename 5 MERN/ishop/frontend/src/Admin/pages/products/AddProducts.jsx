import React, { useContext, useEffect, useRef } from 'react'
import { MainContext } from '../../../Context/Context';

export default function AddProducts() {

  const { fetchAllCategory, fetchAllColor, allColor, allCategory } = useContext(MainContext);

  const productName = useRef();
  const productSlug = useRef();
  const original_price = useRef();
  const discount_percentage = useRef();
  const final_price = useRef();

  const createSlug = () => {
    productSlug.current.value = productName.current.value.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }

  const calculateFinalPrice = () => {
    final_price.current.value = original_price.current.value - (original_price.current.value * discount_percentage.current.value / 100)
  }

  useEffect(
    () => {
      fetchAllCategory();
      fetchAllColor();
    }, []
  )


  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg mt-2 border">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form className="grid grid-cols-3 gap-6">
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            ref={productName}
            onChange={createSlug}
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            required=""
          />
        </div>
        <div>
          <label className="block font-medium">Slug</label>
          <input
            ref={productSlug}
            type="text"
            name="slug"
            className="w-full p-2 border rounded bg-gray-200 focus:outline-none"
            readOnly
          />
        </div>
        <div>
          <label className="block font-medium">Original Price</label>
          <input
            onChange={calculateFinalPrice}
            ref={original_price}
            type="number"
            name="original_price"
            className="w-full p-2 border rounded"
            required=""
          />
        </div>
        <div>
          <label className="block font-medium">Discount Percentage</label>
          <input
            onChange={calculateFinalPrice}
            ref={discount_percentage}
            type="number"
            name="discount_percentage"
            className="w-full p-2 border rounded"
            required=""
          />
        </div>
        <div>
          <label className="block font-medium">Final Price</label>
          <input
            ref={final_price}
            type="number"
            name="final_price"
            className="w-full p-2 border rounded focus:outline-none bg-gray-200"
            required=""
            readOnly
          />
        </div>
        <div>
          <label className="block font-medium">Short Description</label>
          <input
            type="text"
            name="short_description"
            className="w-full p-2 border rounded"
            required=""
          />
        </div>
        <div className="col-span-3">
          <label className="block font-medium">Long Description</label>
          <textarea
            name="long_description"
            className="w-full p-2 border rounded"
            rows={4}
            required=""
            defaultValue={""}
          />
        </div>
        <div>
          <label className="block font-medium">Category</label>
          <select name="category" className="w-full p-2 border rounded">
            <option value="">Select Category</option>
            {
              allCategory.map(
                (category, index) => {
                  return (
                    <option key={index} value={category._id}>{category.categoryName}</option>
                  )
                }
              )
            }
          </select>
        </div>
        <div>
          <label className="block font-medium">Color</label>
          <select name="color" className="w-full p-2 border rounded">
            <option value="">Select Color</option>
            {
              allColor.map(
                (color, index) => {
                  return (
                    <option key={index} value={color._id}>{color.colorName}</option>
                  )
                }
              )
            }

          </select>
        </div>
        <div>
          <label className="block font-medium">Main Image</label>
          <input
            type="file"
            name="main_image"
            className="w-full p-2 border rounded"
            required=""
          />
        </div>
        <div className="col-span-3 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>

  )
}
