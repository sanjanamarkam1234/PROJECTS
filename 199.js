/*Write a program to print the sum of all the numbers in the given array.
L = {23, 45, 32, 25, 46,33, 71, 90}

Output:
365*/

const input =require("readline-sync");
let n = input.questionInt("enter the total element n:");
let sum=0;
let a =[];

for(i=0; i<n; i++)
{
    a[i]=input.questionInt("enter the number;")
}
console.log(a);
i=0;
while(i<n){
    sum=sum+a[i];
    i++;
}
console.log(sum);
