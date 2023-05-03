import { API_BASE_URL } from "./baseURL.js";

//get All Categories
export async function getAllCategories() {
    let globalData;
    await fetch(`${API_BASE_URL}/categories`)
    .then(response => response.json())
    .then(data => {
       globalData = data;
    })
    return globalData;
}

//get Category by ID
export async function getCategoryByID(id){
    let globalData;
    await fetch(`${API_BASE_URL}/categories/${id}`)
    .then(response => response.json())
    .then(data => {
       globalData = data;
    })
    return globalData;
}

//post Category
export async function postCategory(newCategory){
    await fetch(`${API_BASE_URL}/categories`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newCategory)
    })
}

//delete category By ID 
export async function deleteCategoryByID(id){
    await fetch(`${API_BASE_URL}/categories/${id}`,{
        method: 'DELETE'
    })
}

//edit category by ID
export async function editCategoryByID(id,updatedCategory){
    await fetch(`${API_BASE_URL}/categories/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updatedCategory)
    })
}

//get All Products
export async function getAllProducts() {
    let globalData;
    await fetch(`${API_BASE_URL}/products`)
    .then(response => response.json())
    .then(data => {
       globalData = data;
    })
    return globalData;
}