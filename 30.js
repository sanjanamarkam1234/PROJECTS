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
 if (sum == 0) 
 {  
     console.log("perfect number");
      
 }
 else console.log("not perfect number");

}