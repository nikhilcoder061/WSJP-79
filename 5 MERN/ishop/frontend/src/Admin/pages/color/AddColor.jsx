import React, { useContext, useRef } from 'react'
import { MainContext } from '../../../Context/Context';
import axios from 'axios';

export default function AddColor() {

  const { toastNotify, API_BASE_URL, COLOR_URL } = useContext(MainContext);

  const colorName = useRef();
  const colorSlug = useRef();
  const colorCode = useRef();

  const createSlug = () => {
    colorSlug.current.value = colorName.current.value.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  }

  const addColor = (event) => {
    event.preventDefault();

    const data = {
      colorName: colorName.current.value,
      colorCode: colorCode.current.value,
      colorSlug: colorSlug.current.value
    }

    axios.post(API_BASE_URL + COLOR_URL + "/create", data).then(
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
    <div className='flex justify-center items-center my-5'>
      <div className="bg-white p-6 rounded-lg shadow-md w-96 border">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Color</h2>
        <form onSubmit={addColor}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Color Name</label>
            <input
              onChange={createSlug}
              ref={colorName}
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter color name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Color Slug</label>
            <input
              ref={colorSlug}
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter color slug"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Pick a Color
            </label>
            <input
              ref={colorCode}
              type="color"
              className="w-full h-10 p-1 border rounded-md cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add Color
          </button>
        </form>
      </div>
    </div>


  )
}
