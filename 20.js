const input = require("readline-sync");
let a = input.questionInt ("enter the number");
let b = input.questionInt("enter the number");
let c = input.questionInt("enter the number");
let d = input.questionInt("enter the number");
if (a>b){
     max = a;
     min = b;
}else{
     max = b;
     min = a;
}
if (c>d) {
    max1 = c;
    min1 = d;
}else{
     max1 = d;
     min1 = c;
}
if (max>max1) {
    console.log(max1);
}else{
    console.log(max);
}