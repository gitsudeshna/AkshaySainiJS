// what happens when we run JS code?

// when we runs a js code it will create a execution context.

// execution context is created in 2 phases
// 1) memory creation phase
// 2) code execution phase

const n = 2;
function square(num) {
  var squareIs = num * num;
  return squareIs;
}
var first = square(4);
var second = square(n);

console.log("first", first);
console.log("second", second);

// this above code , what happening in execution context.

// phase-1(Memory Allocation/Creation)
// ------------------------
//for all the variable it will store the special value which is undefined, and
// for functions it will store the whole function inside this.

// phase-2(Code execution)
// -----------------------
//1 here the value for n is 2 so it will replace the value undefined for n in the memory creation.
// So now the value is 2 for n in memory creation.
//2 after line 1 in line 2 nothing is there to execute so it will move to the next variable "first".
// where its doing function invocation("functionName with paranthesis", function()).
//3) So whenever function invocation happens it will create a new execution context.with memory component and code component.
//4) SO inside the function parameter and variable are there so it will take those 2 in memory creataion as undefined value.
//5)then in code execution step square(n) means here n value is 2 will pass to the parameter num.
//6) (control go to another execution context and after finishing it came back to the place where its invoked.)
// (now the value replaced with undefine to 4 bcz its return the and ans is 4.)(and that execution context will be deleted which creted for this function invokation.)
//7) Now it will got to next line var second = square(4)// here we are passing argument 4 directly.
// So, as an another function invoked it will create a new execution context and will store the parameter num and variable ans in the memory location and the values will be undefined.
// 8)

// Memory                                             code
// =================                                 ====================
// n:undefined                                        new execution context created for first function invoked
// square:{                                           1)Memory Component   2)Code Component
// var squareIs = num * num;                          ==================   ================
//   return squareIs;                                 num:undefined=>2       num*num
// }                                                  ans:undefined=>4       return ans;
// first = undefined => 4
// second = undefined =>16                            new execution context created for second function invoked
//                                                    2)Memory component   2)code component
//                                                    num: undefined =>4     num*num
//                                                    ans: undefined =>16    return ans;

// return:->>
// return used to go back of the Program, to the place where this function was invoked.
//return the whole control back to the execution context where the function invoked.

// CALL STACK=> it maintains the order of execution of execution contexts.
// call stack is also called
// 1) Execution Context Stack
// 2) Program stack
// 3) Control Stack
// 4) Runtime stack
// 5) Machine Stack
