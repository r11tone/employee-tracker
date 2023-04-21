const db = require("./connection");

class DB-Access {
  // Keeping a reference to the connection on the class in case we need it later
  constructor(db) {
    this.db = db;
  }
  
  getAlldepartments(){
    return this.db.promise().query(
    "SELECT department.id, department.name from department;"
    );
  }
}
module.exports new DB-Access(db);