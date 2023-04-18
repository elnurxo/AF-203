// function displayHi(){
//     console.log("hello");
// }

// function Sum(num1=0,num2=0){
//     let result = num1+num2;
//     console.log(result);
// }
// const SumAnonym = function(num1=0,num2=0){
//     console.log(num1+num2);
// };

// const SumArrow = (num1,num2) =>{
//    return num1+num2;
// }

// const SumArrow2 = (num1,num2) => num1+num2;


// let result = SumArrow2(3,4);
// console.log('result:',result);

// function Average(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum+= arguments[i];
//     }
//     return sum/arguments.length;
// }

// console.log(Average(2,3,4,5,10,100));;

// const GetFullName = function(name,surname){
//     return name+' '+surname;
// }

// console.log(GetFullName("Elnur","Khalilov"));

// function GetNames() {
//     let res = '';
//     for (let i = 0; i < arguments.length; i++) {
//        res+=(arguments[i]+' ');
//     }

//     return res;
// }

// console.log(GetNames("Anar","Kamran","Asif","Shahin"));


function GetDetails(name,surname,birthYear,birthPlace) {
    let currentYear = 2023;
    let result = `${name} ${surname} was born in ${currentYear-birthYear}/${birthPlace}`;

    return result;
}

console.log(GetDetails("Elnur","Khalilov",2001,"Russia"));
