/*Write a javascript program to find GCD of three numbers.the GCD of two or more numbers is the largest number that divides each of them without leaving a remainder.
(20 marks)

Test cases
Input 1: a=3 , b=5 , c=7
output: 1

Input 2: a=4, b=2, c=6
output: 2


Input 3: a=34, b=68 , c=17
output: 17
*/
const input = require("readline-sync")
let a = input.questionInt("Enter 1st number: ")
let b = input.questionInt("Enter 2nd number: ")
let c = input.questionInt("Enter 3rd number: ")

if(a>b)
{
    l = a 
    s = b
}else
{
    l = b
    s = a++
} 
    r = l % s 
    while(r != 0)
    {
        l = s 
        s = r 
        r = l % s
    }
    hcf = s 
    
    if(s > c)
    {
        l = s
        s2 = c
    }else 
    {
        l = c
        s2 = s 
    }
     r = l % s2
     while(r != 0)
     {
        l = s2
        s2 = r
        r = l % s
     }
     hcf = s2
     console.log(hcf);







