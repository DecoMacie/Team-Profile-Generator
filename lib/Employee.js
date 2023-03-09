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
    }
  }  
  module.exports = Employee;

  const testValue = 100;
  const e = new Employee("Foo", testValue);
  console.log(e.id);
