const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const writeFileAsync = util.promisify(fs.writeFile);

const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Creates question and inquire format
// Function to add Manager using inquirer
function addManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Managers Name: ',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Identification Nr.: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email address: ',
            //validating - email must be in the correct format: Ex. test@test.com
            validate: (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    return true;
                } else {
                    return "Please enter a valid email. ";
                }
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number: ',
            validate: (officeNumber) => {
                if (isNaN(officeNumber)) {
                  return "Please enter a valid Office Number";
                }
                return true;
              },
        }

    ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            team.push(manager)
        })
}

//Function to add more staff using Inquirer loop
function addMoreStaff() {
    inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
    return inquirer.prompt([
        {
            type: 'loop',
            name: "staff",
            message: "Want to add another staff?",
            questions: [
                {
                    type: 'list',
                    name: 'role',
                    message: 'Choose staff role.',
                    choices: [new inquirer.Separator(), "Engineer", "Intern"],
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'Staff Name: ',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Identification Nr.: ',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Email address: ',
                    //validating - email must be in the correct format: Ex. test@test.com
                    validate: (email) => {
                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                        if (valid) {
                            return true;
                        } else {
                            return "Please enter a valid email. ";
                        }
                    },

                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'github profile id: ',
                    when: (staff) => staff.role === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'School name: ',
                    when: (staff) => staff.role === 'Intern'
                }

            ]
        }
    ])
}

addManager()
    .then(() => addMoreStaff()
        .then((answers) => {
            const staff = answers.staff
            // Loop over each staff to segregatte to the respective role 
            staff.forEach(element => {
                if (element.role === 'Engineer') {
                    const engineer = new Engineer(element.name, element.id, element.email, element.github)
                    team.push(engineer)
                } else if (element.role === 'Intern') {
                    const intern = new Intern(element.name, element.id, element.email, element.school)
                    team.push(intern)
                }
            });
            writeFileAsync(outputPath, render(team))
        })
    )

