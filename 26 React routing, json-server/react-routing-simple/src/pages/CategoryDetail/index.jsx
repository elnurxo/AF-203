import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategoryByID } from '../../api/requests';

const CategoryDetail = () => {
  const{id} = useParams();
  const[category,setCategory] = useState({});
  const[loading,setLoading] = useState(true);
  useEffect(()=>{
    getCategoryByID(id)
    .then(res=>{
      setCategory(res);
      setLoading(false);
    });
  },[id,setCategory,setLoading]);

  return (
    <>
      {loading ? <div>Data Loading...</div> : 
      <>
       <div>CategoryDetail Page</div>
       <h3>ID: {category.id}</h3>
       <h3>NAME: {category.name}</h3>
       <h3>Description: {category.description}</h3>
      </>
      }
    </>
  )
}

export default CategoryDetail