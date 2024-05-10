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