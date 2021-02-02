const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];


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


function createEmployeeCard(employee) {



};

createEmployeeCard()