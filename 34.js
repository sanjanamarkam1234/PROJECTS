const input = require("readline-sync");
let n = input.questionInt("Enter the number of elements: ");
let m = input.questionInt("Enter the number to check: ");
let arr = [];
let i = 0;
let c = 0;

while (i < n) 
{
  let b = input.questionInt("Enter the element: ");
  arr.push(b);
  i++;
}

i = 0;
while (i < n) 
{
  if (arr[i] === m) 
  {
    c++;
  }
  i++;
}

if (c > 0) 
{
  console.log("Yes, the number", m, "is present in the array.");
} else 
{
  console.log("No, the number", m, "is not present in the array.");
}


 