const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function (orderId) {
    console.log(promise);
    console.log("orderId", orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPay(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("No Matter What happens, i will definitely be called.");
  })



//producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPay(orderId) {
  return new Promise(function (resolve, rejected) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return false; //we can validate the cart over here
}

// =========================================================
//Summary
// =========================================================

// for creating a new promise we used new keyword with promise constructor to invoke it. inside the function there are 2 arguments/parameters resolve and reject. which is given by JS to us.With this we will have control over our code, wheather we want to resolve it, or reject it.& we cant call resolve twice. No other state than resolve and reject.

//Home Work
// Create similar kind of eg ecom, with 4 api
//createOrder, proceedToPayment, showOrderSummary, updateWallet