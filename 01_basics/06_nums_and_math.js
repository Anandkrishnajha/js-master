const score=400
// console.log(score);

const balance=new Number(400)
// console.log(balance);

// console.log(balance.toString());//this part will consider the number as string

// console.log(balance.toString().length);

// console.log(balance.toFixed(3));


const otherNumber=123.8966
// console.log(otherNumber.toPrecision(2));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(100));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.random()*10);


const min=10
const max=20
// console.log(Math.floor(Math.random() * (max - min + 1)) )//It will insure the number will be in a certain range
console.log(Math.floor(Math.random() * (max - min + 1))+min )//this will insure that a number hav a minimum value