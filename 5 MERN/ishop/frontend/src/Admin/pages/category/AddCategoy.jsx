import React, { useRef } from 'react'
import axios from 'axios';

export default function AddCategoy() {

  const categoryName = useRef();
  const categorySlug = useRef();

  const addCategory = (event) => {
    event.preventDefault();
    const categoryData = {
      categoryName: categoryName.current.value,
      categorySlug: categorySlug.current.value
    }

    axios.post("http://localhost:5000/category/create", categoryData).then(
      (success) => {
        if (success.data.status == 1) {
          event.target.reset();
        }
        console.log(success);
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
            ref={categorySlug}
            name="categorySlug"
            type="text"
            placeholder="Enter slug"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
