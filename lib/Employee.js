// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;

    }
  
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getRole(role = "Employee") {
        // returns 'Employee'
        this.role = role;
        // this.role = class{name};

        return this.role
        // console.log (this.role)
    }
  }  
  module.exports = Employee;

//   const testValue = "Alice";
//   const e = new Employee(testValue);
//   console.log(e.getRole()); 