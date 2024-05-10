const input = require("readline-sync");

let n = input.questionInt("enter the number");

 let sum = 0;
 let i = 1;

 while (i<=n)
{
     sum = sum + 1/i;
     i++;

    }console.log(sum);
 