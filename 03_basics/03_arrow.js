const user={
    username:"anand",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)   // it will provide the context of the object here 
    }
}
//++++++this speciality of this is it can provide requirement according to the context
// user.welcomeMessage()
// user.username="aalishan"      //we are changeing the context of username
// user.welcomeMessage()                //now username will take name of aalishan

// console.log(this);   // it will give empty paranthesis



// function chai(){
//     let username="anand"
//     console.log(this.username);    //here this is inside a function as it is not under any class or object it will be considered as global variable hence undefined
     
// }
// chai()


const chai=()=>{
    let username="anand"
    console.log(this)
    /*In arrow functions, this is lexically bound, meaning it takes the value of this from the 
    surrounding context (where the function was defined), rather than the value of this from the
     context where the function is executed. */
}

// chai()




// const addTwo=(num1,num2)=>{
//     return num1+num2
// }



// const addTwo=(num1,num2)=>num1+num2

// const addTwo=(num1,num2)=>(num1+num2)

const addTwo=(num1,num2)=>({username:"anand"})     //{ username: 'anand' }

console.log(addTwo(3,4));
