import { BASE_URL } from "./base_url";
import axios from "axios";


export const getAllCategories = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/categories`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}

export const getCategoryByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/categories/${id}`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}

export const postNewCategory = (payload)=>{
    axios.post(`${BASE_URL}/categories`,payload)
}
export const deleteCategory = (id)=>{
    axios.delete(`${BASE_URL}/categories/${id}`)
}