const input = require("readline-sync");
let a = input.questionInt("enter the number");
let b = input.questionInt("enter the number");
let c = input.questionInt("enter the number");
if (a>b) 
{
     max=a;
     min=b;
}else 
{
     max=b; 
     min=a; 
}
if (max>c) 
{
      console.log(c);
}
else 
{
     console.log(max);
}