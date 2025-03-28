import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";

export default function AdminSidebar() {

  const navMenu = [
    {
      path: '/admin',
      name: 'Dashboard',
      icon: <FaHome />
    },
    {
      path: '/admin/category',
      name: 'Category',
      icon: <BiSolidCategoryAlt />
    },
    {
      path: '/admin/color',
      name: 'Color',
      icon: <IoIosColorPalette />
    },
    {
      path: '/admin/product',
      name: 'Product',
      icon: <AiOutlineProduct />
    }
  ]


  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">

        {
          navMenu.map(
            (navItem, navIndex) => {
              return (
                <Link key={navIndex} to={navItem.path} className=" p-3 rounded-lg hover:bg-gray-700 flex gap-4 items-center">
                  {navItem.icon}
                  {navItem.name}
                </Link>
              )
            }
          )
        }
      </nav>
      <div className="p-4 border-t border-gray-700">
        <a
          href="#"
          className="block p-3 rounded-lg bg-red-600 hover:bg-red-700 text-center"
        >
          Logout
        </a>
      </div>
    </div>

  )
}
