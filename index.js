const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
        ]).then((response)=> {
            if(response.menu === 'Engineer') {
                createEngineer();
                
                const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                console.log(newEngineer);

                return newEngineer;
            } else if (response.menu === 'Intern') {
                createIntern();
                
                const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                console.log(newEngineer);

                return newEngineer;
            } else {
                const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmailAddress, response.engineerGitHub);
                console.log(newEngineer);

                return newEngineer;
            };
        });
};

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the Intenr?',
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
                name: 'engineerEmailAddress',
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
        ]).then((response)=> {
            if(response.menu === 'Engineer') {
                createEngineer();
            } else if (response.menu === 'Intern') {
                createIntern;
            } else {
                return;
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
            name: 'managerID',
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
            createEngineer();
        };

    });

function createEmployeeCard(employee) {



};

createEmployeeCard()