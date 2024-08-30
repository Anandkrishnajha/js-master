// for of loop was unable to iterate over objects so we need for in 

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
//   console.log(`${key} is shortcut for ${myObject[key]}`)
}



// it can also work on array
const programming=["js","cpp","rb","py"]
for (const key in programming) {
    console.log(programming[key]);
    
}



//it can not work on map because map is not iterative