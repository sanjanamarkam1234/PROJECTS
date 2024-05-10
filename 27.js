const input = require("readline-sync");
let n = input.questionInt("entr the number:");
let  sum = 0;
let R;
while (n>0) 
{

        R = n%10;
        sum=sum+R;
        n=Math.floor(n/10);
        
         
}console.log(sum);