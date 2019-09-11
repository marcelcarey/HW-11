DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) default 0,
stock_quantity INT default 0,
PRIMARY KEY(id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dylan rieder slip on", "clothing", 100, 50),
       ("skull candy headphones", "electronics", 60, 100),
       ("basketball", "sports", 50, 80),
       ("soccer ball", "sports", 50, 3),
       ("kayak", "sports", 200, 20),
       ("macbook pro", "electronics", 1400, 20),
       ("iphone xr", "electronics", 1000, 40),
       ("volcom pants", "clothing", 50, 200),
       ("volcom hoodie", "clothing", 90, 100),
       ("60 inch tv", "electronics", 400, 50);
       


CREATE TABLE departments (
	id INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(45) NULL,
    over_head_costs DECIMAL(10,2) NULL,
    department_sales VARCHAR(45) NULL,
    PRIMARY KEY (id)
);

INSERT INTO departments (departmentName, over_head_costs)
VALUES ("electronics", 100000),
       ("sports", 9000),
       ("clothing", 20000);
