// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        
        
    }
    getRole(role = "Manager") {
        // returns 'Employee'
        this.role = role;
        // this.role = class{name};

        return this.role
        // console.log (this.role)
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

// const testValue = "Manager";
// const e = new Manager("Foo", 1, "test@test.com", 100);
// console.log(e.off)
 module.exports = Manager;