const input = require("readline-sync");
let n = input.questionInt("enter the number");
if(n<=10000)
{
    HRA=n*(20/100);
    DA =n*(80/100);
    GS =n+HRA+DA;
    console.log(GS);
}
if(n<=20000)
{
     HAR=n*(25/100);
     DA =n*(90/100);
     GS =n+HAR+DA;
     console.log(GS);
}
if (n<=20000)
{
     HAR=n*(30/100);
     DA =n*(90/100);
     GS =n+HAR+DA;
     console.log(GS);
}
    
