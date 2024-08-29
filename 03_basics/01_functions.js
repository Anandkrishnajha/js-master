function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}
// sayMyName()

function addition(number1,number2){
    console.log(number1+number2);
}
// addition()-------------NaN because we need to provide it a number
// addition(3,5)---------8
// addition(3,"5")-------35
// const result=addition(3,5)         //here it generates the solution 8
// console.log(result);        //it will showen as undefined


/*
function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result=addTwoNumbers(3,5)
console.log("Result: ",result); 
*/


/*
function loggin(username){
    return `${username} just logged in`
}
console.log(loggin("anand"));

*/




/*
function loggin(username){
    if(username === undefined){              //also we can use !username
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loggin());

*/

/*
function cart(num){
    return num
}
// cart(2)        //but this will return only one value what if we take multiple value 2,3,4,5 for such
*/



/*
function cart(...num){
    return num
}
console.log(cart(2,4,5,65,6));   
*/
 
// ===============================================================================================================================
//handleobject
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})



//handle new array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));





/*

*/
