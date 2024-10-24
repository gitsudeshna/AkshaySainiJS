// async is a keyword used before the function. Used to create asynchronous function.

const p = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value");
});

// Always return a promise.

async function getData() {
  return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));

//============ async await==============

// async and await combo is used to handle promises.

//handle promise before async await.

const x = new Promise((resolve, reject) => {
  resolve("Promise Resolved Value!!");
});

function getTheData() {
  p.then((res) => {
    console.log(res);
  });
}
getTheData();

//=============
//handle using async await

// await can only be used inside an async function.
const z = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise Resolved using await after 5 sec"), 5000);
});
const z1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise Resolved using await after 10 sec"), 10000);
});
async function handlePromise() {
  const val = await z;
  console.log("Lets see when its printing 10");
  console.log("value when printing", val);
  const val2 = await z1;
  console.log("Lets see when its printing 5");
  console.log("value when printing", val2);
}

handlePromise();

//Using async await and the older way.

const w = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise Resolved in older way"), 10000);
});

async function olderWay() {
  //js engine will not wait for promise to be resolved
  w.then((res) => console.log(res));
  console.log("namaste Javascript older way");
}

olderWay();

//Real time example

const API_URL = "https://api.github.com/users/akshaymarch7";

async function handleFetchPromise() {
  const data = await fetch(API_URL);

  console.log("data", data);

  const jsonValue = await data.json();

  console.log("jsonValue", jsonValue);

  // fetch() => Response.json() => jsonValue
  // fetch function is a promise, when it will resolve it gives us response, this response object has a body which is readable stream. If we want to convert this readable stream into JSON then we have to do response.JSON. this JSON is again a promise, when it will resolve it will give result.
  // fetch().then(res=> res.json()).then(res=> console.log(res))
  console.log();
}
handleFetchPromise();
