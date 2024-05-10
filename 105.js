/*BUBBULE*/ 
const input=require("readline-sync")
let n = input.questionInt("enter the number: ")
let a = []
let i = 0;
let t;
while(i<n)
{
    a[i]= input.questionInt("enter n: ")
    i++;
}
i = n-1;
while(i>0)
{
    j =0;
    while(j<i)
    {
        if(a[j]>a[j+1])
        {
            t = a[j];
            a[j]=a[j+1]
            a[j+1]=t;
            
        }
        else
        {
            j++;
        }
    }
    i--;
}
i = 0;
while(i<n)
{
    console.log(a[i]);
    i++
}













    
    
    
    



