/*Write a JavaScript program or code that takes three numbers as input. 
// If all three numbers are equal, print the product of the numbers. If any two numbers are equal, 
// add them together and print the remainder after dividing the sum by the third number. 
// If no two numbers are equal, determine the highest among them and print its square.*/
const input = require("readline-sync");
let a = input.questionInt("enter the number");
let b = input.questionInt("enter the number");
let c = input.questionInt("enter the number");
if (a == b && b == c)
{
   s = a*b*c;
   console.log(s);
}
else if (a==b) 
{
    s = a+b;
    d = s %c;  
    console.log(d);
}
else if (b==c) 
{
    s = b+c;
    d = s % a;
    console.log(d);
}
else if (c==a) 
{
    s = c + a;
    d = s % b;
    console.log(d);
}
else if (a>b && a>c) 
{
    g = a**2;
    console.log(g);
}
else if (b>c && b>a) 
{
    g = b**2;
    console.log(g);
}
else if (c>a && c>b) 
{
    g = c**2;
    console.log(g);
}
