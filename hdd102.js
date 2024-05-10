  /*N = 4*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
for(let i = 1; i <= n; i++) {
    let str = " ";
    for(let j = n; j > i; j--) 
    {
        str += " ";
    }

    for(let k = 1; k <= (2 * i - 1); k++) 
    {
        str += "*"; 
    }
    console.log(str);
}
