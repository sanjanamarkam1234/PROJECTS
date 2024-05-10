/*2d Array*/
const input = require("readline-sync");
let n = input.questionInt("enter the number");
let a = []; b = [];
let c = [];
let i = 0;
while (i<n) 
{
    a[i] = input.questionInt("enter the num");
    i++;
}
console.log(a);
j = 0;
while (j<n) 
{
    b[j] = input.questionInt("enter the number");
    j++;
}
console.log(b);

// for (let k = 0; k < n; k++) {
//     c[k] = a[k] + b[k];
// }
// console.log(c);


