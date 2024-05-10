/*Write a program to check if a number is a special type of number called a 'prime number'
. A prime number is a number that is only divisible by 1 and itself, and it doesn't have 
any other factors. For example, the number 7 is a prime number because it can only be divided by 1 and 7 without
 leaving a remainder. However, the number 12 is not a prime number because it has other factors, 
 such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)?*/
const input = require("readline-sync");
 let n = input.questionInt("Enter the number:");
 let i =1;
 let sum=0;
 while (i<=n) 
{
  if (n%i!==0);
    else
  {
    sum=sum+1;
  }
  {
  i=i+1;
  }
}
if(sum==2)
{
    console.log("This is  prime number");
}
else
{
   console.log("This is  not prime number");
}
