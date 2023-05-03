import {
  getAllCategories,
  getCategoryByID,
  postCategory,
  editCategoryByID,
  deleteCategoryByID,
} from "./API/httprequests.js";
import {
    getAll
} from "./API/axioshttprequests.js";


// getAll('categories').then(data=>{
//     console.log(data);
// })

getAll('suppliers').then(data=>{
    console.log(data);
})

// let list = document.querySelector("#categories");
// let products = document.querySelector("#products");

// getAllCategories().then((data)=>{
//     data.forEach(item => {
//         let listItem = document.createElement("li");
//         listItem.textContent = item.name;
//         listItem.setAttribute("data-id",item.id);
//         listItem.style.cursor = "pointer";
//         list.append(listItem);
//         listItem.onclick = function(e){
//             let id = e.target.getAttribute("data-id");
//             let detail = document.querySelector("#detail");
//             getCategoryByID(id).then(data=>{
//                 detail.textContent = data.name;
//             })
//         }
//     });
// });

// getCategoryByID(5).then(data=>{
//     document.querySelector("h1").textContent = data.name;
// });


// //test get all categories
// getAllCategories().then(data=>{console.log(data)})

// //test get category by id
// getCategoryByID(3).then(data=>{console.log(data)})

// //test post category
// postCategory({name:'new category',description:'test'})

// //delete category by id
// deleteCategoryByID(1);

// //edit category by id
// editCategoryByID(2,{name:'updated name',desciption:'updated desctiption'})
