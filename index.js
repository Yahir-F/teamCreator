//Requriring modules
const inquirer = require('inquirer');
const fs = require('fs');

//modules lib
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const EmployeeData = [];

const dataQuestions = async () => {
const replies = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your work email?',
    },
    {
        type: 'list',
        name: 'position',
        message: 'What is your position?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
]);

}
