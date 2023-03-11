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
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number: ',
        }

    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
    })

}

function addEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Engineers Name: ',
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
            name: 'github',
            message: 'github profile id: ',
        }

    ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            team.push(engineer)
            // addMore()
        })

}

function addIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern Name: ',
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
            name: 'school',
            message: 'School name: ',
        }

    ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            team.push(intern)
            // addMore()
        })

}

function addMore() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'licence',
            message: 'Want to add another staff.',
            choices: [new inquirer.Separator(), "Add Engineer", "Add Interin", "no"],
        }
    ])
    // .then((val) => {
    //     if (val.licence == 'Add Engineer') {
    //         addEngineer()
    //             .then((answers) => {
    //                 const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    //                 team.push(engineer)
    //             })
    //     } else if (val.licence == 'Add Interin') {
    //         console.log('Interino')
    //     } else {
    //         console.log(team)
    //         // console.log(team[manager.name])
    //         // writeFileAsync(outputPath, render(manager))
    //         // process.exit(0)
    //     }
    // })


}


addManager()
    // .then(() => {
        // addEngineer()
            // .then((val) => {
            //     if (val.licence == 'Add Engineer') {
            //         addEngineer()
                        // .then(() => console.log(team))
            //             // .then((answers) => {
            //             //     const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            //             //     team.push(engineer)
            //             // })
            //     } else if (val.licence == 'Add Interin') {
            //         console.log('Interino')
            //     } else if (val.licence == 'no') {
            //         console.log(team)
            //         // console.log(team[manager.name])
            //         // writeFileAsync(outputPath, render(team))
            //         // process.exit(0)
            //     }
            // })
    // }
    // )


    // .then(() => console.log(team))
    // .then(() => writeFileAsync(outputPath, render(team)))
    .then(() => addEngineer()) 
    .then(() => addIntern())
    .then(() => console.log(team))
    .then(() => writeFileAsync(outputPath, render(team)))

