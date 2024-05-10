/* Merge single sorted array*/
const input = require("readline-sync");
let n = input.questionInt("enter the number;-");
let m = input.questionInt("enter the number;-");
let a = [];
let b = [];
let c = [];
let i = 0,j=0,k=0;
while (i<n) 
{
    a[i] = input.questionInt("number;-")
    i++;
}
 i = 0 ;
 while (i<m) 
 {
    b[i] =input.questionInt("number;-");
    i++;
 }
 i = 0,  j = 0,k = 0
while(i<n)
{
    c.push(a[i]);
    i++;
}
while(j<m)
{
    c.push(b[j])
    j++;
}
i=0;
while(i<c.length)
{    
    let p=0;
    j=i+1;
    while(j<c.length)
    {
        if(c[j]<c[i])
        {
         let t=c[j];
         c[j]=c[i];
         c[i]=t;
         p++;
         break;

        }
        j++;
    }
    if(p!=0)
    {
        i=0;
    }
    else
    {
        i++;
    }
    
}
console.log(c);
