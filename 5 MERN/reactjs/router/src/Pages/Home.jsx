import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Home() {
    return (
        <>
            <h1 className='text-7xl text-center'>Welcome to Home Page</h1>
            <section id="home" className="py-10 px-6 text-center">
                <h2 className="text-3xl font-bold">Welcome to My Website</h2>
                <p className="mt-4 text-gray-700">Explore our courses and learn from the best experts.</p>
            </section>
        </>
    )
}
