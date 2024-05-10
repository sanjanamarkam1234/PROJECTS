const input = require("readline-sync");
let n = input.questionInt("enter the number ;-");
let a = [];
let i = 0;

while (i<n) 
{
    a[i] = input.questionInt("number;");
    i++;
}
i=0;
while (i<n) 
{
     let j = i + 1;
     let c=1;
     while (j<n) 
    {
        if (a[i]==a[j])
        {
            k = j;
            c++;
            while (k<n-1) 
            {
                a[k] =a[k+1];
                k++;
            }
            n=n-1
        }
        else
        {
            c==c;
            j++;
        }
     }
          console.log(a[i]+"-"+c);
           i++;
          j++;
  
  
           
}