import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/requests";
import { Link } from "react-router-dom";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((res) => setCategories(res));
  }, [setCategories]);
  return (
    <>
      <ul>
        { categories && categories.map((category)=>{
          return <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        }) }
      </ul>
     
    </>
  );
};

export default Categories;
