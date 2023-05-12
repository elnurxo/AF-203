import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <ul>
      <li><Link to='/admin'>Dashboard</Link></li>
      <li><Link to='/admin/products'>Products</Link></li>
      <li><Link to='/admin/add-product'>Add Product</Link></li>
    </ul>
  )
}

export default AdminNavbar