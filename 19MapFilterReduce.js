//Map - Map() used to transform an array

const arr = [5, 1, 3, 2, 6];

const output = arr.map((item) => {
  console.log(item);
});

// Method - 1

function double(x) {
  console.log("xxx", x);
  return x * 2;
}
function triple(x) {
  return x * 3;
}

// Method - 2

const result = arr.map(triple);
console.log("double", result);

// Method - 3

const multipleByTen = arr.map(function (x) {
  return x * 10;
});
console.log("multipleByTen", multipleByTen);

// Method - 4

const multipleByFive = arr.map((x) => {
  return x * 5;
});
console.log("multipleByFive", multipleByFive);

// Method - 5
const multipleByEight = arr.map((x) => x * 8);
console.log("multipleByEight", multipleByEight);

//===============================FILTER======================================

// filter is used to filter the elements in an array.

// cases to use filter
// 1) Wvwn/Odd value in an Array.
// 2) Greater than 4 in an Array.
// 3) Element which is divisible by 3 in side the Array.

//filter all odd values
const myFilterArray = [5, 1, 3, 2, 6];

const filterOddResult = myFilterArray.filter((x) => x % 2);
console.log("filterOddResult", filterOddResult);

const filterEvenResult = myFilterArray.filter((x) => x % 2 === 0);
console.log("filterEvenResult", filterEvenResult);

const greaterThanFourResult = myFilterArray.filter((x) => x > 4);
console.log("greaterThanFourResult", greaterThanFourResult);

//=============================REDUCE=============================
// Reduce take all element of the array, and comeout with the single single value out of them

// Cases to use reduce
// 1) Largest no in an Array.
// 2) Sum of all the elements in an Array.

//Sum of the element in an array using iteration.
const arrayIs = [4, 3, 7, 1, 9, 4, 5, 8, 6];
const FindSum = function (arr) {
  let acc = 0;
  for (i = 0; i < arr.length; i++) {
    acc = acc + arr[i];
  }
  return acc;
};

console.log(FindSum(arrayIs));

const sumIs = function (arr) {
  let acc = 0;
  for (i = 0; i < arr.length; i++) {
    acc = acc + arr[i];
  }
  return acc;
};
const resultIs = sumIs(arrayIs);
console.log("resultIs", resultIs);

// Sum of the element in an array using reduce.
const reduceOutput = arrayIs.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log("reduceOutput", reduceOutput);

// 2) Max no using Iteration

const arrayForMax = [65, 87, 12, 45, 90, 43];
const findMax = function (arr) {
  let temp = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
    }
  }
  return temp;
};
const maxOutput = findMax(arrayForMax);
console.log("maxOutput", maxOutput);
// 2) Max no using reduce
const maxReduce = arrayForMax.reduce(function (temp, curr) {
  if (curr > temp) {
    temp = curr;
  }
  return temp;
}, arrayForMax[0]);
console.log("maxReduce=>", maxReduce);

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 26 },
  { firstName: "sudeshna", lastName: "das", age: 24 },
  { firstName: "sunanda", lastName: "das", age: 23 },
  { firstName: "sudhansu", lastName: "sahoo", age: 25 },
  { firstName: "asha", lastName: "das", age: 48 },
  { firstName: "sukumar", lastName: "das", age: 58 },
];

// find out the full name of all the users

const fullName = users.map((item) => `${item.firstName}${item.lastName}`);
console.log("fullName", fullName);
const fullNameIs = users.map((item) => item.firstName + " " + item.lastName);
console.log("fullNameIs", fullNameIs);

//Find out all the unique age and count the age .
// eg: {26 : 2, 75 : 1, 50 : 1}

// const outputIs = users.reduce(
//   function (accumulator, item) {
//     const ageStore = accumulator.ageStore || [];
//     let countIs = accumulator.countIs || 0;
//     // console.log('====',item.age);
//     if (!ageStore.includes(item.age)) {
//       ageStore.push(item.age);
//       countIs++;
//     }
//     console.log("age", ageStore, ":", countIs);
//   },
//   { ageStore: [], countIs: 0 }
// );

const outputIs = users.reduce(
  function (accumulator, item) {
    const ageStore = accumulator.ageStore || [];
    let countIs = accumulator.countIs || 0;

    if (!ageStore.includes(item.age)) {
      ageStore.push(item.age);
      countIs++;
    }

    console.log("age", ageStore, ":", countIs);

    return {
      ageStore,
      countIs,
    };
  },
  { ageStore: [], countIs: 0 }
);

const akshayOutput = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    
  } else {
    acc[curr.age] = 1;
  }
}, {});
