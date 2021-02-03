// Requiring npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// Storing multiple classes in const variables.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Creating empty employees array for later use
const employees = [];

// Function used to create and/or append index.html with data from user
function createEmployeeHTML() {
    // Console logging the employees array
    console.log(employees);

    // Defining the html for index.html
    const fsOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">

    </head>

<body>

    <section>
        <h1>My Employees</h1>
    </section>

`;

    // Writing index.html with fsOutput
    fs.writeFile('./dist/index.html', fsOutput, (err) => {
        if (err) throw err;
        console.log("File created successfully");
    });

    // Creating html cards for each employee inside employees array, depending on whether or not the employee is an instanceof a certain class
    for (const employee of employees) {
        console.log(employee.name);

        let employeeFsOutput;

        if (employee instanceof Engineer) {
            employeeFsOutput = `
            <div class="card">
                <div id="cardTitle" class="card-title"> <h2> Name: ${employee.getName()} </h2> </div>
                <div id="cardTitle" class="card-title"> <h3> Role: ${employee.getRole()} </h3> </div>
                <div class="card-body"> Employee ID: ${employee.getId()} </div>
                <div class="card-body"><a href='mailto: ${employee.getEmail()}'>Send Email</a></div>
                <div class="card-body"><a href='${employee.gitHub()}'>${employee.gitHub()}</a></div>
            </div>
            `
        } else if (employee instanceof Manager) {
            employeeFsOutput = `
            <div class="card">
                <div id="cardTitle" class="card-title"> <h2> Name: ${employee.getName()} </h2> </div>
                <div id="cardTitle" class="card-title"> <h3> Role: ${employee.getRole()} </h3> </div>
                <div class="card-body"> Employee ID: ${employee.getId()} </div>
                <div class="card-body"><a href='mailto: ${employee.getEmail()}'>Send Email</a></div>
                <div class="card-body"> Office Number: ${employee.officeNumber} </div>
            </div>
            `
        } else {
            employeeFsOutput = `
            <div class="card">
                <div id="cardTitle" class="card-title"> <h2> Name: ${employee.getName()} </h2> </div>
                <div id="cardTitle" class="card-title"> <h3> Role: ${employee.getRole()} </h3> </div>
                <div class="card-body"> Employee ID: ${employee.getId()} </div>
                <div class="card-body"><a href='mailto: ${employee.getEmail()}'>Send Email</a></div>
                <div class="card-body"> School: ${employee.getSchool()} </div>
            </div>
            `
        }

        // Adding html end tags to the finalFsOutput
        const finalFsOutput = employeeFsOutput + `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous">
        </script> 
        </body> 
        </html>`;

        // Appending index.html with the finalFsOutput
        fs.appendFile('./dist/index.html', finalFsOutput, (err) => {
            if (err) throw err;
            console.log("Data appended successfully.");
        });
    };
};

// Function that creates new instances of the Engineer class.
// Once the user has answered the four input prompts for the Engineer, they can select whether to create another Engineer, Intern or to finish and build the HTML
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
                createEmployeeHTML();
                return newEngineer;
            };
        });
};

// Function that creates new instances of the Intern class.
// Once the user has answered the four input prompts for the Intern, they can select whether to create another Intern, Engineer or to finish and build the HTML
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

// Initial prompt to the user, creates a new instance of the Manager class.
// Once the user has answered the four input prompts for the Manager, they can select whether to create an Engineer, Intern or to finish and build the HTML
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
            createEmployeeHTML();
            return newManager;
        }

    });
