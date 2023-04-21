const connection = require('./connection');
const cTable = require('console.table');

const database = {
    // ? object with methods to perform database operations
 addEmployee: function (employee) {
    connection.query('INSERT INTO employee(first_name, last_name, )', employee)
        .then((result) => {
            console.log('adding employee result', result)
        })
        .catch((err) => console.error(err))
 },
 getAllEmployees: function () {
    connection.query('SELECT * FROM employee', function (err,results){
        if(err){
            console.log(err)
        }
        console.table(results)
    })
 }


}

module.exports = database;



