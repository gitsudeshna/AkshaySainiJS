// 1) Whats a callback function in js?

//i) Functions are first class citizens in javascript.
//ii) that means we can take a function and pass it in to another function .
// the function which we pass into another function known as callBack Function.
//iii) it is so powerful in js, it gives us access to the whole asynchronous world in a
// synchronous single thredaded language.
//iv) Due to call back function we can do async thing in javascript.

setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

//first parameter to setTimeout is known as callback function.
//it means it is passed into setTimeout and it is called sometime else in your program.
//

// 2) Javascript is a synchronous and single threaded language.Javascript.
// 3) Blocking the main  thread.
// 4) Power of callbacks?
// 5) Deep about event listener.
// 6) Closures Demo with Event Listeners
// 7) Scope Demo with event Listeners.
// 8) Garbage cllection and removeEventListeners.
