var mysql = require('mysql')
var inquirer = require('inquirer')
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Bball310$',
  database: 'bamazonCustomer_DB'  
})

connection.connect(function(err){
    if (err) throw err;
    console.log('connected as id' + connection.threadId)
    start()
    bamazon()
})

function start() {
    inquirer.prompt ({
        type: 'confirm',
        name: 'name',
        message: 'Welcome to Bamazon, anything is possible',
        default: true
    })

    .then(function(user){
        if(user.comfirms === true) {
        itemList() 
    } else {
        console.log('Maybe Next Time')
    }
    
})}

function bamazon() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length ; i ++ ) {
        
            table.push(
             [res[i].id, res[i].product_name, res[i].department_name, parseFloat(res[i].price).toFixed(2), res[i].stock_quantity]
        )
        }
    })}
    

    inquirer.prompt([
        {
            type: "number",
            message: "Please enter the Product ID of the item that you would like to buy?",
            name: "id"
        },
        {
            type: "number",
            message: "How many would you like to buy?",
            name: "quantity"
        },
    ])

    .then(function (inventory) {

        var quantity = inventory.quantity;
        var itemID = inventory.id;

        connection.query('SELECT * FROM products WHERE id=' + itemID, function (err, selectedItem) {
            if (err) throw err;


            if (selectedItem[0].stock_quantity - quantity >= 0) {

                console.log("INVENTORY AUDIT: Quantity in Stock: ", + selectedItem[0].stock_quantity + " Order Quantity: " + quantity);

                console.log("Congratulations! Bamazon has suffiecient inventory of " + selectedItem[0].product_name + " to fill your order!");

               


                console.log("Thank You for your purchase. Your order total will be "+ (cart.quantity * selectedItem[0].price).toFixed(2) + " dollars.", "\nThank you for shopping at Bamazon!");

                       
                connection.query('UPDATE products SET stock_quantity=? WHERE id=?', [selectedItem[0].stock_quantity - quantity, itemID],

                    function (err, inventory) {
                        if (err) throw err;

                        bamazon();  
                    });  

            } else {
             console.log("INSUFFICIENT INVENTORY ALERT: \nBamazon only has " + selectedItem[0].stock_quantity + " " + selectedItem[0].product_name + " in stock at this moment. \nPlease make another selection or reduce your quantity.", "\nThank you for shopping at Bamazon!");

                bamazon(); 
            }
        });
    });




    