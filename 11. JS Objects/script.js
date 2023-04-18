// const car = {
//     name: "Kia",
//     model: "Optima",
//     year: 2017,
//     fuelCapacity: 30,
//     fuelFor1KM: 5,
//     currentFuel: 10,
//     mileage: 120000,
//     drive: function(km){
//         if (km>this.currentFuel*this.fuelFor1KM) {
//             console.log("not enough fuel!");
//         }
//         else{
//             this.mileage += km;
//             this.currentFuel = this.currentFuel - km*this.fuelFor1KM;
//             console.log(`${km}KM has driven. \ncurrent fuel is ${this.currentFuel}.\nCurrent millage is ${this.mileage}`);
//         }
//     }
// };

// const person = {
//     name: "Elnur",
//     surname: "Khalilov",
//     address: {
//         country:"Az",
//         city:"Baku",
//         street:"Nizami 51"
//     },
//     hobbies: ["swimming","gaming"],
//     getFullName(){
//         return this.name+' '+this.surname+' age:'+this.age;
//     }
// };



// const student = {
//     groupNo: "AF-203",
//     major: "Web development"
// }
// const human = {
//     name: "Kamran",
//     age:21
// };
// console.log(student);
// Object.setPrototypeOf(student,human);
// console.log(student);

//function cunstructor
// function Human(name,surname,age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
// function Employee(salary,experienceYear){
//     this.salary = salary;
//     this.experienceYear = experienceYear;
// }

// const person1 = new Human("Elnur","Khalilov",22);
// const person2 = new Human("Kamran","Huseynzade",21);
// const emp1 = new Employee(2500,3);

// Object.setPrototypeOf(emp1,new Human("Eldar","Aliyev",25));




// const person2 = Object.assign({},person1);

// person2.name = "Elnur";
// console.log(person2);
// console.log(person1);

const person1 = {
    name:"Eldar",
    age:21
};

let {name,age} = {...person1};

console.log(age);



















