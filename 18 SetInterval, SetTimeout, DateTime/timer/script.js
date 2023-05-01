let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let pause = document.querySelector(".pause");
let counter = document.querySelector("#counter");
let intervalID;

start.addEventListener("click",(e)=>{
    let currentCount = Number(counter.textContent);
    intervalID =  setInterval(() => {
        counter.textContent = ++currentCount;
    }, 1000);
});

pause.addEventListener("click",()=>{
    console.log(intervalID);
    clearInterval(intervalID);
});

reset.addEventListener("click",()=>{
    clearInterval(intervalID);
    counter.textContent = 0;
});


//time
let baku = document.querySelector("#baku-time");

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(() => {
        const currentDate = new Date();
        let currentHour = currentDate.getHours();
        let currentMinutes = currentDate.getMinutes();
        let currentSeconds = currentDate.getSeconds();
        if (currentSeconds<10) {
            currentSeconds = '0'+currentSeconds;
        }
        baku.textContent = `${currentHour}:${currentMinutes}:${currentSeconds}`;
    }, 1000);
})

//budilnik

