import React from 'react'
import Header from './Common/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import ProductDetail from './Pages/ProductDetail'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/shop/:slug?',
            element: <Shop />
          },
          {
            path: '/productdetail/:productId',
            element: <ProductDetail />
          }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  )

}
