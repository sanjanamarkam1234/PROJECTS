const input = require("readline-sync");
let n = input.questionInt("enter the number: ");
let i = 1;
let number = 1;
while (i <= n) 
{   
    str = ' ';
    let j = 1;
    while (j <= i) 
    {   
        str = str + number;
        number++;
        j++;
    }
     console.log(str);
    i++;
}
