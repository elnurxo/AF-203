// function Sum(num1,num2,fn) {
//     fn(num1,num2);
// }

// Sum(10,20,(x,y)=>console.log(x+y));

const person1 = {
    name: 'Anar',
    age: 21,
    salary:1800,
};
const person2 = {
    name: 'Asif',
    age: 25,
    salary:1500
};
const person3 = {
    name: 'Kamran',
    age: 63,
    salary:200
};
const person4 = {
    name: 'Pehman',
    age:35,
    salary:4000
};

let people = [person1,person2,person3,person4];


// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
// ];

// cars.sort((a,b)=>{
//     return a.year - b.year
// })
// console.log(cars);

function Sum(num1,num2,callbackFn) {
    let sum = num1+num2;
    let count = arguments.length-1;
    return callbackFn(sum,count);
}



let avg = Sum(10,20,(sum,count)=>sum/count);
console.log(avg);




