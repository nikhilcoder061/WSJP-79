import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WebsiteLayot from './Website/WebsiteLayot'
import AdminLayout from './Admin/pages/AdminLayout'
import ViewCategory from './Admin/pages/category/ViewCategory'
import Dashboard from './Admin/pages/Dashboard'
import Shop from './Website/pages/Shop'
import AddCategoy from './Admin/pages/category/AddCategoy'
import ViewColor from './Admin/pages/color/ViewColor'
import AddColor from './Admin/pages/color/AddColor'
import ViewProducts from './Admin/pages/products/ViewProducts'
import AddProducts from './Admin/pages/products/AddProducts'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <WebsiteLayot />,
        children: [
          {
            path: '/',
            element: <Shop />
          }
        ]
      },
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            path: '',
            element: <Dashboard />
          },
          {
            path: 'category',
            element: <ViewCategory />
          },
          {
            path: 'category/add',
            element: <AddCategoy />
          },
          {
            path: 'color',
            element: <ViewColor />
          },
          {
            path: 'color/add',
            element: <AddColor />
          },
          {
            path: 'product',
            element: <ViewProducts />
          },
          {
            path: 'product/add',
            element: <AddProducts />
          }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  )
}
