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
// const promptManager = () =>
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Managers Name: ',
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Identification Nr.: ',
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Email address: ',
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'Office Number: ',
//         },

//     ]);
// let manager = {}
// promptManager()
//     .then((answers) =>
//         manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber))
//     // .then((manager) =>
//     //     writeFileAsync(outputPath, render(manager)))

    // .then(() => console.log(manager))
    // .catch((err) => console.error(err));

// let manager = new Manager(
//     inquirer.prompt(
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Managers Name: ',
//         }),
//     inquirer.prompt(
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Identification Nr.: ',
//         }),
//     inquirer.prompt(
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Email address: ',
//         }),
//         inquirer.prompt(
//             {
//                 type: 'input',
//                 name: 'officeNumber',
//                 message: 'Office Number: ',
//             }),
    

// )

// manager()

const manager = new Manager('ab','ab','ab','ab')
const team = [manager];
writeFileAsync(outputPath, render(team))
