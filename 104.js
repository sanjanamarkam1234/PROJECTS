/* deletion*/
const input = require("readline-sync");
let n  = input.questionInt("enter the number of element:-");
let a = [];
let i = 0;
while (i<n)
{
    a[i]= input.questionInt("enter the number:-");
    i++;
}
let p = input.questionInt("Enter delete: ");

i = 0;
while (i < n) 
{
    if (a[i] == p)
    {
        for (let k = i; k < n ; k++) 
        {
            a[k] = a[k + 1];
        }
        n =n-1;

    } 
    i++; 
    
}
i = 0;
while (i<n) 
{
    console.log(a[i]);
    i++;
}

