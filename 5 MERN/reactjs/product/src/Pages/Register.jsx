import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../FirebaseConfig';
import { toast } from 'react-toastify';

export default function Register() {

    const registerUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                toast.success("User Created Successfully");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error("User Not Created");
                console.log(error);
            });

    }


    return (
        <div className="py-8 bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
                    Register
                </h2>
                <form onSubmit={registerUser}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-600 font-semibold mb-2"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your full name"
                            required=""
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-600 font-semibold mb-2"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                            required=""
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-600 font-semibold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Create a password"
                            required=""
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-indigo-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    )
}
