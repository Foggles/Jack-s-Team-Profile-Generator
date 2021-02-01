class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    
    getname() {
        console.log(`Name: ${this.name}`);
        return this.name;   
    };

    getId() {
        console.log(`Id: ${this.id}`);
        return this.id;
    };

    getEmail() {
        console.log(`Email: ${this.email}`);
        return this.email;
    };

    getRole() {
        console.log("Role: Employee");
        return "Employee"
    };

};

module.exports = Employee;