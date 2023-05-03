let id = new URLSearchParams(location.search).get("id");

fetch(`https://northwind.vercel.app/api/categories/${id}`)
.then(res=>res.json())
.then(data=>{
    document.querySelector("#id").textContent = data.id
    document.querySelector("#name").textContent = data.name
    document.querySelector("#desc").textContent = data.description
})