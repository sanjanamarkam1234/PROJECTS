/*Write a program to create an array of natural numbers till 20 and print it.*/

const input = require("readline-sync");
let n = 10; 

let b = [];
let i = 1;
while (i <= n) 
{
    b[i-1] = i;
    i++;
}

console.log("Array b:", b);