import axios from "axios";
import { BASE_URL } from "./base_url";

//GET ALL PRODUCTS
export const getAllProducts = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/products`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}
//GET PRODUCT BY ID
export const getProductByID = async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}
//POST PRODUCT
export const postProduct = (payload)=>{
    axios.post(`${BASE_URL}/products`,payload);
}
//PUT PRODUCT
export const putProduct = (id,updatedProduct)=>{
    axios.put(`${BASE_URL}/products/${id}`,updatedProduct);
}
//DELETE PRODUCT BY ID
export const deleteProductByID = (id)=>{
    axios.delete(`${BASE_URL}/products/${id}`);
}


