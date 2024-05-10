const input = require("readline-sync")
let n = input.question("enter the number;-")
let i = 1;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "* ";
        
    }
    console.log(str);
}
for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "* ";
        
    }
    console.log(str);
}

// for (let i = 1; i <= n; i++) {
//     let str = "";
//     str += "* ".repeat(i);
//     console.log(str);
// }
// for (let i = n - 1; i >= 1; i--) {
//     let str = "";
//     str += "* ".repeat(i);
//     console.log(str);
// }

