import React from 'react'
import Navbar from "../../components/User/Navbar";
import Footer from "../../components/User/Footer";
import { Outlet } from 'react-router-dom';

const MainRoot = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainRoot