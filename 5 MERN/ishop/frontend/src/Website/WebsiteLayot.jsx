import React, { useEffect } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { lsGetdata } from '../redux/reducers/CartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/reducers/UserSlice'


export default function WebsiteLayot() {

  const user = useSelector((state) => state.user.data);


  const dispatch = useDispatch();

  useEffect(
    () => {
      const lsData = JSON.parse(localStorage.getItem('userLogin'));
      const lsToken = localStorage.getItem('userToken');
      if (lsData) {
        dispatch(login({ data: lsData, token: lsToken }));
      }
    }, []
  )

  useEffect(
    () => {
      dispatch(lsGetdata());
    }, []
  )

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
