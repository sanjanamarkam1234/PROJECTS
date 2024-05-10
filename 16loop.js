const input = require("readline-sync");
let n = input.questionInt("enter the number;-");
let i = 0;
while (i<n)
{
    str = "";
    j = 0;
    while (j<n) 
    {
        str+= "*";
        j++;
    }
    console.log(str);
    i++;
}