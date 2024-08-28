//Primitive DataTypes -------Call by Value
//7 Types: string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scoreV=100.3
const isLoggedIn=false
const outsideTemp=null


const id=Symbol('123')
const anotherid=Symbol('123')
const Bignumbrt=3453463326432246n

// console.log(typeof Bignumbrt);


//Non-Primitive ----------Call by Reference
//Array,Objects,Function

//Array
const heros=["Dhoni","Kohli","Rohit"]

//Objects
let myObj={
    name:"Anand",
    age:22

}


//Function
const myFunction=function(){
    console.log("Hello World");
    
}

// console.log(typeof myFunction);


//================================================================================================

//Stack (Primitive)         and Heap(Non_primitive)

let myTeam="Vikings"
let newTeam=myTeam

// console.log(myTeam);
// // newTeam="spartans"

// console.log(newTeam);//different answer because it make changes in copied file



let nameOne={
    name:"Ankuj",
    email:"akj@akj.com"
}

let nameTwo=nameOne

console.log(nameTwo);

nameTwo.email="naya@hai"
console.log(nameOne);
console.log(nameTwo);//both will give same value as it change in same file