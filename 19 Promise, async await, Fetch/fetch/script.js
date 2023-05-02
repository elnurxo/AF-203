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
        console.log(data);
        console.log(data);
        data.result.then((data)=>{
            data.forEach(item => {
                list.innerHTML += `<li id="${item.id}"><a href="detail.html?id=${item.id}">${item.name}</a> | ${item.address.city}</li>`
            });
        })
    }
    else{
        console.log(data.statusCode);
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
        let searhcedUsers =  data.filter(item => item.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
        searhcedUsers.forEach((item)=>{
            list.innerHTML = "";
            list.innerHTML += `<li>${item.name} | ${item.address.city}</li>`
        })
    });
    if (e.target.value.trim()=="") {
        getUsers();
    }
});

let sortBtn = document.querySelector("#sort");
sortBtn.addEventListener("click",()=>{
    list.innerHTML = "";
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        let sortedArr = [];
        data.sort((x,y)=>{
            if (x.name<y.name) {
               sortedArr.push(x);
            }
        });
        sortedArr.forEach((x)=>{
            list.innerHTML += `<li>${x.name} | ${x.address.city}</li>`
        })
    })
})

