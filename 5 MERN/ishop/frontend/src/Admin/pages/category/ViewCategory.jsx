import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../Context/Context'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';

export default function ViewCategory() {

  const { fetchAllCategory, allCategory, API_BASE_URL, CATEGORY_URL, toastNotify } = useContext(MainContext);

  const deleteCategory = (id) => {

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
        axios.delete(API_BASE_URL + CATEGORY_URL + "/delete/" + id).then(
          (success) => {
            toastNotify(success.data.msg, success.data.status);
            if (success.data.status == 1) {
              fetchAllCategory();
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


  const statusChange = (id) => {
    axios.patch(API_BASE_URL + CATEGORY_URL + `/status/${id}`).then(
      (success) => {
        toastNotify(success.data.msg, success.data.status);
        if (success.data.status == 1) {
          fetchAllCategory();
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
    }, []
  )

  return (


    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Category List</h2>
        {/* Add Category Button */}
        <Link
          to={'/admin/category/add'}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Category
        </Link>
      </div>
      <table className="w-full text-center border border-gray-300">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3 border">#</th>
            <th className="p-3 border">Category Name</th>
            <th className="p-3 border">Slug</th>
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(allCategory)
            &&
            allCategory.map(
              (categoryData, categoryIndex) => {
                return (
                  <tr className="hover:bg-gray-100 " key={categoryIndex}>
                    <td className="p-1 border">{categoryIndex + 1}</td>
                    <td className="p-1 border">{categoryData.categoryName}</td>
                    <td className="p-1 border">{categoryData.categorySlug}</td>
                    <td className="p-1 border">
                      <img
                        src={API_BASE_URL + `/images/category/${categoryData.categoryImageName}`}
                        alt="category"
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="p-1 border">
                      {
                        categoryData.categoryStatus == true
                          ?
                          <button onClick={() => statusChange(categoryData._id)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                            Active
                          </button>
                          :
                          <button onClick={() => statusChange(categoryData._id)} className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700">
                            In Active
                          </button>
                      }

                    </td>
                    <td className="p-1 border space-x-2">
                      <Link to={`/admin/category/edit/${categoryData._id}`}>
                        <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                          Edit
                        </button>
                      </Link>
                      <button onClick={() => deleteCategory(categoryData._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              }
            )
          }

          {/* More rows can be added here */}
        </tbody>
      </table>
    </div>

  )
}
