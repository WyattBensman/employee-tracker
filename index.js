const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

const mysql = require('mysql2');

// Inquirer Questions
const questions = [
    {
        type: 'list',
        message: 'What would you like to do today?',
        name: 'allOptions',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
]

// Connect to employee_db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

// Function to prompt questions & return appropriate response
function init() {
    inquirer.prompt(questions).then((answer) => {
        switch (answer) {
            case 'view all departments':
                console.table()
                break;
            case 'view all roles':
                console.table()
                break;
            case 'view all employees':
                console.table()
                break;
        }
    });
}

init();

