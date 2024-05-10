const input = require("readline-sync");
let n = input.questionInt("enter the number-") ; 
let array = [],i;
 i = 0;
while (i<n ) 
{
    //   array[i] = input.questionInt("number");
    let s = input.questionInt("number ;- ");
     array[i] = s;
     i++;
}console.log(array);