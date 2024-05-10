/*Write a program to take a number from the user and obtain the sum of the digits of a given number.*/
const input = require("readline-sync");
let n  = input.questionInt("enter the number: ")
let i = 0, k;
let sum = 0;
while(i<n)
{
    k= n%10;
    n = Math.floor(n/10)
    sum = sum+k;
    i++;
}
console.log(sum);


