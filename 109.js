/*median*/
/*const input = require("readline-sync");
let n = input.questionInt("enter the number");
let m = input.questionInt("enter the number");
let i = 0;
while(i<m)
{
    a[i] = input.questionInt("enter the number");
    i++;
}
j = 0;
while (j<n) 
{
    b[i] = input.questionInt("enter the number");
    j++;
}
r = m+n;
i = 0; j = 0; k = 0;
while (k<r) 
{
    while (i<m) 
    {
        if (j<n) 
        {
            if (a[i]<b[j]) 
            {
                c[k] = a[i]
                i++;
            }
            c[k] = b[j]
            j++;
        }
        k++;
    }
    while (r%2==0) 
    {
        r =r/2;
        c[r-1] + c[r];        
    }
    c = (r-1)/2;
}
console.log(c);*/


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
// console.log(c);
// if (c%2==0){
//     {
//         c =c/2;
//         c[c-1] + c[c];        
    
//     }c = (c-1)/2;
//     console.log(c);
// }
// else
// {
//     q=Math.floor(c/2)
//     console.log(q);
// }
if (c%2==0) 
{
        q=Math.floor(c/2);
        z=(d[q]+d[q-1]/2);
        console.log(z);
    
}
else 
{
    q=Math.floor(c/2);
    console.log(q);
}