const input = require("readline-sync");
let a = input.questionInt("enter the number");
let b = input.questionInt("enter the number");
let c = input.questionInt("enter the number");
var d = input.questionInt("enter the number");
    if(a>b)
    {
       l=a;
       s=b;
    }else l=b; s=a;
    if(c>d)
    {
        l1=c;
        s1=d;
    }else  l1=d; s1=c;
    if(l>l1)
    {
        console.log(l);
    }else console.log(l1);