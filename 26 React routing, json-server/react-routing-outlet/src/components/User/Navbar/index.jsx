import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/basket'>Basket</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/admin'>Admin Panel</Link></li>
    </ul>
  )
}

export default UserNavbar