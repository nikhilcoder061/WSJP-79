import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

const links = [
    { title: 'Infomation', items: ['1on1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting', 'SEO Optimisation'] },
    { title: 'Service', items: ['About', 'Meet the Team', 'Accounts Review'] },
    { title: 'Extras', items: ['Contact', 'FAQs', 'Live Chat'] },
    { title: 'My Account', items: ['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring Statistics'] },
    { title: 'Userful Links', items: ['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring Statistics'] },
    { title: 'Our Offers', items: ['Accessibility', 'Returns Policy', 'Refund Policy', 'Hiring Statistics'] }
];

const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', href: '#' },
    { icon: <FaInstagram />, label: 'Instagram', href: '#' },
    { icon: <FaTwitter />, label: 'Twitter', href: '#' },
    { icon: <FaGithub />, label: 'GitHub', href: '#' },
    { icon: <FaDribbble />, label: 'Dribbble', href: '#' },
];

export default function Footer() {
    return (
        <footer className="bg-white shadow-md border-t">
            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 my-10">
                    {/* Company Info */}
                    <div>
                        <img src="public/images/iSHOP Logo.svg" alt="iShop Logo" className="w-32" />
                        <p className="py-3 text-justify text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="text-[#22262A] font-bold text-lg">Follow us</h2>
                        <p className="py-3 text-justify text-gray-600">
                            Stay connected with us through our social channels.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#4267B2] text-2xl">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] text-2xl">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-[#22262A] font-bold text-lg">Contact us</h2>
                        <ul className="py-3 text-justify text-gray-600">
                            <li>iShop: address @building 124</li>
                            <li>Call us now: 0123-456-789</li>
                            <li>Email: support@whatever.com</li>
                        </ul>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {links.map((section, idx) => (
                        <div key={idx} className="col-span-1">
                            <p className="font-medium text-gray-900">{section.title}</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                {section.items.map((item, i) => (
                                    <li key={i}>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <ul className="flex gap-4">
                        {socialLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 transition hover:opacity-75" aria-label={link.label}>
                                    {link.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 md:mt-0 text-center">
                        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                        <ul className="flex flex-wrap justify-center gap-4 mt-2 text-xs">
                            <li><a href="#" className="text-gray-500 transition hover:opacity-75">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-500 transition hover:opacity-75">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-500 transition hover:opacity-75">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}