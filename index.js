const inquirer = require('inquirer');
const fs = require('fs');

// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { create } = require('istanbul-reports');

const employees = [];

function createEmployeeHTML() {
    console.log(employees);

    const fsOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>

    <style>
        .card{
            box-shadow: 5px 5px 5px gray;
            border: 1px solid gray;
        }
    </style>
</head>

<body>

    <section>
        <h1>My Employees</h1>
    </section>
`;

        fs.writeFile('index.html', fsOutput, (err) => {
            if (err) throw err;
            console.log("File created successfully");
        });

    for (const employee of employees) {
        console.log(employee.name);
        
        let employeeFsOutput;

        if (employee instanceof Engineer) {
            employeeFsOutput = `
            <div class="card">
                <div class="card-title"> ${employee.getName()} </div>
                <div class="card-title"> ${employee.getId()} </div>
                <div class="card-title"> ${employee.getRole()} </div>
                <div class="card-title"> ${employee.getEmail()} </div>
                <div class="card-title"> ${employee.gitHub()} </div>
            </div>
            `
        } else if (employee instanceof Manager) {
            employeeFsOutput = `
            <div class="card">
                <div class="card-title"> ${employee.getName()} </div>
                <div class="card-title"> ${employee.getId()} </div>
                <div class="card-title"> ${employee.getRole()} </div>
                <div class="card-title"> ${employee.getEmail()} </div>
                <div class="card-title"> ${employee.officeNumber} </div>
            </div>
            `
        } else {
            employeeFsOutput = `
            <div class="card">
                <div class="card-title"> ${employee.getName()} </div>
                <div class="card-title"> ${employee.getId()} </div>
                <div class="card-title"> ${employee.getRole()} </div>
                <div class="card-title"> ${employee.getEmail()} </div>
                <div class="card-title"> ${employee.getSchool()} </div>
            </div>
            `
        }

        const asd = employeeFsOutput + '</body> </html>';

        fs.appendFile('index.html', asd, (err) => {
            if (err) throw err;
            console.log("Data appended successfully.");
        }); 
    };
};

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the Engineer?',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'What is their Employee ID?',
                name: 'engineerId',
            },
            {
                type: 'input',
                message: 'What is their email address?',
                name: 'engineerEmailAddress',
            },
            {
                type: 'input',
                message: 'What is their GitHub?',
                name: 'engineerGitHub',
            },
            {
                type: 'list',
                message: 'Add another team member of finish?',
                name: 'menu',
                choices: [
                    'Engineer',
                    'Intern',
                    'Finish'
                ],
            },
        ]).then((response) => {
            if (response.menu === 'Engineer') {
                const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                console.log(newEngineer);

                createEngineer();

                employees.push(newEngineer);
                return newEngineer;
            } else if (response.menu === 'Intern') {
                const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                console.log(newEngineer);

                createIntern();

                employees.push(newEngineer);
                return newEngineer;
            } else {
                const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                console.log(newEngineer);

                employees.push(newEngineer);                
                return newEngineer;
            };
        });
};

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the Intern?',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'What is their Employee ID?',
                name: 'internId',
            },
            {
                type: 'input',
                message: 'What is their email address?',
                name: 'internEmailAddress',
            },
            {
                type: 'input',
                message: 'What school do they go to?',
                name: 'internSchool',
            },
            {
                type: 'list',
                message: 'Add another team member of finish?',
                name: 'menu',
                choices: [
                    'Engineer',
                    'Intern',
                    'Finish'
                ],
            },
        ]).then((response) => {
            if (response.menu === 'Engineer') {
                const newIntern = new Intern(response.internName, response.internId, response.internEmailAddress, response.internSchool);
                console.log(newIntern);

                createEngineer();

                employees.push(newIntern);
                return newIntern;
            } else if (response.menu === 'Intern') {
                const newIntern = new Intern(response.internName, response.internId, response.internEmailAddress, response.internSchool);
                console.log(newIntern);

                createIntern();

                employees.push(newIntern);
                return newIntern;
            } else {
                const newIntern = new Intern(response.internName, response.internId, response.internEmailAddress, response.internSchool);
                console.log(newIntern);

                employees.push(newIntern);
                createEmployeeHTML();
                return newIntern;
            };
        });
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the Manager?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is their Employee ID?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'managerEmailAddress',
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'managerOfficeNumber',
        },
        {
            type: 'list',
            message: 'Add another team member of finish?',
            name: 'menu',
            choices: [
                'Engineer',
                'Intern',
                'Finish'
            ]
        },
    ]).then((response) => {

        if (response.menu === 'Engineer') {
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmailAddress, response.managerOfficeNumber);
            console.log(newManager);

            createEngineer();

            employees.push(newManager);
            return newManager;
        } else if (response.menu === 'Intern') {
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmailAddress, response.managerOfficeNumber);
            console.log(newManager);

            createIntern();

            employees.push(newManager);
            return newManager;
        } else {
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmailAddress, response.managerOfficeNumber);
            console.log(newManager);

            employees.push(newManager);
            return newManager;
        }

    });
