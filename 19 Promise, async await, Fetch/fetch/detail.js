let id = new URLSearchParams(location.search).get("id");
let name = document.querySelector("#name");
let street = document.querySelector("#street");
let phone = document.querySelector("#phone");
let loading = document.querySelector("#loader");
let wrapper = document.querySelector(".wrapper");

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res=>res.json())
.then(data=>{
    loading.style.display = "none";
    wrapper.classList.replace("d-none","d-block");
    name.textContent = data.name;
    street.textContent = data.address.street;
    phone.textContent = data.phone;
});

let goBack = document.querySelector("#go-back");

goBack.addEventListener("click",()=>{
    window.history.back();
})