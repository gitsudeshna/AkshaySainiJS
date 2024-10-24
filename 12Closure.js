// CLOSURE:- Function along with its lexical environment bunded together is known as closure.

function x() {
  var a = 100;
  function y() {
    console.log("a", a);   //100
  }
  return y;
}
const z = x();
console.log("z", z);
z();

//Here after assigning the x() to z x() gone from the call stack but z value is:
// y() {
//   console.log("a", a);
// }

//SO here inside y function a is pointing to the parent lexical environment, so here not only y function return
// it along with the lexical environment return so here it will print the a as 100 which is inside x().

function myFunc() {
  var a = 100;
  function y() {
    console.log("a", a);     //7
  }
  a = 7;
  return y;
}
const k = myFunc();
console.log("k", k);   
k();

//in this example we got to know that its not referencing the value its referencing the memory location of x.
