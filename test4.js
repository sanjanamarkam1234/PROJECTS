/*Write a JavaScript program that takes a positive integer n as input. 
The program should print the sum of the squares of 
the first n natural numbers using a while loop.(10 marks)*/
const input = require("readline-sync");
let n = input.questionInt("enter the number");
let i = 1;
let sum = 0;
while (i<=n) 
{
    sum = sum + i **2;
    i++; 
}
console.log(sum);
