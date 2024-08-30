//for of loops
const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const arr2=[1,2,3,4,5]
for (const i of arr2) {
    // console.log(i);
    
}
//both are same num or i or any other variable



//it can also applied over the string
let greeting="Hey Anand "
for (const greet of greeting) {
    // console.log(greet);
    
}


//maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/ //if we write the same key and value then it will not bve printed 


for (const key of map) {
    // console.log(key);
    
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/


for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/