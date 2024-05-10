const input = require("readline-sync");
let a = input.questionInt("enter the variable:");
let b = input .questionInt("enter the varible:");
{
      a=a+b;
      b=a-b;
      a=a-b;
}
console.log(a);
console.log(b);
