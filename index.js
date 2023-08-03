const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

const mysql = require('mysql2');

// Inquirer Questions
const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'selectedOption',
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
        switch (answer.selectedOption) {
            case 'view all departments':
                db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                });
                break;
            case 'view all roles':
                db.query('SELECT * FROM role', function (err, results) {
                    console.table(results);
                });
                break;
            case 'view all employees':
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                });
                break;
        }
    });
}

init();

