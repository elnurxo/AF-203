import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductByID, putProduct } from '../../../api/requests';

const EditProduct = () => {
  const[product,setProduct] = useState({name:'',price:''});
  const navigate = useNavigate();
  const{id} = useParams();
  useEffect(()=>{
    getProductByID(id).then(data=>{
      setProduct(data);
    })
  },[id]);
  function handleChange(e){
    setProduct({...product,[e.target.name]:e.target.value});
  }
  async function handleSubmit(e){
    e.preventDefault();
    await putProduct(id, product);
    setProduct({name:'',price:''})
    navigate("/admin/products");
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input onChange={(e)=>handleChange(e)} value={product.name} name='name' placeholder='product name' type='text'/>
      <input onChange={(e)=>handleChange(e)} value={product.price} name='price' placeholder='product price' type='number'/>
      <button type='submit'>Edit</button>
    </form>
  )
}

export default EditProduct