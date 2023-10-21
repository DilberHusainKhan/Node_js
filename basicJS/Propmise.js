const data = fetch("https://dummyjson.com/products");
console.log(data);
data.then(data=>{
    console.log(data.headers);
})

const cart = ["Shoes, pants,shorts"];
const promise =CreateOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
})


function CreateOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            console.log("Validation Failed");
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