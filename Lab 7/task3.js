/*
Name: SUDHANSHU SINGH
Roll No: 2510303511
Assignment No: 7
Task No: 3
*/

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function() {
    if (this.marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

let student1 = new Student("SUDHANSHU SINGH", 88);

console.log(student1.result());