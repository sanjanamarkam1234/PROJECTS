const input = require("readline-sync");
let n = input.questionInt("enter the number");
let str = "";
for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {

        if (i === 1 || j === i || j === 1 || i === n) {
       
         str += " *";

        }else {
            str += "  ";
            
        }
    }
    str += "\n";
}
console.log(str);
    
