
const input = require("readline-sync");
let n = input.questionInt("enter the number ;-");
let a = [];
let i = 0;

while (i<n) 
{
  a[i] = input.questionInt("number;");
   i++;
}

i=0;

while (i<n) 
{
  let j = i + 1;
  let c=1;
while (j<n) 
{
  if (a[i]==a[j])
{
  k = j;
  c++;
   while (k<n-1) 
  {
    a[k] =a[k+1];
    k++;
  }
   n=n-1
  }
 else
  {
  c==c;
  j++;
 }
  }
  console.log(a[i]+"-"+c);

  i++;
  j++;       
}



// const input = require("readline-sync");
// let n = input.questionInt("Enter the number: ");
// let arr = [1,2,3,4,5,6,7];
// let m = false;

// for (let num of arr) {
//     if (num == n) {
//         m= true;
//         break;
//     }
// }

// if (m) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }


