/*
Name: SUDHANSHU SINGH
Roll No: 2510303511
Assignment No: 4
Task No: 3
*/

function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));