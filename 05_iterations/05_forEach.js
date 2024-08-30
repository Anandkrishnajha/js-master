const coding=["js","ruby","java","python","cpp"]
//forEach will iterate each value of the array we can define just any varivable like val
coding.forEach( function (val){
    // console.log(val);
    
})

coding.forEach( (item)=>{
    // console.log(item); 
    
})


//makaiing a functgion and then use it in forEach
function printMe(item){
    console.log(item);
    
}
// coding.forEach(printMe)



//for print all item its index and arr we can use it like this
coding.forEach((item,inddex,arr)=>{
    // console.log(item,inddex,arr);
}
)


const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"JPython",
        languageFileName:"py"
    }
]

myCoding.forEach( (item)=>{
    // console.log(item);
    // console.log(item.languageFileName);
    // console.log(item.languageName);
    
})