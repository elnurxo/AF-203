import React from 'react'
import Navbar from '../../components/Admin/Navbar';
import Footer from '../../components/Admin/Footer';
import { Outlet } from 'react-router-dom';

const AdminRoot = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AdminRoot