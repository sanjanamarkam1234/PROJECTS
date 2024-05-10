const input = require("readline-sync");
let n = input.questionInt("enter the number=");
let i = 0;
let a = [];
while (i<n ) 
{
   
   a[i] = input.questionInt('enter the number');
   i++;
}
i=0;
while(i<n)
{
   console.log(a[n-1-i]);
   i++;
}
