import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../Context/Context';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function ViewColor() {

  const { toastNotify, API_BASE_URL, COLOR_URL, fetchAllColor, allColor } = useContext(MainContext);

  const deleteColor = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(API_BASE_URL + COLOR_URL + "/delete/" + id).then(
          (success) => {
            toastNotify(success.data.msg, success.data.status);
            if (success.data.status == 1) {
              fetchAllColor();
            }
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
      }
    });
  }

  useEffect(
    () => {
      fetchAllColor()
    }, []
  )

  return (
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">Color List</h2>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"'>
          <Link to={'/admin/color/add'}>Add Color</Link>
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Color Name</th>
            <th className="border p-2">Color Slug</th>
            <th className="border p-2">Color Code</th>
            <th className="border p-2">Color View</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            allColor.map(
              (colorData, colorIndex) => {
                return (
                  <tr className="text-center" key={colorIndex}>
                    <td className="border p-2">{colorData.colorName}</td>
                    <td className="border p-2">{colorData.colorSlug}</td>
                    <td className="border p-2">{colorData.colorCode}</td>
                    <td className="border p-2">
                      <span
                        className="inline-block w-6 h-6 rounded-full"
                        style={{ backgroundColor: colorData.colorCode }}
                      />
                    </td>
                    <td className="border p-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded-md">
                        Active
                      </button>
                    </td>
                    <td className="border p-2">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2">
                        Edit
                      </button>
                      <button onClick={() => deleteColor(colorData._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              }
            )
          }

        </tbody>
      </table>
    </div>
  )
}
