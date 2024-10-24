"use strict";

//1) this in global space
// this keyword in global space will always have the value of global object.
console.log("this===>>>", this); //global object
// browser - window, node js - global

//2) this inside a function
function test() {
  console.log("function console", this);
}
test();
// in this keyword inside the function then the value depends upon the strict and non strict mode.

//3) for strict mode - undefined
//4) for non strict mode - window (this substitution)
// why its behaving differently in strict and non strict mode is bcz of this substitution.
//if the value of this is undefined or null then "this" keyword will be replaced with global object only in non strict mode.

//5) this in strict mode - (this substitution) - undefined

//6) this value depends on how the function is called (window)

// in strict mode
//----------------
test(); // undefined in strict mode
// window.test(); //window
// when we call it without any reference of an object then it becomes undefined. and if its window.functionName() value will be window object.

// non strict mode (this substitution will happen)
console.log("non strict mode");
test(); // window object
window.test(); // window object

//7) this inside a object's method

const obj = {
  a: 10,
  x: function () {
    console.log("inside object", this.a);
  },
};
obj.x();

const obj2 = {
  a: 20,
};

// the value of this inside a method is object inside the object.

//8) call apply bind methods (sharing methods)

const student = {
  name: "sudeshna",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "sunanda",
};

student.printName.call(student2);

// 3 imp function of this.
// diff between call apply and bind .

//9) this inside arrow function
// Iarrow function dont have their own "this".It retains the this value of the enclosing lexical context. They take the value of their lexical environment where they are enclosed.
const objIs = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
objIs.x(); //{a: 10, x: f}

//10) this inside nested arrow function

const objIs2 = {
  a: 10,
  x: function () {
    //enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y()
  },
};
objIs2.x();

//11) this inside DOM
// the value is reference to html Element.

//this inside class, constructor and 
//==========================================================
