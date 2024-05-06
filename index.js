// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'Title', message: 'What is the title of your project?'},
    {type: 'input', name: 'Description', message: 'Prove a short description of your Application.'},
    {type: 'input', name: 'Installation', message: 'Define steps required to install your project.'},
    {type: 'input', name: 'Usage', message: 'Provide examples of use for your project.'},
    {type: 'input', name: 'License', message: '"MIT", "Apache", "GPL", "No License"'},
    {type: 'input', name: 'Contributing', message: 'Add contributing developers, or instructions on how they can contribute!'},
    {type: 'input', name: 'Tests', message: 'If you are developing tests, include examples here.'},
    {type: 'input', name: 'Email', message: 'Please enter a valid contact email here!'},
    {type: 'input', name: 'Username', message: 'Please enter your GitHub username here!'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("FILE NOT CREATED INVALID DATA", err);
        } else {
            console.log('File created!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    const generateMarkdown = require('./utils/generateMarkdown');
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
