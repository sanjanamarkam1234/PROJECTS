const input = require("readline-sync")

let n = input.questionInt("enter the number:");
    let   i =1;
    let even=0;

 
    while (i<=n)
    {

           if (i%2==0) 
           {
               even=even+2;

                console.log(even);

                   i++;
            }i++;


        
    }