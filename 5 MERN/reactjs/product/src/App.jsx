import React from 'react'
import Header from './Common/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'

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
          }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  )

}
