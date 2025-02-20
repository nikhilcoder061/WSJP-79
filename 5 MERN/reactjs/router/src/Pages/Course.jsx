import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Course() {
    return (
        <>
            <h1 className='text-7xl text-center'>Welcome to Course Page</h1>
            <section id="courses" className="py-10 px-6 text-center">
                <h2 className="text-3xl font-bold">Our Courses</h2>
                <p className="mt-4 text-gray-700">Choose from a variety of courses designed to help you succeed.</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Web Development</h3>
                        <p className="mt-2 text-gray-600">Learn HTML, CSS, JavaScript, and more.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Data Science</h3>
                        <p className="mt-2 text-gray-600">Master Python, Machine Learning, and AI.</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Graphic Design</h3>
                        <p className="mt-2 text-gray-600">Learn Photoshop, Illustrator, and more.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
