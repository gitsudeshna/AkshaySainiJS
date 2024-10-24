//If API call
// const p1 = fetch("");

//Normal Promise
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 1000);
  //   setTimeout(() => reject("p2 fails"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p3 success"), 1000);
  setTimeout(() => reject("p3 fails"), 1000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("error", error);
  });

// In all the success result output will be=
// (3) ['p1 success', 'p2 success', 'p3 success']

//If any failure then result will be
// after 1 sec p2 fails so immidiately it will throw error as p2 fails, it wont waits for other promises to be resolved.

// if p3 fails after 2 sec but p2 is success after 1 sec then also it will waits for other APIs to setteled. thats what promise.all() is.

//=====================Promise.allSetteled===================

const x1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("x1 success"), 3000);
});
const x2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("x2 success"), 1000);
});
const x3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("x3 success"), 2000);
  //   setTimeout(() => reject("x3 fails"), 2000);
});

Promise.allSettled([x1, x2, x3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

//It will wait for all the promise to setteled, wheather its success or failure. result will be an array.

//in case of success
// (3) [{…}, {…}, {…}]
// 0:{status: 'fulfilled', value: 'x1 success'}
// 1:{status: 'fulfilled', value: 'x2 success'}
// 2:{status: 'fulfilled', reason: 'x3 success'}

//In case of failure:=
// (3) [{…}, {…}, {…}]
// 0:{status: 'fulfilled', value: 'x1 success'}
// 1:{status: 'fulfilled', value: 'x2 success'}
// 2:{status: 'rejected', value: 'x3 fails'}

// It will only return the result once all the promise setteled.

//====================Promise.race()=========================

const y1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("y1 success"), 3000);
});
const y2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("y2 success"), 2000);
});
const y3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("y3 success"), 1000);
});

Promise.race([y1, y2, y3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });


  //it will give only the 1st setteled API response. wheather its success or fails
  // here the fastest setteled API is y3, so it will result y3 API only. it wont wait for others. 