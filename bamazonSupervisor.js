var inquirer = require('inquirer')
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Bball310$",
    database: "bamazon"
  });


  connection.connect(function(err){
    if (err) throw err;
    console.log('connected as id' + connection.threadId)
    start()
    bamazon()
})