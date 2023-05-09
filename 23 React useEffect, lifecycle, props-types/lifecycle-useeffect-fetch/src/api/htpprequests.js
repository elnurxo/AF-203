import axios from "axios";
import { BASE_URL } from "./base_url";

//get all categories
export const getAllCategories = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/categories`)
    .then(res =>{
        globalData = res.data;
    })
    return globalData;
}

//get category by ID
export const getCategoryByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/categories/${id}`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}
//post category
export const postCategory = (newCategory)=>{
    axios.post(`${BASE_URL}/categories`,newCategory);
}
//put category by ID
export const putCategory = (id,updatedCategory)=>{
    axios.put(`${BASE_URL}/categories/${id}`,updatedCategory);
}
//delete category by ID
export const deleteCategoryByID = (id)=>{
    axios.delete(`${BASE_URL}/categories/${id}`);
}