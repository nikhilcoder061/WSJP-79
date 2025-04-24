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
import Context from './Context/Context'
import EditCategoy from './Admin/pages/category/EditCategory'
import MultipleImage from './Admin/pages/products/MultipleImage'
import EditProduct from './Admin/pages/products/EditProduct'
import Login from './Admin/pages/Login'
import Home from './Website/pages/Home'
import Cart from './Website/pages/Cart'
import CheckOut from './Website/pages/CheckOut'
import UserLogin from './Website/pages/UserLogin'
import UserRegister from './Website/pages/UserRegister'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <WebsiteLayot />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/shop/:categorySlug?',
            element: <Shop />
          },
          {
            path: '/cart',
            element: <Cart />
          },
          {
            path: '/checkout',
            element: <CheckOut />
          }
        ]
      },
      {
        path: '/userlogin',
        element: <UserLogin />
      },
      {
        path: '/userregister',
        element: <UserRegister />
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
            path: 'category/edit/:category_id',
            element: <EditCategoy />
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
          },
          {
            path: 'product/multipleimages/:product_id',
            element: <MultipleImage />
          },
          {
            path: 'product/edit/:product_id',
            element: <EditProduct />
          }
        ]
      },
      {
        path: '/admin/login',
        element: <Login />
      }
    ]
  )

  return (
    <Context>
      <RouterProvider router={routes} />
    </Context>
  )
}
