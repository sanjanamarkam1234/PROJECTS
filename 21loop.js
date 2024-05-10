/*const input = require("readline-sync");
let a = input.questionInt("enter the number ;-");
let b = input.questionInt("enter the number ;-");
let c = input.questionInt("enter the number ;-");
if (a === b && b === c)
{
    console.log("all equal");
}
else if( a===b || b === c || a === c)
{
    console.log("to equal");
}
else
{
    const n = Math.max(a,b,c);
    if (n % 2===0) 
    {
        console.log("n even ");
    }
    else
    {
      console.log("n odd");
    }

}*/
const input = require("readline-sync") 
let n = input.questionInt(" enter the  total number ")
let a = input.questionInt("enter a : ");
let b = input.questionInt("enter b : ");
let c = input.questionInt("enter c : ");
if (a>b){
         l = a ;
         s = b;
}else{
    l = b;
    s = a;
}
 if(l>c){
    l1 = l;
    s1 = c;
}else{
    l1 = c;
    si = l
}
if(l1%2==0){
    console.log(l1,"large even");
}else{
    console.log(l1,"large odd")
}

if(a==b && b==c && c==a)
{
    console.log(a,b,c,"all equel")
}
else{
    if(a==b!=c || b==c!=a || a==c!=b){
        console.log( "two equel")
    }
}