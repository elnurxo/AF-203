let products = [
    {
        id:1,
        name:'coca cola',
        price:1.5
    },
    {
        id:2,
        name:'sprite',
        price:1.2
    },
    {
        id:3,
        name:'doritos',
        price:2.5
    },
    {
        id:4,
        name:'lays',
        price:4.5
    },
    {
        id:5,
        name:'fanta',
        price:1.5
    }
];

let newProducts = [];

// products.forEach((product,idx,arr)=>{
//     return product.price;
// });
// newProducts =  products.map((product)=>{
//     let newPricedPro = {
//         id: product.id,
//         name: product.name,
//         price: product.price*2
//     }
//     return newPricedPro;
// });

// newProducts = products.filter((product)=> product.name.includes('cola'))
// console.log(newProducts);

// let numbers = [1,2,3];

// let totalPrice = products.reduce((t,{id,name,price})=>{
//     return t+price
// },0);
// console.log(totalPrice);

// let pro = {
//     name:'cola',
//     price:1.5
// };

// let {price} = pro;

// console.log(price);

//some- ||
//every- &&

// console.log(products.some(({name,price})=>(price>1 && name.includes('cola'))));


let employees = [
    {
        id:1,
        salary:500
    },
    {
        id:2,
        salary:700
    },
    {
        id:3,
        salary:900
    },
    {
        id:4,
        salary:450
    }
];

//hamisinin maashi 1000 kicikdirse haminin maashina 200+
// let isTrue = employees.every((emp)=>emp.salary<1000);
// employees.forEach((emp)=>(isTrue ? emp.salary+=200 : emp.salary))


let customers = [
    {
        id:1,
        name:'John',
        age:17,
        hasTicket:true
    },
    {
        id:1,
        name:'Johnathan',
        age:19,
        hasTicket:false
    },
    {
        id:2,
        age:21,
        name:'Adam',
        hasTicket:false
    },
    {
        id:3,
        age:27,
        name:'Jack',
        hasTicket:true
    },
];

// let insideCustomers = customers.filter(({age,hasTicket})=>age>=18 && hasTicket)
// console.log(insideCustomers);

// let inputStr = ' jo    '
// let findArr = customers.filter((customer)=>{
//     if (customer.name.toLowerCase().trim().includes(inputStr.toLowerCase().trim())) {
//         return customer;
//     }
// })
// console.log(findArr);

let age = 19;
const res = customers.map((customer,idx)=>{
    if (customer.age==age) {
        return idx;
    }
    else{
        return -1;
    }
})
console.log(res);
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
// console.log(position);


let data = [
    {
        name:'lol',
        date: '2020-12-12'
    },
    {
        name:'lolo',
        date: '2022-12-12'
    },
    {
        name:'lala',
        date: '2021-12-12'
    }
]

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);