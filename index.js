const database = require('./db/database')
const inquirer = require('inquirer')

const trackerQuestions = [{
    type: 'list',
    name: 'choice', message: 'What would you like to do?', choices: [{
        name: 'View all employees', value: 'view all employees'
    }]
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
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


