const input = require("readline-sync");
let n = input.questionInt("enter the number;-");
let a = [];
let i = 0;
let  even  = 0 ; 
let odd = 0;
while (i<n) 
{
   let b= input.questionInt("enter the value");
   a[i]=b;
   if (a[i]%2==0) 
   {
     even=even+a[i];
   }
   else 
   {
    odd=odd+a[i];
   }
   i++;
}
console.log("envn:",even);
console.log("odd:",odd);

