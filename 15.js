const input =require("readline-sync");
let a  = input.questionInt("enter the number");
let b  = input.questionInt("enter the number");
let c  = input.questionInt("enter the number");
    if(a>b)
    {
        l=a;
        s=b;
    }else l=b; s=a;
    if(l>c)
     {
          console.log(l);
     }else console.log(c);