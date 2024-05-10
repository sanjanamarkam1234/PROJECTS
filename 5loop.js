/*const input = require("readline-sync");
let n = input.questionInt("enter the number ");
let sum = 0;
let i = 1;
while (i<n )
 {
    if (i%3==0) 
    {
       sum = (sum +1)*i
       i=i+1;
    }
    
}console.log(sum);*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
let sum = 0;
let i = 1;
while (i < n) {
    if (i % 3 == 0) {
        sum = sum + i;
    }
    i = i + 1;
}
console.log(sum);