// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;


    }
    getRole(role = "Engineer") {
        // returns 'Engineer'
        this.role = role;

        return this.role
    }

    getGithub() {
        return this.github;
    }

}
module.exports = Engineer;