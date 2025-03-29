import React, { useContext, useEffect, useRef } from 'react'
import axios from 'axios';
import { MainContext } from '../../../Context/Context';
import { useParams } from 'react-router-dom';

export default function EditCategoy() {
    const { toastNotify, CATEGORY_URL, API_BASE_URL, fetchAllCategory, allCategory } = useContext(MainContext);
    const categoryName = useRef();
    const categorySlug = useRef();
    const { category_id } = useParams();


    useEffect(
        () => {
            fetchAllCategory(category_id);
        }, []
    )

    const createSlug = () => {
        categorySlug.current.value = categoryName.current.value.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    }


    const editCategory = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("categoryName", categoryName.current.value);
        formData.append("categorySlug", categorySlug.current.value);
        formData.append("categoryImageName", event.target.categoryImageName.files[0] ?? null)

        axios.put(API_BASE_URL + CATEGORY_URL + "/edit/" + category_id, formData).then(
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
            <h2 className="text-2xl font-semibold mb-6">Edit Category</h2>
            <form onSubmit={editCategory}>
                {/* Category Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category Name</label>
                    <input
                        defaultValue={allCategory.categoryName}
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
                        defaultValue={allCategory.categorySlug}
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
                <div>
                    <img
                        src={API_BASE_URL + `/images/category/${allCategory.categoryImageName}`}
                        alt="category"
                        className="w-32  object-cover rounded"
                    />
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                >
                    Update Category
                </button>
            </form>
        </div>

    )
}
