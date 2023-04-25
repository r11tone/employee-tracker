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
 },
 addDepartment: function (departments) {
    connection.query('INSERT INTO department(first_name, last_name, )', department)
        .then((result) => {
            console.log('adding department result', result)
        })
        .catch((err) => console.error(err))
 },
 getAllDepartments: function () {
    connection.query('SELECT * FROM department', function (err,results){
        if(err){
            console.log(err)
        }
        console.table(results)
    })
 },
 addRoles: function (role) {
    connection.query('INSERT INTO role(first_name, last_name, )', role)
        .then((result) => {
            console.log('adding role result', result)
        })
        .catch((err) => console.error(err))
 },
 getAllRoles: function () {
    connection.query('SELECT * FROM role', function (err,results){
        if(err){
            console.log(err)
        }
        console.table(results)
    })
 }


}

module.exports = database;



