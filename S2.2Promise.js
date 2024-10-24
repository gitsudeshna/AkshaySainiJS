// const cart = ["shoes", "pants", "kurta"];
// createOrder(carts, function (orderId) {
//   proceedToPayment(orderId);
// });

const API_URL = "https://api.github.com/users/akshaymarch7";

const promise = fetch(API_URL);
console.log(promise);

promise.then(function (data) {
  console.log(data);
});

//As soon as data inside the peomise it will call the function
// JS guarantees that the promise will call only once,
// eather the result is success or failure.

//Will have control over our code.
//there are 3 state (pending, fullfilled,rejected)
//Promise objects are immutable.

//=======================================================

// What is promise?
// Promise object is a place holder untill we received a value from a asynchronous operation.
// Its a container for the future value.
// Promise is an object representing the eventual completion or failure of the asynchronous operation.

//Promise Chaining

//============================================================================================SUMMARY=======================================================================================
// Before we were using callback function, which was cousing inversion of control. which means we are passing our function inside another function. It means we are losing control over our codes, we are giving that control to the another API.
//But with promise, which is an object represents the eventual completion or failure of an asynchronous operation.
//Here no need to pass a function inside another function, but what we do is to attach our function to the promise object, whenever the we got data inside the promise or whenever we got our result then automatically the callback function will be called by the promises.
//Promise give us guarantee and trust in our transaction, bcz we can resolve promise just once, bcz we have only 3 state of promises so it can be either pending or fulfilled or rejected. there is not other state.
//We can pass promise whereever we want to. about the mutability - its immutable we cant alter a promise if it is resolved. So promise comes with a lot of trust.
//Promise has a special object, which had 2 major properties, one is the promise state and another is promise reultwhich used to hold the data. Which eventually gets filled.
//To handle the call back hell we can use promise chainning,we can use then to attach a lot of callback handlers. 
//WHenever there is promise, innside that promise chain we might have to return that promise once again into the chain otherwise we might lose some data inside the chain.
//============================================================================================SUMMARY=======================================================================================
// Home Work
//1) What is promise?
//A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation.
// Promises provide a way to work with asynchronous code in a more organized and readable manner.

//3 state of promise:-
//Pending: The initial state of a promise. The asynchronous operation is still ongoing, and the promise is waiting for its completion.

// Fulfilled: The asynchronous operation completed successfully, and the promise now has a resulting value.

// Rejected: The asynchronous operation encountered an error, and the promise is rejected with a reason for the failure.

// 2) Why promises are important?

// Promises are important for several reasons:

// Readability: Promises provide a cleaner and more readable syntax compared to traditional callback-based asynchronous code. They allow you to structure code in a way that reflects the flow of the program.

// Chaining: Promises can be easily chained together, allowing you to execute asynchronous operations sequentially. This helps avoid the "callback hell" or "pyramid of doom" that can occur with nested callbacks.

// Error Handling: Promises have built-in error handling through the use of the .catch() method, making it easier to manage and handle errors in asynchronous code.

// Composition: Promises can be composed and combined using methods like Promise.all() and Promise.race(), providing powerful tools for managing multiple asynchronous operations.

// Async/Await: Promises serve as the foundation for the async/await syntax, which further simplifies asynchronous code and makes it look more synchronous, improving readability and maintainability.




