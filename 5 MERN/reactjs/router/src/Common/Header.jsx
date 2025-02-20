import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">My Website</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to={'/'}> Home </Link>
                    </li>
                    <li>
                        <Link to={'/about'}> About </Link>
                    </li>
                    <li>
                        <Link to={'/course'}> Course </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}> Contact </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
