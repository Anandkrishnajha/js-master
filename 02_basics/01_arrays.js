const myArr=[0,1,2,3,4,5]
// console.log(myArr);         //---------[ 0, 1, 2, 3, 4, 5 ]


const myIdols=["Dhoni","Kohli","Rohit"]
// console.log(myIdols);      //-------[ 'Dhoni', 'Kohli', 'Rohit' ]


const myArr2=new Array(1,2,3,4)
// console.log(myArr2);         //-----------[ 1, 2, 3, 4 ]


//#Array Methods
myArr.push(6)      //-----It will add the value 6 in array
myArr.pop()         //------It will remove the last index value from the array

myArr.unshift(9)            ///-------It will add the given value at index 0
myArr.shift()           //-------It will remove the value from 0th index


// console.log(myArr.includes(9));         //------If value dosen't exist then false else true will be the output
// console.log(myArr.indexOf(9));          //------If value dosen't exist then index will be -1 else the index will be n-1


const newArr=myArr.join()           //-----It converts the array into string type format

// console.log(myArr);     //----[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);    //----0,1,2,3,4,5




//#slice and splice
console.log("Before Slice: ",myArr);            //-----[ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3)
console.log("After slice: ",myn1);              //-----[ 1, 2 ]
console.log("Check Og array: ",myArr);          //-----[ 0, 1, 2, 3, 4, 5 ]
/*# so slice makes the copy of original array and applay it functionality
it will take the 1 index value till 3-1 index value
*/


console.log("Before Splice: ",myArr);           //-----[ 0, 1, 2, 3, 4, 5 ]
const myn2=myArr.splice(1,3)
console.log("After slice: ",myn2);              //-----[ 1, 2, 3 ]
console.log("Check Og array: ",myArr);          //-----[ 0, 4, 5 ]
/*# sao splice make changes in same array and apply its functionality
it will take the index value 1 till index value 3 
and when we will check for old array it will show only the remaining value */