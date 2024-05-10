/*let i = 1;

let j = 1;

while (i <= 3) {

while (j <= 3) {
if (i*j > 4) {
break;
}
console.log(i*j);
j++;

}
i++;
}*/
// /*2d*/
// const length = 8;
// const array = [1,3,5,2,4,6,8,7]
// i = 0; 
// s = 0;
// while (i<length) 
// {

//     i = i +1
//     s = array [i];
//     i = length;
// }
// console.log(s);
// let i = 1;
// let j = 1;
// while (i<=3) 
// {
//     while (j<=3) 
//     {
//         console.log(i+"*"+j+"="+(i*j));
//     }
//     j++;
// }
// i++;
let i = 1;
while (i <= 3) {
    let j = 1; 
    while (j <= 3) {
        console.log(i + "*" + j + "=" + (i * j));
        j++;
    }
    i++;
}