const input = require("readline-sync");

 let n = input.questionInt("enter the number");

  let sum = 0;
  let R;
 while (n>0)
{   
  R = n % 10 ;

  sum = sum * 10 + R;

  n = Math.floor(n / 10);

  console.log(sum);
  
}