const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography,networ
    setTimeout(function(){
        console.log('Async task is conmplete');
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("Promiose Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
} ).then(function(){
    console.log("Async 2 resolved");
    
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Anand",contact:9087612345})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"trail",password:1234})
        }else{
            reject(error)
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("Problem is resolved or rejected")
)




const promiseeFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"trail-2",password:1234})
        }else{
            reject(error)
        }
        
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promiseeFive
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()



//++++++++++++++++++++++++++FETCH+++++++++++++++++++++++++++++++++
fetch('https://api.github.com/users/Anandkrishnajha')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})