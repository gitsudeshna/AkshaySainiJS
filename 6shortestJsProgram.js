// if there is no code also after running the code GEC(global execution context) will be created. And also set up the memory space.
// It also create window object having functions and methods which is created by JS engine.These are given by JS engine.

//at global level this points to the global object.

//window is a global object which is created along with GEC.

//When ever any JS code runs GEC, global object & a this keyword created.

//this global object in case of browser its known as window.

//this global object in case of node its known as global.

//In global level
// this === window

// anything not inside the functions are known as global object.

var a = 10;
function b() {
  var x = 10;
}
// in console these global variables and functions will attached with the window object.

//to accss that
console.log(window.a); // 10

// if we will not put anything before the variable also it will refer to the global scope.

// summary = window.a , this.a , a (all will refer to the global space)
console.log(window.a);
console.log(this.a);
console.log(a);
