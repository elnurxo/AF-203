import { API_BASE_URL } from "./baseURL.js";

//get All Categories
export async function getAll(endpoint) {
    let globalData;
    await axios.get(`${API_BASE_URL}/${endpoint}`)
    .then(result => {
       globalData = result.data;
    })
    return globalData;
}

//get Category by ID
export async function getCategoryByID(id){
    let globalData;
    await axios.get(`${API_BASE_URL}/categories/${id}`)
    .then(result => {
       globalData = result.data;
    })
    return globalData;
}

//post Category
export async function postCategory(newCategory){
    await axios.post(`${API_BASE_URL}/categories`,{
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newCategory)
    })
}

//delete category By ID 
export async function deleteCategoryByID(id){
    await axios.delete(`${API_BASE_URL}/categories/${id}`,{
        method: 'DELETE'
    })
}

//edit category by ID
export async function editCategoryByID(id,updatedCategory){
    await axios.put(`${API_BASE_URL}/categories/${id}`,{
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updatedCategory)
    })
}