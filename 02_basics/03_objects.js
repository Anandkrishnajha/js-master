//Singleton

//object literals
const mySym=Symbol("key1")

const JsUser={
    name:"Anand",
    "full name":"Anan kumar jha",
    [mySym]: "mykey1",  // this s symbol key as it if defined over the scope
    age:18, 
    location:"Bengalure",
    email:"anand@google.com",
    isLoggedeIn:false,
    lastLoginDays:["monday","saturday"]

}

// console.log(JsUser.email);  //one way of printing it
// console.log(JsUser["email"]); //another way of printing the same thing 
// console.log(JsUser["full name"]);


//in below condition as the key value pair is like [mySym]:"mykey1"  therefor we can get the output in only one way
// console.log(JsUser[mySym]);

JsUser.email="akj@google.com"  //here we change the email value
// Object.freeze(JsUser) //here the email value is freezed if we don't want someone randomly change the value
JsUser.email="anandthegreat@dd.com"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo= function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

 
