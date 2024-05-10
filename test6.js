/*write a javascript program to find GCD of three numbers.
the GCD of two or more numbers is the largest number 
that divides each of them without leaving a remainder*/

const input = require("readline-sync");
let a = input.questionInt("enter frist  number ;-");
let b = input.questionInt("enter second  number -");
let c = input.questionInt("enter 3rd number-");
if (a>b)
{
    l = a
    s = b
}else
{
    l = b
    s = a
}
r = l % s;
if (r!=0) 
{
    l = s
    s = r
    r = l % s
}
HCF = s;
if(s>c)
{
    l = s 
    s2 = c 
}
else
{
    l = s 
    s2 = c
}
r = l% s2;
if (r!=0)
{
    l = s2
    s2 = r 
    r = l % s
}
else
{
    HCF = s2
}
console.log(HCF);