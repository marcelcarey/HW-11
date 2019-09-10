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

function start() {
  inquirer.prompt({
    type: 'list',
    name: 'menu',
    message: 'Select an option',
    choices:['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product', "Exit" ]
  })
  .then(function(answer){
  switch (answer.menu){
    case 'View Products for Sale':
      viewProductSale();
      break;
      case 'View Low Inventory':
        viewLowInventory()
        break
        case 'Add to Inventory':
          addInventory()
          break
          case 'Add New Product':
          addNewProduct()
          break
          case 'Exit':
              return connection.end();
            

  }
  })
}
start()

function viewProductSale() {
  connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + "$" + res[i].price + " | " + res[i].stock_quantity + " left");
      }
      console.log("-----------------------------------");
      start()
    }); 
}

