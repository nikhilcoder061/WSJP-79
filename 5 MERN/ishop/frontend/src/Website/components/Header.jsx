import React from 'react'
import { FaUser, FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="w-full border-b">
            {/* Row 1: Profile and Cart Icons */}
            <div className="flex justify-end items-center p-4 gap-6 ">
                <div className="flex items-center gap-2 cursor-pointer">
                    <FaUser className="text-xl" />
                    <span className="text-sm font-medium">Profile</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <FaShoppingCart className="text-xl" />
                    <span className="text-sm font-medium">Cart</span>
                </div>
            </div>

            {/* Row 2: Logo */}
            <div className="flex justify-center items-center py-2 bg-white border-b">
                <img src="public/image/logo.svg" alt="" />
            </div>

            {/* Row 3: Menu Items */}
            <div className="flex justify-center items-center gap-8 py-4 text-gray-700 font-semibold">
                <Link to={'/'}>
                    <div className="cursor-pointer hover:text-blue-600">Home</div>
                </Link>
                <Link to={'/shop'}>
                    <div className="cursor-pointer hover:text-blue-600">Store</div>
                </Link>
                <div className="cursor-pointer hover:text-blue-600">iPhone</div>
                <div className="cursor-pointer hover:text-blue-600">iPad</div>
                <div className="cursor-pointer hover:text-blue-600">Macbook</div>
                <div className="cursor-pointer hover:text-blue-600">Accessories</div>
            </div>
        </header>
    )
}
