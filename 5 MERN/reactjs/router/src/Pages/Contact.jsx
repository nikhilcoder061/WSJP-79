import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

export default function Contact() {
    return (
        <>
            <h1 className='text-7xl text-center'>Welcome to Contact Page</h1>
            <section id="contact" className="py-10 px-6 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="mt-4 text-gray-700">Have any questions? Reach out to us.</p>
                <form className="mt-6 max-w-lg mx-auto">
                    <input type="text" placeholder="Your Name" className="w-full p-2 border rounded mb-4" />
                    <input type="email" placeholder="Your Email" className="w-full p-2 border rounded mb-4" />
                    <textarea placeholder="Your Message" className="w-full p-2 border rounded mb-4"></textarea>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
                </form>
            </section>
        </>
    )
}
