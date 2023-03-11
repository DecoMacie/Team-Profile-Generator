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


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Creates question and inquire format
const promptManager = () =>
    inquirer.prompt([
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
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number: ',
        },

    ]);
let manager = {}
const team = () => {
        return [
            manager
    
        ]
    }
    
promptManager()
    .then((answers) =>
        manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber))
    // .then((manager) =>
    //     writeFileAsync(outputPath, render(manager)))

    
    .then(() => writeFileAsync(outputPath, render(team())))

    .then(() => console.log(manager))
    .catch((err) => console.error(err));


