import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../api/requests'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProductsUser = () => {
  const[products,setProducts] = useState([]);
  useEffect(()=>{
    getAllProducts().then(data=>{
      setProducts(data);
    })
  })
  return (
   <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta author="Elnur Khalilov" description="this is home page"/>
        <title>Dribble | Products</title>
      </Helmet>
    <div>Products</div>
    <ul>
        {products && products.map((product)=>{
          return <li key={product.id}><Link to={`${product.id}`}>{product.name}</Link>, {product.price}$</li>
        })}
    </ul>
   </>
  )
}

export default ProductsUser