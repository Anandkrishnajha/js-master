// const tinderUser=new Object()   //this method is used for singleton object as of now its empty {}

const tinderUser={}  // it will also give the same output just this method is used for non singleton
//adding some value into this object
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false  


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);



//combination of objects

const obj1={1:"a" ,2:"b"}
const obj2={3:"a" ,4:"b"}
const obj3={5:"a" ,6:"b"}

// const obj4={obj1,obj2,obj3}
/*{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
}this is the output which is seriously not what we want
 */


const obj4=Object.assign({},obj1,obj2,obj3)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }  this is what we want 


// const obj4={...obj1,...obj2,...obj3}
// It is perfect spread method 

// console.log(obj4);  



//object is database form
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));                   //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));                 //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));   //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLogged'));//false


//destructuring of the object
const course={
    courseName:"JavaScript",
    price:999,
    coursesinstructor:"hitesh chaudhary"
}


// console.log(course.coursesinstructor);    //but it is lengthy way

const{coursesinstructor:inst}=course
// console.log(inst);



//api in objact format
//it is in json file always 
/* 
{
"name":"hitesh",
"course":"javascript",
"price":"free"
}
*/



//api in array format
/*
[
    {},
    {},
    {}
]
*/


//api can be taken from one of website:---randomuser me api
//api can be understand at:---------------json formatter
