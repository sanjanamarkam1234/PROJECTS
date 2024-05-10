/* comman number*/
const input = require("readline-sync");
 let n = input.questionInt("Enter the number of elements : ");
let m = input.questionInt("Enter the number of elements : ");
let a = [];
let b = [];
 for (let i = 0; i < n; i++) 
{
 a[i] = input.questionInt("Enter number: ");
}
j = 0
while(j<m)
{
    b[j]= input.questionInt("enter the number: ")
    j++;
}
    let sum = 0;
    for (let i = 0; i < n; i++) 
    {
        
        for (let j = 0; j < n; j++) 
        {
            if (a[i] == b[j]) 
            {
                sum = sum+a[i]
            }
        }
         
      
    }console.log(sum);