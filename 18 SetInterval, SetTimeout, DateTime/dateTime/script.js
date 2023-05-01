let baku  = document.querySelector("#baku");
let moscow  = document.querySelector("#moscow");
let newYork  = document.querySelector("#new-york");

let UTCtime = new Date();
baku.textContent = moment(UTCtime).calendar(); 
moscow.textContent = moment(UTCtime).subtract(1,'hours').calendar();
newYork.textContent = moment(UTCtime).subtract(9,'hours').calendar();