const input = require("readline-sync");
let n = input.questionInt("enter the number ;- ");
let array = [];
let  i = 0;
while (i<=n) 
{
    array [i] = input.questionInt("number ;- ");
    i++;
}console.log(array);