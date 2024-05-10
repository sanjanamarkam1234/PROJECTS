const input = require("readline-sync");
let n  =  input.questionInt("enter the number");
let a = [];
let i = 0;
let j = 0;
let str="<";
while (i<n) 
{ 
    a[i] = input.questionInt("enter the value;-");
    i++;
}
i=0;
while(i<n)
{
    console.log(str.repeat(a[i]));
    i++;
}
 
// const input = require("readline-sync");
// let n = input.questionInt("enter the number");
// let a =[];
// let i = 0;
// let j =0;
// let str="<";
// while (i<n) 
// {
//     a[i] = input.questionInt("enter the number;-");
//     i++;
// }
// j=0;
// while (j<a[i]) 
// {
//     console.log("/n");
//     j++;
// }
// console.log("<");
// i++;