import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Course'
import Contact from './Pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

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
            path: '/course',
            element: <Course />
          },
          {
            path: '/contact',
            element: <Contact />
          }
        ]
      }
    ]
  )


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
