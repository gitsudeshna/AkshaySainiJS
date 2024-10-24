var x = 5;

a();
b();
console.log(x);

function a() {
  var x = 50;
  console.log(x);
}
function b() {
  var x = 500;
  console.log(x);
}

//output:
// 50
// 500
// 5
