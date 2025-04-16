import React, { useContext, useRef } from 'react'
import axios from 'axios';
import { MainContext } from '../../../Context/Context';
import { useSelector } from 'react-redux';

export default function AddCategoy() {
  const { toastNotify, CATEGORY_URL, API_BASE_URL } = useContext(MainContext);
  const categoryName = useRef();
  const categorySlug = useRef();
  const token = useSelector((state) => state.admin.token);


  const createSlug = () => {
    categorySlug.current.value = categoryName.current.value.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }


  const addCategory = (event) => {
    event.preventDefault();


    const formData = new FormData();
    formData.append("categoryName", categoryName.current.value);
    formData.append("categorySlug", categorySlug.current.value);
    formData.append("categoryImageName", event.target.categoryImageName.files[0])

    axios.post(API_BASE_URL + CATEGORY_URL + "/create", formData,
      {
        headers: {
          Authorization: token
        }
      }
    ).then(
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

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add Category</h2>
      <form onSubmit={addCategory}>
        {/* Category Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Name</label>
          <input
            onChange={createSlug}
            ref={categoryName}
            name="categoryName"
            type="text"
            placeholder="Enter category name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Slug */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Slug</label>
          <input
            readOnly
            ref={categorySlug}
            name="categorySlug"
            type="text"
            placeholder="Enter slug"
            className="w-full p-3 border bg-gray-200 border-gray-300 rounded focus:outline-none "
          />
        </div>
        {/* Image */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Image</label>
          <input
            name="categoryImageName"
            type="file"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Add Category
        </button>
      </form>
    </div>

  )
}
