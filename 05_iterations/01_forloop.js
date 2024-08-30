//for loops

for (let i = 0; i < 10; i++) {
    const element = i+1;
    // console.log(element);
    
}



for (let i = 1; i <=10; i++) {
    // console.log(`Outer Loope value ${i}`);
    for (let j = 1; j <=5; j++) {
        // console.log(`Inner loop ${j} inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
        
    }
    
}




let myHero=["Ironman","Thor","Captain America"]
for (let index = 0; index < myHero.length; index++) {
    const element = myHero[index];
    // console.log(element);
    
}




// +++++++++++++ continue and break


//break : it breaks the statement where condition if fullfilled
for (let i = 1; i <=10; i++) {
    if(i==5){
        // console.log(`"detected ${i}"`);
        break
    }
    // console.log(`value of i is ${i}`);
    
}




//continue: it will continue the flow
for (let i = 1; i <=10; i++) {
    if(i==5){
        console.log(`"detected ${i}"`);
        continue
    }
    console.log(`value of i is ${i}`);
    
}
