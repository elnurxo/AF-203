import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { deleteCategory, postNewCategory } from '../../api/requests';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const navigate = useNavigate();
  const[newCategory,setNewCategory] = useState({name:'',description:''});
  function handleChange(e) {
     setNewCategory({...newCategory,[e.target.name]: e.target.value});
  }
   const handleSubmit = async(e)=>{
    e.preventDefault();
    newCategory.id = nanoid();
    await postNewCategory(newCategory);
    setNewCategory({name:'',description:''});
    navigate('/categories');
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input value={newCategory.name} onChange={(e)=>handleChange(e)} name='name' placeholder='category name' type='text'/> 
        <input value={newCategory.description} onChange={(e)=>handleChange(e)} name='description' placeholder='category description' type='text'/> 
        <button type=' submit'>Add Category</button>
    </form>
  )
}

export default AddCategory