import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../Context/MainContext'

export default function Header() {

    const { cart, setCart, user, setUser } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        setUser('');
    }

    useEffect(
        () => {
            if (user == "" && location.pathname != '/register') {
                navigate('/login');
            }
        }, [user, location.pathname]
    )

    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg sticky top-0">
            <div className="text-2xl font-bold">Brand Name</div>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to={'/'}>
                            <span className="hover:text-gray-400">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            <span className="hover:text-gray-400">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/shop'}>
                            <span className="hover:text-gray-400">Shop</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex space-x-4">
                <Link to={'/cart'}>
                    <button className="relative">
                        <span className="text-xl">🛒</span>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{cart.length}</span>
                    </button>
                </Link>
                <button onClick={() => setCart([])} className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-700">Clear Cart</button>
                {
                    !user
                        ?
                        <Link to={'/login'}>
                            <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700">Login</button>
                        </Link>
                        :
                        <button onClick={logout} className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-700">Logout</button>
                }
            </div>
        </header>
    )
}
