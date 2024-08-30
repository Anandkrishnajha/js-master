const myNums=[1,2,3]


// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc : ${acc}  and currval : ${currval}`);
    
//     return acc+currval
// })
//op--acc : 1  and currval : 2
   // acc : 3  and currval : 3
// 6




const myTotal=myNums.reduce(function (acc,currval){
    // console.log(`acc : ${acc}  and currval : ${currval}`);
    
    // return acc+currval
},0)
// console.log(myTotal);

// output
// acc : 0  and currval : 1
// acc : 1  and currval : 2
// acc : 3  and currval : 3
// 6



const newTotal=myNums.reduce( (acc,currval)=> acc+currval,0)
// console.log(newTotal);    //6


const cart=[
    {
        itemName:"Apple",
        price:299
    },
    {
        itemName:"Bread",
        price:29
    },
    {
        itemName:"Caswe",
        price:1299
    },{
        itemName:"vegetable",
        price:2999
    }
]


const addCart=cart.reduce( (acc,item)=>acc+item.price,0)
console.log(addCart);
