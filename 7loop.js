const input = require("readline-sync");
let a = input.questionInt("enter the number ");
let b = input.questionInt("enter the number");
if (a>b) 
{
    l=a;
    s=b;
}
else
{
    l=b;
    s=a;
}
{
    r=l%s;
}
while (r!=0) 
{
    l=s,s=r;
    r=l%s;
}
HCF=s
console.log(HCF);



