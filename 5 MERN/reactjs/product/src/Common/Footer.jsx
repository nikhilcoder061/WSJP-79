import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4 mt-8 text-center">
            <p>&copy; 2025 Brand Name. All rights reserved.</p>
            <nav>
                <ul className="flex justify-center space-x-6 mt-2">
                    <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                    <li><a href="#terms" className="hover:text-gray-400">Terms of Service</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
        </footer>
    )
}
