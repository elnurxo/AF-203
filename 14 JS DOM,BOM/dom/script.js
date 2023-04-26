let removeBtns = document.querySelectorAll(".remove");
let input = document.querySelector("#name");
let isMarried = document.querySelector("#isMarried");
removeBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log(`${input.value} is ${isMarried.checked ? "" : "not"} married!`);
    })
})
