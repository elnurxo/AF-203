let list = document.querySelector("#list");
let searchInput = document.querySelector("#search");
let loading = document.querySelector("#loader");

function getUsers() {
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return {
        result: response.json(),
        statusCode: response.status
    }
})
.then((data)=>{
    if (data.statusCode>=200 && data.statusCode<300) {
        loading.style.display = "none";
        data.result.then((data)=>{
            data.forEach(item => {
                list.innerHTML += `<li id="${item.id}"><a href="detail.html?id=${item.id}">${item.name}</a> | ${item.address.city}</li>`
            });
        })
    }
    else{
        throw new Error("404 error not found!")
    }
})
.catch((err)=>{
    console.log('ERROR: ',err);
});
}

document.addEventListener("DOMContentLoaded",()=>{
    getUsers();
});

searchInput.addEventListener("keyup",(e)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        list.innerHTML = "";
        let searhcedUsers =  data.filter(item => item.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
        searhcedUsers.forEach((item)=>{
            list.innerHTML += `<li><a href="detail.html?id=${item.id}">${item.name}</a> | ${item.address.city}</li>`
        })
    });
});

let sortBtn = document.querySelector("#sort");
sortBtn.addEventListener("click",()=>{
    list.innerHTML = "";
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        data.sort((x,y)=>x.name.localeCompare(y.name));
        data.forEach((x)=>{
            list.innerHTML += `<li><a href="detail.html?id=${x.id}">${x.name}</a> | ${x.address.city}</li>`
        })
    })
})

