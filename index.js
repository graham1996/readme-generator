// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your Github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter the name of your projects Github repo',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a brief description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How will this project be used?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Which command should be used to install dependencies?',
        name: 'installation'
    },
    // {
    //     type: 'input',
    //     message: 'Which command should be used to run testing?',
    //     name: 'tests'
    // },
    {
        type: 'list',
        message: 'Which licenses does your project hold?',
        choices: [
            'MIT',
            'APACHE',
            'BSD',
            'GPL',
            'None'
        ],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let readMe = generateMarkdown(data);
    fs.writeFile(fileName, readMe, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
