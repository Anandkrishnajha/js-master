let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); //-----8/28/2024
// console.log(myDate.toLocaleString()); //--------8/28/2024, 8:53:06 AM 
// console.log(myDate.toTimeString()); //-----------08:54:03 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); //------------Wed, 28 Aug 2024 08:54:47 GMT


// let myCreatedDate=new Date(2024,8,28)
// console.log(myCreatedDate.toDateString());  //Sat Sep 28 2024    0-jan,1-fab.....

let myCreatedDate2=new Date(2024,8,28,5,3)
let myCreatedDate=new Date("2024-01-31")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long",
 })
)



