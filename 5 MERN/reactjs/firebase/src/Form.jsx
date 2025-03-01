import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from './FirebaseConfig';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {

    const addUserData = (event) => {
        event.preventDefault();
        const userData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            gender: event.target.gender.value
        }

        const db = getDatabase();
        const userId = uuidv4();
        set(ref(db, 'users/' + userId), userData);
        event.target.reset();

    }


    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                User Information Form
            </h2>
            <form action="#" method="POST" onSubmit={addUserData}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required=""
                    />
                </div>
                {/* Email */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required=""
                    />
                </div>
                {/* Phone */}
                <div className="mb-4">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required=""
                    />
                </div>
                {/* Gender */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <div className="flex items-center space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                defaultValue="male"
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                defaultValue="female"
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                id="gender-other"
                                name="gender"
                                defaultValue="other"
                                className="form-radio text-indigo-600"
                            />
                            <span className="ml-2">Other</span>
                        </label>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    )
}
