// let a=10
// const b=20
// var c=30

if(true){
    let a=10
    const b=20
    var c=30
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="Anand"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);           out of scope
    two()
}
// one()



if(true){
    const username="anand"
    if (username==="anand"){
        const title=" katyayana"
        // console.log(username+title);
        
    }
    // console.log(title);-----error due to out of scope
    
}
// console.log(username);---error due to out of scope



//++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++

// console.log(addOne(5));  // we can get answer even abouve the fuction because it is decalred
// function addOne(num){
//     return num+1
// }
// console.log(addOne(5));

// console.log(addTwo(5));   //here it will give error because function is wrapped inside a variable 
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5));