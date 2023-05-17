import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductByID } from '../../../api/requests';
import { Helmet } from 'react-helmet';

const ProductDetail = () => {
  const{id} = useParams();
  const[product,setProduct] = useState({});
  useEffect(()=>{
    getProductByID(id)
    .then(data=>{
      setProduct(data);
    })
  },[id])
  return (
   <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta author="Elnur Khalilov" description="this is home page"/>
        <title>Dribble | Detail</title>
      </Helmet>
   <div>Detail page of {product.name}</div>
   <ul>
      <li>ID: {product.id}</li>
      <li>NAME: {product.name}</li>
      <li>PRICE: {product.price}</li>
   </ul>
   <Link to="/products"><button>go back</button></Link>
   </>
  )
}

export default ProductDetail