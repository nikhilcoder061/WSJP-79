import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className='grid grid-cols-6'>
      <div className='col-span-1'>
        <AdminSidebar />
      </div>
      <div className='col-span-5'>
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  )
}
