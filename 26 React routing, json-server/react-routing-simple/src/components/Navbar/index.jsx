import React from 'react';
import style from "./index.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className={style.nav}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/categories'>Categories</Link>
        </li>
        <li>
          <Link to='/add-category'>Add New Category</Link>
        </li>
    </ul>
  )
}

export default Navbar