// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        
        
    }
    getRole(role = "Manager") {
        // returns 'Manager'
        this.role = role;

        return this.role
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
 module.exports = Manager;