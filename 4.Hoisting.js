
console.log(x);
console.log(getName);
var x = 7;

function getName() {
  console.log("Namaste Javascript");
}
getName();


// Hoisting in JS

function greet(){
  console.log("Hello");
  return "hii"
}

const result = greet();
console.log("result", result);