/*
Write a program to take a number from the user and then determine if that number is a special 
type of number called a 'perfect number'. A perfect number is a number where the sum of all its 
factors (excluding the number itself) is equal to the number itself.*/
// const input = require("readline-sync");
//  let n = input.questionInt("enter the number");
//  let i = 1;
//  let sum = 0;
// while (i< n) 
// {
//     if (n % i==0 ) 
//     {
//         i = i +1;
//     }
//     else 
//     {
//          sum = sum + i;
//          i++;
//     }     
//  if (sum == 0) 
//  {  
//     console.log("perfect number");
      
//  }
//  else 
//  {
//     console.log("not perfect number");
//  }
// }

const input = require("readline-sync");
 let n = input.questionInt("enter the number");
 let i = 1;
 let sum = 0;
while (i< n) 
{
    if (n % i==0 ) 
    {
        i = i +1;
    }
    else 
    {
         sum = sum + i;
         i++;
    }     
 if (sum == n) 
 {  
    console.log("perfect number");
      
 }
 else 
 {
    console.log("not perfect number");
 }
}

