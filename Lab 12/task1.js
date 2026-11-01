/*
Name: SUDHANSHU SINGH
Roll No: 2510303511
Assignment No: 12
Task No: 1
*/

function applyTwice(func, value) {
    return func(func(value));
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));