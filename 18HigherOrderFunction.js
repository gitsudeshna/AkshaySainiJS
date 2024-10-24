//A function which takes another function as an argument,
// Or returns a function from it is know as Higher order function.

// eg

function x() {
  console.log("Hiii guys");
}
function y(x) {
  x();
}
// Here y is the higher order function, and x is the call back function.

// Example 1
//We have radius of 4 circles. Calculate the area of those circles.

const radius = [3, 1, 2, 4];

const CalculateArea = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(CalculateArea(radius));

// Example 2
// Circumference of Circle

const CalculateCircumference = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
console.log(CalculateCircumference(radius));

// Example 3
// Diameter of circle

const CalculateDiameter = function (radius) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
console.log(CalculateDiameter(radius));

// ==================

const radius1 = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const Circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const Diameter = function (radius) {
  return 2 * radius;
};

const Calculate = function (radius, logic) {
  const output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(Calculate(radius1, area));
console.log(Calculate(radius, Circumference));
console.log(Calculate(radius, Diameter));

console.log(radius.map(area));


Array.prototype.Calculate2 = function (logic) {
    const output = [];
    for (i = 0; i < this.length; i++) {
      output.push(logic(this[i]));
    }
    return output;
  };

console.log('--',radius.Calculate2(area));