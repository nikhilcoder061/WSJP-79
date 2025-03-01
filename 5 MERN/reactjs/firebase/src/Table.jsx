import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

export default function Table() {

    const [userData, setUserData] = useState([]);

    const getUserData = () => {
        const db = getDatabase();
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            const result = Object.entries(data).map(([key, value]) => ({
                key,
                ...value
            }));
            setUserData(result);

        });

    }

    useEffect(
        () => {
            getUserData();
        }, []
    )

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                Stored Data
            </h2>
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">S.No</th>
                        <th className="px-4 py-2 border-b">Name</th>
                        <th className="px-4 py-2 border-b">Email</th>
                        <th className="px-4 py-2 border-b">Phone</th>
                        <th className="px-4 py-2 border-b">Gender</th>
                        <th className="px-4 py-2 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody id="tableBody">

                    {
                        userData.map(
                            (data, index) => {
                                return (
                                    <tr className="text-center">
                                        <td className="px-4 py-2 border-b">{index + 1}</td>
                                        <td className="px-4 py-2 border-b">{data.name}</td>
                                        <td className="px-4 py-2 border-b">{data.email}</td>
                                        <td className="px-4 py-2 border-b">{data.phone}</td>
                                        <td className="px-4 py-2 border-b">{data.gender}</td>
                                        <td className="px-4 py-2 border-b">
                                            <button
                                                className="text-red-600 hover:text-red-800"
                                            >
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
