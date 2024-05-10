/*Selection Sort*/
const input = require("readline-sync");
let n = input.questionInt("enter the number;- ")
let a = [];
let i = 0;
let t;
while (i<n) 
{
    a[i] = input.questionInt("enter the number;")
    i++;
}
i = 0;
while(i<n)
{
    j = i;
    while(j>0)
       {
           if(a[j]<a[j-1])
           {
              t = a[j];
              a[j] = a[j-1];
              a[j-1] = t;
              j--;
           }else
           {
              j--;
              
           }
              

       }i++
} 
i= 0;
while (i<n) 
{
    console.log(a[i]);
    i++;
}

