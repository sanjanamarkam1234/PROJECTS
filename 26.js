const input = require("readline-sync");

let  n = input.questionInt("enter the number");

let g = n
let t = 0;
while (g>0) 
{
     t++;
     g = Math.floor(g/10);
    
}console.log(t);