const database = require('./db/database')
const inquirer = require('inquirer')

const trackerQuestions = [{
    type: 'list',
    name: 'choice', message: 'What would you like to do?', choices: [
        'view all employees', 'view all departments', 'view all roles', 'add a role', 'add an employee',
        'update employee role'
    ]
}]

inquirer
    .prompt(
        /* Pass your questions in here */
        trackerQuestions
    )
    .then((answers) => {
        console.log(answers)
        if (answers.choice === 'view all employees') {
            database.getAllEmployees()
        }
        if (answers.choice === 'view all departments') {
            database.getAllDepartments()
        }
        if (answers.choice === 'view all roles') {
            database.getAllRoles()
        }
        if (answers.choice === 'add a role') {
            database.addRoles()
        }
        if (answers.choice === 'add an employee') {
            database.addEmployee()
        }
        if (answers.choice === 'update employee role') {
            database.updateEmployees()
        }
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });




