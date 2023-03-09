// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name,id,email) {
      this.name = name;
      this.id = id;
      this.email = email;

    }
  
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        // returns 'Employee'
        this.role = "Employee";
        return this.role
    }
  }  
  module.exports = Employee;

  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  console.log(e.getRole());
