import React from 'react'

export default function AddCategoy() {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add Category</h2>
      <form>
        {/* Category Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Name</label>
          <input
            type="text"
            placeholder="Enter category name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Slug */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Slug</label>
          <input
            type="text"
            placeholder="Enter slug"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Image */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Image</label>
          <input
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
