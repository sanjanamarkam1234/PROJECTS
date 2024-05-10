const input = require("readline-sync");
let a = input.questionInt("enter the valuse");
let b = input.questionInt("enter the valuse");
{
    c=a;
    a=b;
    b=c;
}
console.log(a);
console.log(b);
