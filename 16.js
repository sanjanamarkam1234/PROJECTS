const input = require("readline-sync");
let n = input.questionInt("enter the number");
if(n%100 !==0)
{
    if(n%4==0)
    {
        console.log("leap year");
    }
    else
    {
        console.log("No a leap year");
    }
}
else if(n%400==0)
{
    console.log("leap year");
}
else 
{
    console.log("Not a leap year");
}