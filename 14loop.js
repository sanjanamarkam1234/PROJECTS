const input = require("readline-sync");
let n = input.questionInt("enter the number");
let i = 1;
for (let i = 1; i <= n; i++)
{
    let str = "";
    for (let j = 1; j <= i; j++) 
    {
        str += "* ";
    }
    console.log(str);
}