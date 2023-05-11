import { BASE_URL } from "./base_url";
import axios from "axios";

//get all suppliers
export const getAllSuppliers = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/suppliers`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}
//delete supplier by id
export const deleteSupplierByID = id =>{
    axios.delete(`${BASE_URL}/suppliers/${id}`);
}
//post supplier 
export const postSupplier = (payload)=>{
    axios.post(`${BASE_URL}/suppliers`,payload);
}