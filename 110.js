/*const input = require("readline-sync");
let n = input.questionInt("Enter the number of elements: ");
let i = 0;
let a = [];
let sum = 0;

while (i < n) 
{
   a[i] = input.questionInt("Enter the number: ");
   i++;
}

console.log("Array elements in reverse order:");
i = n - 1;
while (i >= 0) 
{
   console.log(a[i]);
   i--;
}

let lastThreeSum = 0;
for (let j = Math.max(0, n - 3); j < n; j++) {
    lastThreeSum += a[j];
}

console.log("Sum of the last three elements:", lastThreeSum);*/

const input = require("readline-sync");
let n = input.questionInt("Enter the number of elements: ");
let i = 0;
let a = [];
let sum = 0;

while (i < n) 
{
   a[i] = input.questionInt("Enter the number: ");
   i++;
}

console.log("enter the number:");
i = n - 1;
while (i >= 0) 
{
   console.log(a[i]);
   i--;
}
let k = 0;
for (let j = Math.max(0, n - 3); j < n; j++) {
    k += a[j];
}

console.log("Sum of the k elements:", k);