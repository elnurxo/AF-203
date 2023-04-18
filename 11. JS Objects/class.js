class Human{
    constructor(name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName() {
        return this.name+' '+this.surname;
    }
}
class Student extends Human{
    constructor(groupNo,major,point,name,surname,age){
        super(name);
        this.groupNo = groupNo;
        this.major = major;
        this.point = point
    }
    getAverage(s1,s2,s3){
        return Math.floor((s1+s2+s3)/3);
    }
}
class Employee extends Human{
    constructor(salary,experienceYear,name,surname,age){
        super(name,surname,age);
        this.salary = salary;
        this.experienceYear = experienceYear;
    }
}

// const stu1 = new Student("AF-203","dev",98.4,"Asif","Aliyev",21);
// const emp1 = new Employee(2500,3,"Elnur","Khalilov",22);
// console.log(stu1.getFullName());
// console.log(emp1.getFullName());


// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }

// class Bird extends Animal{
//     constructor(wingcolor,type,name){
//         super(name);
//         this.wingcolor = wingcolor;
//         this.type = type;
//     }
// }
// class DomesticBird extends Bird{
//     constructor(meatPrice,wingcolor,type,name){
//         super(wingcolor,type,name);
//         this.meatPrice = meatPrice;
//     }
// }

// const goose = new DomesticBird(6,"red","domestic","jack");
// console.log(goose);
