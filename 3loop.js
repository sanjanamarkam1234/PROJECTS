/*
Write a program to print the sum of odd numbers up to 100.
Output:
2500*/
const input = require("readline-sync")

let n = input.questionInt("enter the number:");
    let   i =1;
   
 
    while (i<=n)
    {

           if (i%2!=0) 
           {
               

                console.log(i);

                   
            }i++;


        
    }
