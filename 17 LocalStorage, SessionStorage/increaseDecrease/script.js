let decreaseBtn = document.querySelector(".decrease");
let count = document.querySelector(".count");
let increaseBtn = document.querySelector(".increase");
let clearAll = document.querySelector(".clear");
//localStorage - clear, setItem, getItem, removeItem, length

decreaseBtn.addEventListener("click",()=>{
    let currentCount = Number(--count.textContent);
    count.textContent = currentCount;
    localStorage.setItem("count",currentCount);
})

increaseBtn.addEventListener("click",()=>{
    let currentCount = Number(++count.textContent)
    count.textContent = currentCount;
    localStorage.setItem("count",currentCount);
});

clearAll.addEventListener("click",()=>{
    localStorage.clear();
    count.textContent = 0;
})

document.addEventListener("DOMContentLoaded",()=>{
   if (localStorage.getItem("count")) {
      count.textContent = localStorage.getItem("count");
   }
   else{
    count.textContent = 0;
   }

   //mode
   if (localStorage.getItem("mode")==null) {
        localStorage.setItem("mode","light");
   }
   else{
    CheckModeLoading();
   }
});

function CheckModeLoading() {
    if (localStorage.getItem("mode")=="dark") {
        document.body.style.backgroundColor = "black";
        count.style.color = "white";
        modeBtn.classList.replace("btn-dark","btn-light");
        modeBtn.children[1].classList.replace("fa-moon","fa-sun");
        modeBtn.children[0].textContent = "Light Mode";
    }
    else{
        document.body.style.backgroundColor = "white";
        count.style.color = "black";
        modeBtn.classList.replace("btn-light","btn-dark");
        modeBtn.children[1].classList.replace("fa-sun","fa-moon");
        modeBtn.children[0].textContent = "Dark Mode";
    }
}
function CheckModeClick() {
    if (localStorage.getItem("mode")=="light") {
        localStorage.setItem("mode","dark");
        document.body.style.backgroundColor = "black";
        count.style.color = "white";
        modeBtn.classList.replace("btn-dark","btn-light");
        modeBtn.children[1].classList.replace("fa-moon","fa-sun");
        modeBtn.children[0].textContent = "Light Mode";
    }
    else{
        localStorage.setItem("mode","light");
        document.body.style.backgroundColor = "transparent";
        count.style.color = "black";
        modeBtn.classList.replace("btn-light","btn-dark");
        modeBtn.children[1].classList.replace("fa-sun","fa-moon");
        modeBtn.children[0].textContent = "Dark Mode";
    }
}

//DARK MODE
let modeBtn = document.querySelector(".mode-switch");

modeBtn.addEventListener("click",function(){
    CheckModeClick();
});