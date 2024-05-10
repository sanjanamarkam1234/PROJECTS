

// const input = require("readline-sync");
// let n = input.questionInt("enter the number");
// let i = 1;
// let str ="";
// while (i<=n) 
// {
//     let j = 1;
// }
// while (j<=n-1) 
// {
//     str+="";
//     j++;
// }
// j = i;
// while (j<=i) 
// {
//     str+=j;
//     j++;
// }
// j =i -1;
// while (j>0) 
// {
//     str+=j;
//     j--;
//     console.log(str);
//     i++;
// }
// // console.log(str);
// // i++;
const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
let i = 1;

while (i <= n) 
{
    let j = 1;
    let str = "";
    while (j <= i )
    {
        str += j;
         j++;
    }
    j -= 2;
    while (j >= 1) 
    {
        str += j;
        j--;

    }
    console.log(str);
   i++;
}