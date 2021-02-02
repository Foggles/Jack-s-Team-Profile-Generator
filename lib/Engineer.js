const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getRole() {
        console.log("Role: Engineer");
        return "Engineer";
    };

    gitHub() {
        console.log(`Github: https://github.com/${this.github}`);
        return `https://github.com/${this.github}`;
    };
};

module.exports = Engineer;