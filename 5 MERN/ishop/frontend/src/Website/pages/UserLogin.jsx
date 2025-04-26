import axios from 'axios';
import React, { useContext } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { MainContext } from '../../Context/Context';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/UserSlice';
import { moveToCart } from '../../redux/reducers/CartSlice';

export default function UserLogin() {

    const { toastNotify, API_BASE_URL } = useContext(MainContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const cart = useSelector((state) => state.cart.data);

    console.log(searchParams.get('ref'));

    const userLogin = (event) => {
        event.preventDefault();

        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        axios.post(API_BASE_URL + '/user/login', data).then(
            (success) => {
                toastNotify(success.data.msg, success.data.status);
                if (success.data.status == 1) {
                    dispatch(login({ data: success.data.user, token: success.data.token }));

                    axios.post(API_BASE_URL + `/user/movetodb/${success.data.user._id}`, cart).then(
                        (res) => {
                            const latestCart = res.data.latestCart;
                            let totalOriginalPrice = 0;
                            let totalFinalPrice = 0;

                            const data = latestCart.map((cartItem, cartIndex) => {
                                totalOriginalPrice += cartItem.product_id.original_price * cartItem.qty;
                                totalFinalPrice += cartItem.product_id.final_price * cartItem.qty;
                                return (
                                    {
                                        product_id: cartItem.product_id,
                                        qty: cartItem.qty
                                    }
                                )
                            })

                            dispatch(moveToCart({ data, totalOriginalPrice, totalFinalPrice }))


                        }
                    ).catch(
                        (err) => {
                            console.log(err);
                        }
                    )

                    if (searchParams.get('ref') == 'cart') {
                        navigate('/cart');
                    } else {
                        navigate('/');
                    }
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
                <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
                <form className="space-y-4" onSubmit={userLogin}>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required=""
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required=""
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center">
                    Don't have an account?
                    <Link to={`/userregister?${searchParams.toString()}`}>
                        <span className="text-blue-500 hover:underline">
                            Register
                        </span>
                    </Link>
                </p>
            </div>
        </div>

    )
}
