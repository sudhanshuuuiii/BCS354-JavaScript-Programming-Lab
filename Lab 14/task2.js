/*
Name: SUDHANSHU SINGH
Roll No: 2510303511
Assignment No: 14
Task No: 2
*/

let timer = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timer);

console.log("Cancelled");