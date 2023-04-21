const connection = require('./connection');

const database = {
    // ? object with methods to perform database operations
    addEmployee(employee) {
        connection.query('INSERT INTO employee(first_name, last_name, )', employee)
        .then((result) => {
            console.log('adding employee result', result)
        })
        .catch((err) => console.error(err))
    }

    getAllEmployees() {
        connection.query('SELECT * FROM employee').then((result) => {
            console.log('Getting All Employees...')
            console.table(result)
        }).catch((err) => console.log(err))
    }
}

module.exports = database;