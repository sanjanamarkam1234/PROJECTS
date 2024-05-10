/* you are given a postive integer N and an array of integers white a 
prograrem to print the sum of the first N elements of the array*/
const input =require("readline-sync");
let n = input.questionInt("enter the total element n:");
let sum=0;
let a =[];

for(i=0; i<n; i++)
{
    a[i]=input.questionInt("enter the number;")
}
console.log(a);
k = 0;
while(k<n)
{
    sum=sum+a[k];
    k++;
}
console.log(sum);



