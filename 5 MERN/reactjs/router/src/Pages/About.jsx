import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function About() {
    return (
        <>
            <h1 className='text-7xl text-center'>Welcome to About Page</h1>
            <section id="about" className="py-10 px-6 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold">About Us</h2>
                <p className="mt-4 text-gray-700">We are dedicated to providing the best educational resources for our students.</p>
            </section>
        </>
    )
}
