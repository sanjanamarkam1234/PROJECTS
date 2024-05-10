/*Write a program to create a pyramid of numbers consisting of a given number of lines. 
For example, if the given number is 5, then we should see the following:*/

const input = require("readline-sync");
let n = input.questionInt("enter the number");
let i = 1;
while (i<=n) 
{
    j=1; 
    str="";
    while (j<=i) 
    {
        str=str+j;
        j++;
    }
    console.log(str);
    i++;
    
}