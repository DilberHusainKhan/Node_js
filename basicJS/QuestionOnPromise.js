const cart  = ["shoes","Pants","T-shirt"];

createOrder(cart)
.then(function(orderId){
    console.log("Order Id is ",orderId);
    return orderId;
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(paymentInfo){
    console.log("Payment Status ",paymentInfo);
   return showOrderSummery(paymentInfo);
})
.then(function(payment){
    console.log("Amount debit ",payment);
    return walletUpdate(payment)
})
.then(function(payment){
    console.log("Available Balance ", payment);
})


function createOrder(cart){
    const pr=  new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err  = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "98003";
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

function proceedToPayment(orderId) {
    return new Promise(function(resolve,reject){
        if(!validateOrder(orderId)){
            reject(new Error("payment Failed"))
        }
        resolve("Payment sucessfull");
    })
}

function validateOrder(orderId){
    if(orderId == 0){
        return false;
    }
    return true;
}

function showOrderSummery(paymentInfo){
    return new Promise(function(resolve,reject){
        resolve(100);
    })
}
function walletUpdate(payment){
    return new Promise(function(resolve,reject){
        let balance =1000;
        balance = balance-payment
        resolve(balance);
    })
}