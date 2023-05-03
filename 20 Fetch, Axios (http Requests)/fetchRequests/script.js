let list = document.querySelector("#list");
// GET, GETbyID, POST, DELETE, PUT
let editForm = document.querySelector("#edit");

document.addEventListener("DOMContentLoaded", async () => {
  let response = await fetch("https://northwind.vercel.app/api/categories");
  let data = await response.json();

  data.forEach((item) => {
    list.innerHTML += `<li data-desc="${item.description}"><a href="detail.html?id=${item.id}">${item.name}</a> <button data-id="${item.id}" class="delete">delete</button> <button data-id="${item.id}" class="edit">edit</button></li>`;
  });
  let buttons = document.querySelectorAll(".delete");
  buttons.forEach((btn) => {
    btn.onclick = function (e) {
      let id = e.target.getAttribute("data-id");
      if (window.confirm("are you sure to delete?")) {
        //delete from API
        fetch(`https://northwind.vercel.app/api/categories/${id}`, {
          method: "DELETE",
        });
        //render UI
        e.target.parentElement.remove();
      }
    };
  });
  //edit
  let editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn)=>{
    editBtn.addEventListener("click",(e)=>{
        let selectedID = e.target.getAttribute("data-id");
        editForm.setAttribute("data-id",selectedID);
        console.log(selectedID);
        editForm.style.display = "block";
        let editingName = e.target.previousElementSibling.previousElementSibling.textContent;
        let editingDesc = e.target.parentElement.getAttribute("data-desc");
        let descInp = document.querySelector("#desc-edit");
        let nameInp = document.querySelector("#name-edit");
        descInp.value = editingDesc;
        nameInp.value = editingName;
    })
  })
});

//POST REQUEST
let form = document.querySelector("form");
let nameInp = document.querySelector("#name");
let descInp = document.querySelector("#desc");

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    let categoryName = nameInp.value;
    let categoryDesc = descInp.value;

    //reset inputs
    nameInp.value = "";
    descInp.value = "";

    let newCategory = {
        name: categoryName,
        description: categoryDesc,
    }

    //post fetch
   if (newCategory.name.trim()==="" || newCategory.description.trim()==="") {
        window.alert("empty data cannot post to API");
   }
   else{
    await fetch("https://northwind.vercel.app/api/categories",{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        //payload
        body: JSON.stringify(newCategory)
    });

    //render UI
    await fetch("https://northwind.vercel.app/api/categories").then(res=>res.json())
    .then(data=>{
        console.log(data);
        let newAdded = data.find((item)=>{
            return(item.name==newCategory.name && item.description==newCategory.description)
        });
        list.innerHTML += `<li><a href="detail.html?id=${newAdded.id}">${newCategory.name}</a> <button data-id="${newAdded.id}" class="delete">delete</button></li>`
    })
   }
})


//EDIT REQUEST
editForm.addEventListener("submit",(e)=>{
    let updatedName = e.target.children[0].value;
    let updatedDesc = e.target.children[1].value;
    let id = e.target.getAttribute("data-id");
    e.preventDefault();
     fetch(`https://northwind.vercel.app/api/categories/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: updatedName,
                description: updatedDesc
            })
    })
    editForm.style.display = "none";

    //render UI
    Array.from(list.children).forEach((listItem)=>{
        if (listItem.children[2].getAttribute("data-id")==id) {
            listItem.children[0].textContent = updatedName;
            listItem.setAttribute("data-desc",updatedDesc);
        }
    })

})