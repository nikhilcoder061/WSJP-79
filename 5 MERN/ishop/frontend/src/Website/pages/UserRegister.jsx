import React, { useContext } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { MainContext } from '../../Context/Context';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../../redux/reducers/UserSlice';

export default function UserRegister() {

    const { toastNotify, API_BASE_URL } = useContext(MainContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const userRegister = (event) => {

        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        axios.post(API_BASE_URL + '/user/create', data).then(
            (success) => {
                toastNotify(success.data.msg, success.data.status);
                console.log(success);
                if (success.data.status == 1) {
                    dispatch(login({ data: success.data.user, token: success.data.token }));
                    navigate('/');
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )

    }



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Create a New Account</h2>
                <form className="space-y-4" onSubmit={userRegister}>
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required=""
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required=""
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required=""
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center">
                    Already have an account?
                    <Link to={`/userlogin?${searchParams.toString()}`}>
                        <span className="text-blue-500 hover:underline">
                            Login
                        </span>
                    </Link>
                </p>
            </div>
        </div>


    )
}
