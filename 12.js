const input = require("readline-sync")
let n = input.questionInt("enter the number:");
if(n==0)
{
  console.log("zero");
}
 else if(n>0)
{
      console.log("postive");
      
} else{console.log("negative");}