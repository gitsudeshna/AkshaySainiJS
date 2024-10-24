var a = 100;
{
    var a = 10;   //shadowing the variable a
    var b = 20;
    var c = 30;
    console.log(a);  //10
    console.log(b);
    console.log(c);
}
console.log(a);  //10


// if we will declare variable using var it will allocate memory in the global scope , then after also if we will reassign a new value inside block it will change the value in global scope. So now if we will pro=int a outside of the scope also it will print the last assigned value to it .

//but incase of let and const. if we will declare any variable it will store in a separate memory space. and if we will shadowing that variable inside a scope then it will allocate memory in that particular space only. after executing that scope the value of that variable will be refer to the global scoped value.  