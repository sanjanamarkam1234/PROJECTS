/*palindrom*/
 const input = require("readline-sync");
let n = input.questionInt("enter the number of palindrom;-");
let i = 1;
let p = n;
let r =0;
while(p!=0)
{
    s = p % 10;
    r = r *10 + s;
    p = Math.floor(p/10);   
}
if (r==n) 
{
    console.log("yes");
}else
{
console.log("no");
}
