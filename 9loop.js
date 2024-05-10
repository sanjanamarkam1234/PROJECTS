/*You need to Write a program that takes a whole number from the user and shows the number in reverse order.
For example, if the user enters the number 123, the program should display 321 as the result.*/

// const input = require("readline-sync");
//  let n = input.questionInt("enter the number");

//  let sum = 0;

//   let R;
// while (n>0)
// {     
//   R = n % 10 ;
//   sum = sum * 10 + R;
//   n = Math.floor(n / 10);
    
// }console.log(sum);

9./*Write a program to take a number from the user and 
show how the factors of a given number can be obtained.
A factor is a number that can divide another number 
evenly without leaving a remainder.*/

const input = require("readline-sync");
let n = input.questionInt("enter the number");
let i = 1;
while (i<=n) 
{
  if (n%i==0) 
  {
    console.log(i);
    i++;
  }
  else
  {
    i++;
  }
  
}
