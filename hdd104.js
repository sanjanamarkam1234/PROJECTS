// /*N = 4 */
// /*const input = require("readline-sync");
// let n = input.questionInt("enter the number");
// let i = 1;
// for (let i = 1; i <= n; i++)
// {
//     let str = "";
//     for (let j = 1; j <= i; j++) 
//     {
//         str += "* ";
//     }
//     console.log(str);
// }
// let i = 0;
// while (i<n)
// {
//     str = "";
//     j = 0;
//     while (j<n) 
//     {
//         str+= "*";
//         j++;
//     }
//     console.log(str);
//     i++;
// }*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
let str="";
for (let i = 1; i <= n; i++) 
{
    let str = "";
    for (let j = 1; j <= i; j++) 
    {
        str += "* ";
    }
    console.log(str);
}
for(let i=0;i<n;i++)
{
    for(let j=0;j<n-i;j++)
    {
     str+="* ";
    }
    str+="\n";
}
console.log(str);