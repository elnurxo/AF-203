let outerBox = document.querySelector(".outer-box");
let box = document.querySelector(".box");
let innerBox = document.querySelector(".inner-box");

outerBox.addEventListener("click",()=>{
    console.log('outer box clicked');
},{once:true})
// box.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log('box clicked');
// },{capture:false})
// innerBox.addEventListener("click",(e)=>{
//     e.stopPropagation();
//     console.log('inner box clicked');
// },{capture:false})
