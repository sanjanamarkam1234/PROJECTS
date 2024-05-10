/*Write a program to take two integers M, and N and print the product of numbers in the range  M to N.*/

const input = require("readline-sync");
let m = input.questionInt("enter the number");
let n = input.questionInt("enter the number");
let p = 1;
while (m<=n) 
{
    p=p*m;
    m=m+1;
    
}console.log(p);







    
