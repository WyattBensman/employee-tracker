const fs = require('fs');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

const mysql = require('mysql2');

// Inquirer Questions
const initialQuestion = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'selectedOption',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
]

const addEmployeeQuestions = [
    {
        type: 'input',
        message: "Enter the employee's first name:",
        name: 'first_name',
    },
    {
        type: 'input',
        message: "Enter the employee's last name:",
        name: 'last_name',
    },
    {
        type: 'input',
        message: "Enter the employee's role ID:",
        name: 'role_id',
    },
    {
        type: 'input',
        message: "Enter the employee's manager ID (leave empty if none):",
        name: 'manager_id',
    },
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
    inquirer.prompt(initialQuestion).then((answer) => {
        switch (answer.selectedOption) {
            case 'view all departments':
                db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                    init();
                });
                break;
            case 'view all roles':
                db.query('SELECT * FROM role', function (err, results) {
                    console.table(results);
                    init();
                });
                break;
            case 'view all employees':
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                    init();
                });
                break;
            case 'add an employee':
                addEmployee();
                break;
        }
    });
}

function addEmployee() {
    inquirer.prompt(addEmployeeQuestions).then((answers) => {
        const { first_name, last_name, role_id, manager_id } = answers;
        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

        db.query(query, [first_name, last_name, role_id, manager_id], function (err, results) {
            if (err) throw err;
            console.log('Employee added successfully!');
            init();
        });
    });
}

init();

