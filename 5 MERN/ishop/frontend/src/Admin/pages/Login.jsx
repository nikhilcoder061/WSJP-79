import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../Context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/AdminSlice';

export default function Login() {

    const { toastNotify, API_BASE_URL } = useContext(MainContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.admin.data);

    const loginAdmin = (event) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        axios.post(API_BASE_URL + '/admin/login', data).then(
            (success) => {
                toastNotify(success.data.msg, success.data.status);
                dispatch(login(success.data.admin));
                if (success.data.status == 1) {
                    navigate('/admin');
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

    }

    const lsData = JSON.parse(localStorage.getItem('adminLogin'));
    useEffect(
        () => {
            if (admin || lsData) {
                navigate('/admin');
            }
        }, []
    )

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form className="space-y-6" onSubmit={loginAdmin}>
                    <div>
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
                            required=""
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required=""
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox text-blue-500" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign in
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}
