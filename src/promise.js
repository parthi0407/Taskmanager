const add = (x,y)=>{
    return new Promise(function(resolve,reject){
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("Enter a valid number");
        }
        setTimeout(function(){
            resolve(x+y);
        },4000)
    })
}
const sub = (x,y)=>{
    return new Promise(function(resolve,reject){
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("Enter a valid number");
        }
        setTimeout(()=>{
            resolve(x-y);
        },4000)
    })
}

const mul = (x,y)=>{
    return new Promise(function(resolve,reject){
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("Enter a valid number");
        }
        setTimeout(()=>{
            resolve(x*y);
        },4000)
    })
}

const div = (x,y)=>{
    return new Promise(function(resolve,reject){
        if(typeof(x) != 'number' || typeof(y) != 'number'){
            reject("Enter a valid number");
        }
        setTimeout(()=>{
            resolve(x/y);
        },4000)
    })
}

add(3,5).then(function(result){
    console.log("Add:",result);
    return sub(result,'kjihihi');
}).then(function(subresult){
    console.log("Sub:",subresult);
    return mul(subresult,5);
}).then(function(mulresult){
    console.log("Mul:",mulresult);
    return div(mulresult,2);
}).then(function(divresult){
    console.log("Div:",divresult);
}).catch(function(err){
    console.log("Error:",err);
})
