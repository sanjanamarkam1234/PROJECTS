// const readline=require('readline-sync')
// let a=readline.questionInt(`Enter the number=`);
// let i=0;
// let str="*";
// while(i<a)
// {
//  console.log(str.repeat(a));
//  a--;
// }
const input = require("readline-sync");
let n = input.questionInt("enter the number");
let str="";
for(let i=0;i<n;i++)
{
    for(let j=0;j<n-i;j++)
    {
     str+="* ";
    }
    str+="\n";
}
console.log(str);