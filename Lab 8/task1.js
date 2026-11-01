/*
Name: SUDHANSHU SINGH
Roll No: 2510303511
Assignment No: 8
Task No: 1
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher1 = new Teacher("SUDHANSHU SINGH", "Maths");

console.log(teacher1.greet());