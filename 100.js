/*for(let i=-2;10>i;i++)
{
    console.log(i);
    if(i==4)
    {
        break;
    }
}*/

const input = require("readline-sync");
let n = input.questionInt("enter the n;-");
let m = input.questionInt("enter the m;-");
let a = [];
let b = [];
let t = n+m;
// let sum = 0;
let i = 0;
while (i<n) 
{
    a[i] = input.questionInt("enter the number;-");
    i++;
}
j = 0;
while (j<m) 
{
    b[j] = input.questionInt("enter the number;-");
    j++;
}
i = 0; j = 0;let k = 0,r= n+m;
while (k<r) 
{
    if (i<n) 
    {
        if (j<m)
        {
            if (a[i]<a[j]) 
            {
                t[k] = b[j];
                j++;
            }else
            {
                t[k] = a[i]
                k++;
            }i++;
        }
        j++;
    }
    else
    {
      t [i] = a[k];
      k++;
    }
    i++;
}



