import { useEffect, useState } from "react";
import { deleteCategoryByID, getAllCategories, getCategoryByID, postCategory } from "./api/htpprequests";

function App() {
  let[categories,setCategories] = useState([]);
  useEffect(()=>{
    getAllCategories().then((data)=>{
      setCategories(data);
    })
  },[categories]);

 
  return (
    <>
     <ul>
       {categories && categories.map((cat)=>{
        return <li key={cat.id}>{cat.name} <button onClick={()=>{
          deleteCategoryByID(cat.id);
          let filteredCategories = categories.filter((item)=>item.id!==cat.id);
          setCategories(filteredCategories);
        }}>Delete</button></li>
       })}
     </ul>
    </>
  );
}

export default App;
