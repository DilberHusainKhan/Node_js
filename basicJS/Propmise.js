const data = fetch("https://dummyjson.com/products");
console.log(data);
data.then(data=>{
    console.log(data.headers);
})

const cart = ["Shoes, pants,shorts"];
const promise =CreateOrder(cart);
// for sucessful promise
promise.then(function(orderId){
    console.log(orderId);
})
// for failure of promise
.catch(function(err){
    console.log(err.message);
})

function CreateOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Validation Failed")
            // console.log("Validation Failed");
            reject(err);
        }
        const orderId = 12345;
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000)
        }
    })
    return pr;
}
function validateCart(cart){
    return true;
}