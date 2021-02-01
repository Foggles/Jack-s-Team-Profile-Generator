const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getRole() {
        console.log("Role: Intern");
        return "Intern";
    };

    getSchool() {
        console.log(`School: ${this.school}`);
        return this.school;
    }

};