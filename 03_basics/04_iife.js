//Immediately invoked Function Expression (IIFE)
/* Sometime we have issue with global scope pollution for removing thtat we use iife*/

function chai(){
    console.log("DB Connected");
    
}
// chai()   //here we go thorugh complete process like calling the function again we can reduce this process with help of iffe


(function chai2(){
    //named iife
    console.log("DB Connected");
})();              // here we wrap the complete funciton in () and call the () 


(()=>{
    console.log("DB Connected two");
    
})();    //so without any name we can also use excecute using iife


((name)=>{
    console.log(`"DB Connected two ${name}"`);
    
})("Anand"); 