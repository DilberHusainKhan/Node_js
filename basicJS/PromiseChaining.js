const cart = ["shoes","pants","T-shirt"];

createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })



function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!vaildateCart(cart)){
            const err = new Error("cart Validation Failed");
            reject(err);
        }
        const orderId = 90001;
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    })
    return pr;
}
function vaildateCart(cart){
    return true;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Sucessfull");
    })
}