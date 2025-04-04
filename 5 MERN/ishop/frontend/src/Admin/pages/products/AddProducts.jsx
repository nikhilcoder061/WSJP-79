import React, { useContext, useEffect, useRef, useState } from 'react'
import { MainContext } from '../../../Context/Context';
import Select from 'react-select'
import axios from 'axios';

export default function AddProducts() {

  const { fetchAllCategory, fetchAllColor, allColor, allCategory, API_BASE_URL, PRODUCT_URL, toastNotify } = useContext(MainContext);
  const [selectedColor, setSelectecdColor] = useState([]);

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


  const addProduct = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", productName.current.value);
    formData.append("slug", productSlug.current.value);
    formData.append("original_price", original_price.current.value);
    formData.append("discount_percentage", discount_percentage.current.value);
    formData.append("final_price", final_price.current.value);
    formData.append("short_description", event.target.short_description.value);
    formData.append("long_description", event.target.long_description.value);
    formData.append("main_image", event.target.main_image.files[0])
    formData.append("category_id", event.target.category_id.value);
    formData.append("color", JSON.stringify(selectedColor))

    axios.post(API_BASE_URL + PRODUCT_URL + "/create", formData).then(
      (success) => {
        toastNotify(success.data.msg, success.data.status);
        if (success.data.status == 1) {
          event.target.reset();
        }
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
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
      <form className="grid grid-cols-3 gap-6" onSubmit={addProduct}>
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
          <Select name='category_id' options={
            allCategory.map(
              (category, index) => {
                return (
                  { value: category._id, label: category.categoryName }
                )
              }
            )
          } />
        </div>
        <div>
          <label className="block font-medium">Color</label>
          <Select
            onChange={
              (options) => {
                const allColorId = options.map(
                  (data, index) => {
                    return data.value;
                  }
                )
                setSelectecdColor(allColorId)
              }
            }

            closeMenuOnSelect={false} isMulti options={
              allColor.map(
                (color, index) => {
                  return (
                    { value: color._id, label: color.colorName }
                  )
                }
              )
            } />
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
