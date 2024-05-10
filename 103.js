/*write a JavaScript program that takes a positive integer as input and checks if it is a perfect number.
A perfect number is a positive integer where the sum of its factors (excluding itself) equals the number itself.
Factors are whole numbers that you can multiply together to get the given number. For example, 
6 is a perfect number because the sum of its factors (1, 2, and 3) equals 6.*/

const input = require("readline-sync");
let n = input.questionInt("enter the number of veluse:-");
let i = 1;
let sum = 0;
while (i<n) 
{
    if(n % i == 0)
    {
        sum = sum + i;
    }
    i++;
    
    
}
if (sum === n)
    {
        console.log("perfect number");
    }
    else
    {
    console.log("not perfect number ");
    }























    
   
    
    

